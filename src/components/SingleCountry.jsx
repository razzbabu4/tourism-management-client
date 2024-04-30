import PropTypes from 'prop-types';

const SingleCountry = ({country}) => {
    const {image, country_Name, description} = country;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="country" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{country_Name}</h2>
                    <p>{description}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

SingleCountry.propTypes = {
    country: PropTypes.object
}

export default SingleCountry;