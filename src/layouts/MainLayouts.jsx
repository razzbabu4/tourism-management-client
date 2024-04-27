import { Outlet } from "react-router-dom"
import NavBar from "../header/NavBar";
const MainLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;