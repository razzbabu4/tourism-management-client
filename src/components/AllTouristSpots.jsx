import { useLoaderData } from 'react-router-dom'
import SingleTouristSpot from './SingleTouristSpot';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const AllTouristSpots = () => {
    const allTouristSpots = useLoaderData();
    const [spot, setSpot] = useState([])
    const [sortCost, setSortCost] = useState([])

    const handleCostFilter = filterText => {
        if (filterText === 'costDes') {
            const cost = spot.slice().sort((a, b) => b.average_cost - a.average_cost)
            setSortCost(cost)
        }
        if (filterText === 'costAss') {
            const cost = spot.slice().sort((a, b) => a.average_cost - b.average_cost)
            setSortCost(cost)
        }
    }
    useEffect(() => {
        setSpot(allTouristSpots)
        setSortCost(allTouristSpots)
    }, [allTouristSpots])
    
    return (
        <div className='max-w-7xl mx-auto md:my-16'>
            <h1 className='text-center text-4xl font-semibold'>All Tourist Spots</h1>
            <div className="max-w-48 mx-auto border border-[#23BE0A] mt-4"></div>
            <div className="my-2 text-right">
                <details className="dropdown">
                    <summary className="btn m-1 text-white bg-[#23BE0A]">Sort By <IoIosArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleCostFilter('costAss')}><a>Average Cost (l-h)</a></li>
                        <li onClick={() => handleCostFilter('costDes')}><a>Average Cost (h-l)</a></li>
                    </ul>
                </details>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
                {
                    sortCost.map(touristSpot => <SingleTouristSpot key={touristSpot._id} touristSpot={touristSpot}></SingleTouristSpot>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpots;