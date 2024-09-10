import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleTouristSpot from "./SingleTouristSpot";
import { Bounce } from "react-awesome-reveal";


const SpecificTouristCountry = () => {
    const allCountry = useLoaderData();
    const { id } = useParams();

    const country = allCountry.find(country => country._id === id);
    console.log(country.country_Name);

    const [touristSpots, setTouristSpots] = useState([])

    useEffect(() => {
        fetch(`https://tourism-management-server-silk.vercel.app/touristSpots/${country.country_Name}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTouristSpots(data)
            })
    }, [country])

    return (
        <div className='max-w-7xl mx-auto md:my-16'>
            <Bounce>
                <h1 className='text-center text-4xl font-semibold'>Tourist Spots of {country.country_Name}</h1>
            </Bounce>
            <div className="max-w-72 mx-auto border border-[#23BE0A] mt-4"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                {
                    touristSpots.map(touristSpot => <SingleTouristSpot key={touristSpot._id} touristSpot={touristSpot}></SingleTouristSpot>)
                }
            </div>
        </div>
    );
};

export default SpecificTouristCountry;