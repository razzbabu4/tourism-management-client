import { useLoaderData } from 'react-router-dom'
import SingleTouristSpot from './SingleTouristSpot';

const TouristSpots = () => {
    const touristSpots = useLoaderData();
    return (
        <div className='max-w-7xl mx-auto md:my-16'>
            <h1 className='text-center text-5xl font-semibold'>Tourist Spots : {touristSpots.length}</h1>
            <div className="max-w-48 mx-auto border border-[#23BE0A] mt-4"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16'>
                {
                    touristSpots.map(touristSpot => <SingleTouristSpot key={touristSpot._id} touristSpot={touristSpot}></SingleTouristSpot>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;