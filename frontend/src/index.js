import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StudzoneContext from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StudzoneContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StudzoneContext>
    </React.StrictMode>
);