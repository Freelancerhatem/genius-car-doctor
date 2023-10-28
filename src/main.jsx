import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  createBrowserRouter,

  RouterProvider,

} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import Registration from './Pages/Registration/Registration';
import CheckOut from './Pages/CheckOut/CheckOut';
import MyCheckOut from './Pages/MyCheckOut/MyCheckOut';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([

  {

    path: "/",

    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/checkout/:id',
        element: <CheckOut></CheckOut>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:'/mycheckout',
        element:<PrivateRoute><MyCheckOut></MyCheckOut></PrivateRoute>
      }
    ]

  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
