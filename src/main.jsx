import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componenets/Layout/Home';
import Shop from './componenets/Shop/Shop';
import Order from './componenets/Order/Order';
import Inventory from './componenets/Inventory/Inventory';
import Login from './componenets/Login/Login';
import cartProductsLoader from './componenets/Loader/CartProductsLoader';
import Checkout from './componenets/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:"orders",
        element:<Order></Order>,
        loader: cartProductsLoader

      },
      {
        path: "checkout",
        element: <Checkout></Checkout>
      },
      {
        path:"inventory",
        element:<Inventory></Inventory>

      },
      {
        path:"login",
        element:<Login></Login>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
     </React.StrictMode>,
)
