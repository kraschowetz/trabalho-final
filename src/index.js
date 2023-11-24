import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.js';
import TI from './JavaScript/TI/TI.js'
import Ciencias from './JavaScript/Ciencias/Ciencias.js';
import Mat from './JavaScript/Mat/Mat.js';
import Projetos from './JavaScript/Projetos/Projetos.js'
import Linguagens from './JavaScript/Linguagens/Linguagens.js';
import Humanas from './JavaScript/Humanas/Humanas.js';
import MachineLearning from './JavaScript/TI/MachineLearning.js';
import IA from './JavaScript/TI/IA.js';
import Automacao from './JavaScript/TI/Automacao.js';
import RA from './JavaScript/TI/RA.js';
import MetaVerso from './JavaScript/TI/MetaVerso.js';

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
    {
    path: "Linguagens",
    element: <Linguagens/>
  },
  {
    path: "TI/MachineLearning",
    element: <MachineLearning/>
  },
  {
    path: "TI/IA",
    element: <IA/>
  },
  {
    path: "TI/Automacao",
    element: <Automacao/>
  },
  {
    path: "TI/RA",
    element: <RA/>
  },
  {
    path: "TI/MetaVerso",
    element: <MetaVerso/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
