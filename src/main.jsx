import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dummy from './component/Dummy.jsx'
import Users from './component/Users.jsx'


const router = createBrowserRouter([{
  path:"/dummy",
  element:<Dummy/>
},

{
  path:"/user/:id",
  element:<Users/>
},

{
  path:"*",
  element: <h3>user not found</h3>
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
