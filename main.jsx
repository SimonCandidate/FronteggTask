import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FronteggProvider } from '@frontegg/react';
import Axios from 'axios'

const contextOptions = {
  baseUrl: 'https://app-3ssa6505kmho.frontegg.com',
  clientId: 'f64e989e-ba21-4ade-be0a-222eb4f27217'
};

const authOptions = {
  keepSessionAlive: true // Uncomment this in order to maintain the session alive
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);
