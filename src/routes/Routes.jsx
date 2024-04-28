import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AddTouristSpot from "../components/AddTouristSpot";
import MyList from "../components/MyList";
import AllTouristSpots from "../components/AllTouristSpots";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/touristSpots')
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
                element: <AllTouristSpots></AllTouristSpots>,
                loader: ()=> fetch('http://localhost:5000/touristSpots')
            },
            {
                path: '/addTouristSpot',
                element: <PrivateRoute>
                    <AddTouristSpot></AddTouristSpot>
                </PrivateRoute>
            },
            {
                path: '/myList',
                element: <PrivateRoute>
                    <MyList></MyList>
                </PrivateRoute>
            },
        ]
    },
]);

export default router;