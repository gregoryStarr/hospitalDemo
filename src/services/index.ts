/*
Create Services to get data from the API using react and fetch
*/
import { waitForDebugger } from 'inspector';
import { observable, action, computed, autorun, toJS } from 'mobx'
import { AppStore } from '../stores/AppStore';

const API_URL = process.env.APIENDPOINT;

export const get = (hospitals) =>
{
    console.log(`API Value : ${ API_URL }`)
    return fetch(API_URL + '')
        .then(res => res.json())
        .then(data =>
        {
            hospitals  = {...hospitals, ...data};
         })
            .catch (err => console.log(err))
    }

export const del = (hospitals,hospitalObject) =>
{
    if(hospitals.length){
         hospitals.splice(hospitals.indexOf(hospitalObject), 1);
         hospitalObject = null;
    }

     return hospitals;
}

export const add = (hospitals,hospitalObject) =>
{
    console.log(hospitalObject)
    hospitals = [...hospitals, hospitalObject];
    localStorage.setItem('hospital', JSON.stringify(hospitals));
    return hospitals;
}

export const edit = (hospitals,hospitalObject) =>
{
    console.log(hospitalObject)
    hospitals.push(hospitalObject);
    localStorage.setItem('hospital', JSON.stringify(hospitals));
    return hospitals;
}

export const Services = {
    getHospitalData: get,
    deleteHospital: del,
    addHospital: add, editHospital: edit
}