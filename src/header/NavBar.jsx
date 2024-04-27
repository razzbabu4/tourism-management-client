import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
    const { user, logOut } = useAuth();

    const navLink =
        <>
            <li><NavLink to='/' style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "#23BE0A" : "",
                    border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "white" : "",
                };
            }}>Home</NavLink></li>
            <li><NavLink to='/allTouristSpot' style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "#23BE0A" : "",
                    border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "white" : "",
                };
            }}>All Tourist Spot</NavLink></li>
            {user && <li><NavLink to='/addTouristSpot' style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "#23BE0A" : "",
                    border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "white" : "",
                };
            }}>Add Tourist Spot</NavLink></li>}
            {user && <li><NavLink to='/myList' style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "#23BE0A" : "",
                    border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "white" : "",
                };
            }}>My List</NavLink></li>}


        </>
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto my-6 shadow-md">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                        {user &&

                            <li><Link className=" bg-red-500 px-4 text-white text-center" onClick={logOut}>Logout</Link></li>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className="h-10 w-10 hidden lg:flex" src='' alt="icon" /><span className="">Haven Harbor</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <div>
                        <div className="btn btn-ghost btn-circle avatar relative group">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                            </div>
                            <span className="text-black bg-gray-100 p-3 rounded-lg absolute top-6 right-12 opacity-0 group-hover:opacity-70">
                                <div className="flex flex-col gap-2">
                                {user.displayName || 'Unknown'}
                                <Link className="bg-red-500 p-2 text-white rounded-md" onClick={logOut}>Logout</Link>
                                </div>
                            </span>
                        </div>
                    </div>
                </>
                    : <div className="flex gap-2">
                        <Link to='/login' className="btn bg-[#23BE0A] text-white">Login</Link>
                        <Link to='/register' className="btn bg-[#5154f4] text-white">Register</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default NavBar;