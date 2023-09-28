import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import{createBrowserRouter, RouterProvider} from "react-router-dom"
import Header from './componentes/header/Header.tsx';
import Main from './componentes/main/Main.tsx';
import Footer from './componentes/footer/Footer.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <> 
    <Header/>
    <Main/>
    <Footer/>
    </>,
  },
  {
    path: "/Noticia",
    element: <div>Pagina de Noticias!</div>,
  },
  {
    path: "/Sobre",
    element: <div>Pagina Sobre!</div>,
  },
  {
    path: "/Contato",
    element: <div>Pagina de Contato!</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)