import { action, autorun, configure, observable } from 'mobx'
import {Services} from 'services/index'
configure({ enforceActions: 'always' })

type IAppStore {
    hospitals: any,
    loading: boolean,
    error: boolean,
    SelectedHospital: any,
    getHospitalData: () => void,
    deleteHospital: (hospitalObject: any) => void,
    addHospital: (hospitalObject: any) => void,
    editHospital: (hospitalObject: any) => void,
    setSelectedHospital: (hospitalObject: any) => void,
    getSelectedHospital: () => void,
    StoreName: string
}

export class AppStore implements IAppStore {
    @observable hospitals:[] = []
    @observable loading= false
    @observable error=  false
    @observable SelectedHospital=() => void,
    @observable deleteHospital=() => void,
    @observable addHospital=() => void,
    @observable editHospital=() => void,
    @observable getHospitalData=() => void,
    @observable setSelectedHospital=() => void,
    @observable getSelectedHospital=() => void,
    @observable StoreName='appStore'


    constructor() {
        this.StoreName = 'appStore'
        this.loading = false;
        this.hospitals = global.initialState;
        selectedHospital = ()=>[])
        Services.getHospitalData().then(data => {
            debugger;
            this.hospitals = {...data};
            autorun(this.save)
            this.load();
            this.loading = true;
        })


        autorun(this.save)
    }

    private save = () =>
        window.localStorage.setItem(
            'appState',
            JSON.stringify({
                language: this.language,
                hospitals: this.hospitals
            })
        )

    @action
    private load = () =>
        Object.assign(this, JSON.parse(window.localStorage.getItem('appState') || '{}'))

    @action
    add = (language: Language) => {
        this.language = language
    }

    @action
    edit = (hospital: Hospital) => {
        this.SelectedHospital = hospital
    }


    @action
    del = (hospital: Hospital) => {
        this.SelectedHospital = hospital
    }
}



// import { makeAutoObservable, runInAction, reaction } from "mobx"
// import uuid from "node-uuid"
// import {Services} from "../services"
//import { Services } from '../services/index';

// type TAppStore = {hospitals:any}


// type THospital = {id : string, name: string, address: string, phone: string, email: string, website: string, image: string}}
// export class Hospital:THospital{

//     id = uuid.v4()
//     name = "No Name"
//     address = "Address"
//     phone = "Phone"
//     email = "Email"
//     website = "Website"
//     latitude = 0
//     longitude = 0
//     services = []

//     constructor(){
//         makeAutoObservable(this)
//     }

//     edit(newDefinition){
//         this.name = newDefinition.name
//         this.address = newDefinition.address
//         this.phone = newDefinition.phone
//         this.email = newDefinition.email
//         this.website = newDefinition.website
//         this.latitude = newDefinition.latitude
//         this.longitude = newDefinition.longitude
//         this.services = newDefinition.services
//     }

//     delete(){
//         Services.deleteHospital(this.id)
//     }

//     dispose() {
//         this.saveHandler()
//     }
// }


// export class AppStore:TAppStore{ {
//     hospitals = [];
//     isLoading = false;
//     hasErrors = false;

//     constructor() {
//         makeAutoObservable(this);
//         this.hospitals = []
//         this.isLoading = false;
//         this.hasErrors= false
//         this.loadHospitals()
//     }

//     loadHospitals(){

//         console.log('loading hospitals')
//         this.isLoading = true
//        Services.getHospitalData.then(fetchedhospitals => {
//             runInAction(() => {
//                 console.log('we have fetched the hospitals')
//                 fetchedhospitals.forEach(json => this.updateHospitalsFromServer(json))
//                 this.isLoading = false
//             })
//         })
//     }

//      updateHospitalsFromServer(json) {
//         console.log('updating hospitals from server')
//         let hospital = this.hospitals.find(hospital => hospital.id === json.id)
//         if (!hospital) {
//             hospital = new Hospital(this, json.id)
//             this.hospitals.push(hospital)
//         }
//         if (json.isDeleted) {
//             this.removeHospital(hospital)
//         } else {
//             hospital.updateFromJson(json)
//         }
//     }

//     // Creates a fresh Todo on the client and the server.
//     createTodo() {
//         const todo = new Todo(this)
//         this.todos.push(todo)
//         return todo
//     }

//     // A Todo was somehow deleted, clean it from the client memory.
//     removeHospital(hospital) {
//         this.hospitals.splice(this.hospitals.indexOf(hospital), 1)
//         hospital.dispose()
//     }
// }
