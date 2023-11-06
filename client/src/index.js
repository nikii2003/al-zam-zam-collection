import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css'
import Signup from './views/Signup/Signup.js'
import Login from './views/Login/Login.js'
import Myorder from './views/Myorder/Myorder.js';
import Home from './views/Home/Home.js';
import BuyPage from './views/BuyPage/BuyPage.js';

const router = createBrowserRouter([
    {
     path : '/',
     element : <Home/>
    },
    {
     path : '/signup',
     element : <Signup/>
    },
    {
    path : '/login',
    element : <Login/>
    },
    {
      path : '/orders',
      element : <Myorder/>
    },
    {
      path:"/buy/:id",
      element : <BuyPage/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
)