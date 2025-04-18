import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './Root.jsx';
import Error from './Error Page/Error.jsx';
import Home from './Components/Home.jsx';
import MainNews from './Components/MainNews.jsx';
import About from './Components/About.jsx';
import Auth from './Authenticaion/Auth.jsx';
import Login from './Authenticaion/Login.jsx';
import Register from './Authenticaion/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        children:[
          {
            path:'',
            element: <Navigate to={'/category/01'}></Navigate>
          },
          {
            path:'category/:id',
            element: <MainNews></MainNews>,
            loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
          },
          {
            path: '/about',
            element:<About></About>
          },
          
        ]
      },
      {
        path: '/auth',
        element: <Auth></Auth>,
        children:[
          {
            path: '/auth/login',
            element: <Login></Login>
          },
          {
            path: '/auth/register',
            element: <Register></Register>
          }
        ]
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
