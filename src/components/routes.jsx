import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Home";
import Pets from "./pages/Pets&supplise";
import AddListening from "./pages/AddListing";
import MyListening from "./pages/MyListening";
import MyOrders from "./pages/MyOrders";
import ListDetails from "./ListDetails";
import Login from "./Login/Login";
import PrivateRoutes from "./context/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            path:'/',
            index:true,
            Component: Home,
            loader: ()=>fetch('http://localhost:3000/recent-listing')
        },
        {
            path:'/list-details/:id',
            Component: ListDetails,
            // loader:({params}) => fetch(`http://localhost:3000/list-details/${params.id}`)
            
        },
        {
            path:'/pets-supplies',
            Component: Pets,
            loader: () => fetch('http://localhost:3000/listing')
        },
        {
            path:'/add-listening',
            element:<PrivateRoutes><AddListening></AddListening></PrivateRoutes>
        },
        {
            path:'/my-listening',
            element:<PrivateRoutes><MyListening></MyListening></PrivateRoutes>
        },
        {
            path:'/my-orders',
            element:<PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>
        },
        {
            path:'/login',
            Component:Login
        }
    ]
  },
]);