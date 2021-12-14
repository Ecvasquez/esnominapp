import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter,Switch } from "react-router-dom";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


import {App} from './App';

reactDom.render(
<BrowserRouter>
        <App />
</BrowserRouter>,
document.getElementById('root'))