import React from 'react';
import ReactDom from 'react-dom';
import {App} from './App';
import reportWebVitals from '../reportWebVitals';
const AppTree = <React.StrictMode>
<App />
</React.StrictMode>

ReactDom.render( AppTree, document.querySelector("#root"));

reportWebVitals();
