import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}/>
  </React.StrictMode>,
)
