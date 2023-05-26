import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import SingleChef from "../pages/SingleChef/SingleChef";
import Page404 from "../pages/Page404/Page404";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/chefs/:id',
                element: <PrivateRoute><SingleChef></SingleChef></PrivateRoute>,
                loader: ({params})=> fetch(`https://server-sepia-nu.vercel.app/chefs/${params.id}`)
            },
            {
                path: '*',
                element: <Page404></Page404>
            }
        ]
    }
])

export default router