import {
    createBrowserRouter
} from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Pages/Home/Home";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import Feedback from "../Components/Pages/Feeback/Feedback";
import Offer from "../Components/Pages/Offer/Offer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                element: <Feedback></Feedback>
            },
            {
                path: '/offer',
                element: <Offer></Offer>
            }
        ]
    },
]);

export default router;