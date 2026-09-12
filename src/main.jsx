import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import Login from './login.jsx';
import Settings from './settings.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import Layout from './layout.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {path:"/", element: <Layout><App/></Layout>},
    {path:"/login", element: <Login/>},
    {path:"/settings", element: <Settings/>},    
    {path:"*", element: <NotFoundPage/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
