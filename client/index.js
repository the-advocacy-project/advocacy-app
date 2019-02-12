import React from 'react';
// import ReactDOM from 'react-dom';
// import Greeting from './Greeting';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
