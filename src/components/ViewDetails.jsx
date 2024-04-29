import { useLoaderData, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { BiWorld } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";

const ViewDetails = () => {
    const allTouristSpots = useLoaderData();
    const { user } = useAuth();
    const { id } = useParams();
    const singleTouristSpot = allTouristSpots.find(touristSpot => touristSpot._id === id);
    console.log(singleTouristSpot)
    const { image, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time, totalVisitorsPerYear, description, userName, userEmail } = singleTouristSpot
    return (
        <div className='max-w-7xl mx-auto my-16'>
            <div className="flex flex-col max-w-7xl p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <div className="flex space-x-4">
                    <img alt="" src={user?.photoURL} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{userName}</a>
                        <span className="text-xs text-gray-400 dark:text-gray-600">{userEmail}</span>
                        <span className="text-xs text-gray-400 dark:text-gray-600">{user?.metadata?.lastSignInTime}</span>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" className=" w-full mb-4 h-60 md:h-full bg-gray-500 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{tourists_spot_name}</h2>
                    <p className="text-sm text-gray-400 dark:text-gray-600">{description}</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 text-center '>

                    <p className='btn'><BiWorld></BiWorld>{country_Name}</p>
                    <p className='btn'><FaMapLocationDot/>{location}</p>
                    <p className='btn'><MdOutlinePriceChange/>{average_cost}</p>
                    <p className='btn'><TiWeatherPartlySunny/>{seasonality}</p>
                    <p className='btn'><IoCalendarNumberOutline/>{travel_time}</p>
                    <p className='btn'><FaPeopleGroup/>{totalVisitorsPerYear} <span>Visitors (per year)</span></p>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;