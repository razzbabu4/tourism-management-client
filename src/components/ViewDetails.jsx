import { useLoaderData, useParams } from 'react-router-dom';
import { BiWorld } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip'

const ViewDetails = () => {
    const allTouristSpots = useLoaderData();
    const { id } = useParams();
    const singleTouristSpot = allTouristSpots.find(touristSpot => touristSpot._id === id);
    // console.log(singleTouristSpot)
    const { image, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time, totalVisitorsPerYear, description, userName, userEmail } = singleTouristSpot
    return (
        <div className='max-w-7xl mx-auto my-8 lg:my-16'>
            <div className="flex flex-col max-w-7xl p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <div className="flex space-x-4">
                    <img alt="" src={image} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{userName}</a>
                        <span className="text-xs text-gray-400 dark:text-gray-600">{userEmail}</span>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" className=" w-full mb-4 h-60 md:h-full bg-gray-500 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{tourists_spot_name}</h2>
                    <p className="text-sm text-gray-400 dark:text-gray-600">{description}</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 text-center '>

                    
                    <p data-tooltip-id="my-tooltip" data-tooltip-content="Country" className='btn'><BiWorld></BiWorld>{country_Name}</p>
                    
                    <Tooltip id="my-tooltip" />
                    <p data-tooltip-id="my-tooltip" data-tooltip-content="Location" className='btn'><FaMapLocationDot />{location}</p>
                    <p data-tooltip-id="my-tooltip" data-tooltip-content="Average Cost" className='btn'><MdOutlinePriceChange />{average_cost}</p>
                    <p data-tooltip-id="my-tooltip" data-tooltip-content="Season" className='btn'><TiWeatherPartlySunny />{seasonality}</p>
                    <p data-tooltip-id="my-tooltip" data-tooltip-content="Travel Duration" className='btn'><IoCalendarNumberOutline />{travel_time}</p>
                    <p data-tooltip-id="my-tooltip" data-tooltip-content="Visitors Per Year" className='btn'><FaPeopleGroup />{totalVisitorsPerYear} <span>Visitors (per year)</span></p>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;