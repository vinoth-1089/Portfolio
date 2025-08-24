import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Front from "./front.jsx"
import Resume from './resume.jsx'
import Project from './project.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Front />  
  },
  {
    path: '/resume',
    element: <Resume /> 
  },
    {
    path: '/project',
    element: <Project /> 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
