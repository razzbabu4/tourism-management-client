import { Outlet } from "react-router-dom"
import NavBar from "../header/NavBar";
import Footer from "../components/Footer";
const MainLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;