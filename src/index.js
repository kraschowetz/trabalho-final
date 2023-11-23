import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import TI from './TI/TI.js'
import Ciencias from './Ciencias/Ciencias.js';
import Mat from './Mat/Mat.js';
import Projetos from './Projetos/Projetos.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Humanas from './Humanas/Humanas.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "TI",
    element: <TI/>
  },
  {
    path: "Humanas",
    element: <Humanas/>
  },
    {
    path: "Ciencias",
    element: <Ciencias/>
  },
      {
    path: "Mat",
    element: <Mat/>
  },
  {
    path: "Projetos",
    element: <Projetos/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
