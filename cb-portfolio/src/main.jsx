import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
       <Route path='' element={<Home />}/>
       <Route path='projects' element={<Projects />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
