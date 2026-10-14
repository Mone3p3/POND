import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import Login from './login.jsx';
import Registro from './registro.jsx';
import Settings from './settings.jsx';
import VerPost from './verPost.jsx';
import Perfil from './perfil.jsx';
import PerfilAjeno from './perfilAjeno.jsx';
import Busqueda from './busqueda.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import Layout from './layout.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {path:"/", element: <Layout><App/></Layout>},
    {path:"/login", element: <Login/>},
    {path:"/registro", element: <Registro/>},
    {path:"/settings", element: <Layout><Settings/></Layout>},
    {path:"/verPost", element: <Layout><VerPost/></Layout>},
    {path:"/perfil", element: <Layout><Perfil/></Layout>}, 
    {path:"/perfilAjeno", element: <Layout><PerfilAjeno/></Layout>}, 
    {path:"/busqueda", element: <Layout><Busqueda/></Layout>}, 
    {path:"*", element: <NotFoundPage/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
