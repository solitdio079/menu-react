import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Details from './pages/details.jsx'
import Hero from './components/Hero.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        index:true,
        element:<Hero/>
      },
      {
        path:"/details/:menuId/:excludedId",
        element:<Details/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
