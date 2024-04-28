import { Link } from "react-router-dom";
import { CiLocationOn, CiDollar } from "react-icons/ci";
import PropTypes from 'prop-types';

const SingleTouristSpot = ({ touristSpot }) => {
    const { _id, image, tourists_spot_name, country_Name, location, average_cost, seasonality, description } = touristSpot
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl border ">
            <div className="relative">
                <figure><img className="h-72 w-full" src={image} alt="house" /></figure>
                <div className="absolute text-white bg-black font-medium p-3 rounded-tr-xl bg-opacity-50 bottom-0 left-0 flex items-center gap-2">
                    <CiLocationOn className="text-lg font-semibold"></CiLocationOn> {location}
                </div>
                <div className="absolute text-white bg-black font-medium p-3 rounded-tl-xl bg-opacity-50 bottom-0 right-0 flex items-center gap-2">
                    <CiDollar className="text-lg font-semibold"></CiDollar> {average_cost}
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{tourists_spot_name}</h2>
                <p className="font-bold text-green-700">{country_Name}</p>
                <p className="text-blue-500">{seasonality}</p>
                <p className="">{description}</p>
                <div className="card-actions">
                    <Link to={`/viewDetails/${_id}`} className="btn w-full btn-outline bg-[#23BE0A] text-white">View Details</Link>
                </div>
            </div>
        </div>
    );
};

SingleTouristSpot.propTypes = {
    touristSpot: PropTypes.object
}

export default SingleTouristSpot;