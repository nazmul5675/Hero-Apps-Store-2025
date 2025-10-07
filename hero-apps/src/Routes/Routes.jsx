import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <div>this is 404</div>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/apps',
                element: <Apps></Apps>
            },
            {
                path: '/installation',
                element: <Installation></Installation>
            }
        ]
    },
]);