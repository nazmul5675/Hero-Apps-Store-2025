import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import AppDetailsPage from "../Pages/AppDetailsPage/AppDetailsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                index: true,
                loader: () => fetch('/appData.json'),
                element: <Home></Home>
            },
            {
                path: '/apps',
                element: <Apps></Apps>
            },
            {
                path: '/installation',
                element: <Installation></Installation>
            },
            {
                path: '/appDetails/:id',
                loader: () => fetch('/appData.json'),
                element: <AppDetailsPage></AppDetailsPage>
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            }
        ]
    },
]);