import {
    createBrowserRouter
} from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Pages/Home/Home";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import Feedback from "../Components/Pages/Feedback/Feedback";
import Offer from "../Components/Pages/Offer/Offer";
import Login from "../Components/Login and Register/Login";
import Register from "../Components/Login and Register/Register";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import ServiceDetails from "../Components/Pages/Home/Services/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path: '/feedback',
                element: <PrivateRoute><Feedback></Feedback></PrivateRoute>
            },
            {
                path: '/offer',
                element: <PrivateRoute><Offer></Offer></PrivateRoute>
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
                path: '/service/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/services.json')
            }
        ]
    },
]);

export default router;