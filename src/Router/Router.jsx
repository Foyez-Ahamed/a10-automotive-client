import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import SignIn from "../Pages/SignIn/SignIn";
import AddBrands from "../Components/AddBrands/AddBrands";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const MyCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                path:'/brands',
                element:<AddBrands></AddBrands>
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/myCart',
                element:<MyCart></MyCart>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            }
        ]
    }
])

export default MyCreatedRouter;