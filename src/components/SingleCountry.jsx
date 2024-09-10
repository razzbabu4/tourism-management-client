import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleCountry = ({country}) => {
    const {_id, image, country_Name, description} = country;
    return (
        <Link to={`/specificCountry/${_id}`}>
            <div className="card w-full h-full bg-base-100 shadow-xl image-full hover:scale-105 duration-300">
                <figure><img src={image} alt="country"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{country_Name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
};

SingleCountry.propTypes = {
    country: PropTypes.object
}

export default SingleCountry;