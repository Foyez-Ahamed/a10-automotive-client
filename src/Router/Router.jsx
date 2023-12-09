import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import SignIn from "../Pages/SignIn/SignIn";
import AddBrands from "../Components/AddBrands/AddBrands";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import BrandCategory from "../Components/BrandCategory/BrandCategory";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import PrivateAddProduct from "../PrivateRoute/PrivateAddProduct/PrivateAddProduct";
import PrivateProductDetails from "../PrivateRoute/PrivateProductDetails/PrivateProductDetails";
import PrivateUpdate from "../PrivateRoute/PrivateUpdate/PrivateUpdate";
import PrivateMyCart from "../PrivateRoute/PrivateMyCart/PrivateMyCart";

const MyCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://automotive-server-site-sigma.vercel.app/brands')
            },
            {
                path:'/brandCategory/:brandName',
                element: <BrandCategory></BrandCategory>,
                loader: ({params}) => fetch(`https://automotive-server-site-sigma.vercel.app/brandsCategory/${params.brandName}`)
            },
            {
                path: '/productDetails/:id',
                element: <PrivateProductDetails> <ProductDetails></ProductDetails> </PrivateProductDetails>,
                loader: ({params}) => fetch(`https://automotive-server-site-sigma.vercel.app/product/${params.id}`)
            },
            {
                path:'/brands',
                element:<AddBrands></AddBrands>
            },
            {
                path:'/addProduct',
                element: <PrivateAddProduct> <AddProduct></AddProduct> </PrivateAddProduct>
            },
            {
                path:"updateProduct/:id",
                element:<PrivateUpdate> <UpdateProduct></UpdateProduct> </PrivateUpdate>,
                loader: ({params}) => fetch(`https://automotive-server-site-sigma.vercel.app/product/${params.id}`)
            },
            {
                path:'/myCart',
                element:<PrivateMyCart><MyCart></MyCart></PrivateMyCart>,
                // loader: () => fetch('https://automotive-server-site-sigma.vercel.app/addToCart')
            },
            {
                path:'/signUp',
                element: <SignUp></SignUp>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            }
        ]
    }
])

export default MyCreatedRouter;