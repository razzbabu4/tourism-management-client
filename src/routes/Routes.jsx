import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allTouristSpot',
                element: <Register></Register>
            },
            {
                path: '/addTouristSpot',
                element: <PrivateRoute>
                    <Register></Register>
                </PrivateRoute>
            },
            {
                path: '/myList',
                element: <PrivateRoute>
                    <Register></Register>
                </PrivateRoute>
            },
        ]
    },
]);

export default router;