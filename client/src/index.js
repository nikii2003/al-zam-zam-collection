import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css'
import Signup from './views/Signup/Signup.js'
import Login from './views/Login/Login.js'

const router = createBrowserRouter([
    {
     path : '/',
     element : <h1>hello</h1>
    },
    {
     path : '/signup',
     element : <Signup/>
    },
    {
    path : '/login',
    element : <Login/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
)