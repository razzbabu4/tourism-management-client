import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import icon from '../../public/logo.gif'

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [theme, setTheme] = useState('light');
    useEffect(()=>{
        localStorage.setItem('theme', theme);
        const savedTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', savedTheme)
    },[theme]); 
    const handleTheme = e =>{
        if(e.target.checked){
            setTheme('synthwave')
        }
        else{
            setTheme('light')
        }
    }
    // console.log(theme)
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

                            <li><Link className=" bg-red-300 px-4 text-white text-center" onClick={logOut}>Logout</Link></li>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className="h-10 w-10 rounded-full hidden lg:flex" src={icon} alt="icon" /><span className="">Wander Wisely</span></a>
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
                            <span className="text-black bg-gray-100 p-3 rounded-lg absolute right-12 opacity-0 group-hover:opacity-70">
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
                 <label className="swap swap-rotate ml-4">
                    {/* this hidden checkbox controls the state */}
                    <input
                    onChange={handleTheme}
                     type="checkbox" 
                     className="theme-controller" 
                     />

                    {/* sun icon */}
                    <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default NavBar;