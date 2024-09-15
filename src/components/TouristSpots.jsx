import { useLoaderData } from 'react-router-dom'
import SingleTouristSpot from './SingleTouristSpot';
import { Bounce } from 'react-awesome-reveal';

const TouristSpots = () => {
    const touristSpots = useLoaderData();
    // console.log(touristSpots)
    return (
        <div className='max-w-7xl mx-auto md:my-16'>
            <Bounce>
                <h1 className='text-2xl text-center md:text-4xl font-semibold mt-6'>Tourist Spots</h1>
            </Bounce>
            <div className="max-w-48 mx-auto border border-[#23BE0A] mt-4"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                {
                    touristSpots.map(touristSpot => <SingleTouristSpot key={touristSpot._id} touristSpot={touristSpot}></SingleTouristSpot>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;