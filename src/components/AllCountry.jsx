// import {useLoaderData} from 'react-router-dom'
import SingleCountry from './SingleCountry';
import { useEffect, useState } from 'react';
import { Bounce } from 'react-awesome-reveal';

const AllCountry = () => {
    // const countries = useLoaderData()
    // console.log(countries)

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch(`https://tourism-management-server-silk.vercel.app/country`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountries(data)
            })
    }, [])
    return (
        <div className='max-w-7xl mx-auto md:my-16'>
            <div>
                <Bounce>
                    <h1 className='text-2xl text-center md:text-4xl font-semibold'>Countries</h1>
                </Bounce>
                <div className="max-w-40 mx-auto border border-[#23BE0A] mt-4"></div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                    {
                        countries.map(country => <SingleCountry key={country._id} country={country}></SingleCountry>)
                    }
                </div>
            </div>
        </div>

    );
};

export default AllCountry;