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
import UpdateTouristSpot from "../components/UpdateTouristSpot";
import ViewDetails from "../components/ViewDetails";
import AllCountry from "../components/AllCountry";

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
                path: '/updateSpot/:id',
                element: <UpdateTouristSpot></UpdateTouristSpot>,
                loader: ({params})=> fetch(`http://localhost:5000/touristSpots/${params.id}`)
            },
            {
                path: '/myList',
                element: <PrivateRoute>
                    <MyList></MyList>
                </PrivateRoute>
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/touristSpots')
            },
            {
                path: '/countries',
                element: <AllCountry></AllCountry>,
                // loader: ()=> fetch('http://localhost:5000/country')
            }
        ]
    },
]);

export default router;