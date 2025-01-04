
import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Notfound from './components/Notfound'
import Home from './components/Home'



export default function App() {


  const router = createBrowserRouter([
    {
      index: 'true' ,element : <Layout></Layout>,children:[
        {index:'true' , element:<Home></Home>},
        {path:'/about' , element:<About></About>},
        {path:'/contact' , element:<Contact></Contact>},
        {path:'/portfolio' , element:<Portfolio></Portfolio>},
        {path:'*' , element:<Notfound></Notfound>}
      ] 
    }
  ])


  return (
  
      <RouterProvider router={router}></RouterProvider>
    )
}
