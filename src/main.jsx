import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  Route,RouterProvider ,createBrowserRouter} from 'react-router-dom'
import { createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubinfoloader } from './components/Github/Github.jsx'
const router=createBrowserRouter([{
  path:"/simple-clone",
  element:<Layout/>,
  children:[{
    path:'',
    element:<Home/>
  },{path:"/simple-clone/about",
    element:<About/>
  
  },{path:"/simple-clone/contact",
    element:<Contact/>
  },
  ,{path:"/simple-clone/user/:userid",
    element:<User/>
  },{ loader : githubinfoloader,
    path:"/simple-clone/github",
    element:<Github/>
  }


]
}]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
  </StrictMode>,
)
