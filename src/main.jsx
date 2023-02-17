import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import './index.css';
import { HashRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);