import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';

// Rendering our app to the DOM
ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));

