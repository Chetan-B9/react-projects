import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import './index.css'
import { Databases } from 'appwrite'
import client from './lib/appwrite'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
       <Route path='' element={<Home />}/>
       <Route path='projects' element={<Projects />} loader = {
        async () => {
          const databases = new Databases(client)
          
    try{
      const response = await databases.listDocuments(
        '6637bf49000e48731635',
        '6637bf690031b36d9741'
      )

      return response.documents
    }
    catch (error) {
      console.log(console.error('Failed to fetch'));
      
    }
    return null
        }
       }/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
