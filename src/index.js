import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './APp';

const app = (
        <BrowserRouter>
                <App />
        </BrowserRouter>
);

ReactDom.render(app, document.getElementById('root'));
