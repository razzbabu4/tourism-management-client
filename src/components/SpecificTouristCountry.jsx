import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleTouristSpot from "./SingleTouristSpot";


const SpecificTouristCountry = () => {
    const allCountry = useLoaderData();
    const { id } = useParams();

    const country = allCountry.find(country=> country._id === id);
    console.log(country.country_Name);

    const [touristSpots, setTouristSpots] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/touristSpots/${country.country_Name}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTouristSpots(data)
            })
    }, [country])

    return (
        <div className='max-w-7xl mx-auto md:my-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
                {
                    touristSpots.map(touristSpot => <SingleTouristSpot key={touristSpot._id} touristSpot={touristSpot}></SingleTouristSpot>)
                }
            </div>
        </div>
    );
};

export default SpecificTouristCountry;