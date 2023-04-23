import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { App } from "./App.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React from 'react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  )
  
  //  AQUI SÓLO IMPORTO LA APP