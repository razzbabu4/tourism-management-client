import { Bounce } from 'react-awesome-reveal';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateTouristSpot = () => {
    const navigate = useNavigate();
    const touristSpot = useLoaderData();
    const { id } = useParams();
    const singleTouristSpot = touristSpot.find(spot => spot._id === id);
    // console.log(singleTouristSpot)
    const { _id, image, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time, totalVisitorsPerYear, description } = singleTouristSpot;

    const handleAddTouristSpot = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const description = form.description.value;

        const updateTouristSpot = { image, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time, totalVisitorsPerYear, description };
        console.log(updateTouristSpot)

        fetch(`https://tourism-management-server-silk.vercel.app/touristSpots/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    navigate('/myList');
                }
            })
    }
    return (
        <div className="max-w-7xl mx-auto bg-gray-50 p-4 md:p-10 rounded-md">
            <Bounce>
                <h1 className="text-center text-3xl">Update Tourist Spot</h1>
            </Bounce>
            <form onSubmit={handleAddTouristSpot} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" defaultValue={image} name="image" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Place Name</span>
                        </label>
                        <input type="text" defaultValue={tourists_spot_name} name="tourists_spot_name" placeholder="Place Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <input type="text" defaultValue={country_Name} name="country_Name" placeholder="Country" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" defaultValue={location} name="location" placeholder="Location Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cost</span>
                        </label>
                        <input type="text" defaultValue={average_cost} name="average_cost" placeholder="Average Cost" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Season</span>
                        </label>
                        <input type="text" defaultValue={seasonality} name="seasonality" placeholder="Season" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel Duration</span>
                        </label>
                        <input type="text" defaultValue={travel_time} name="travel_time" placeholder="Travel Duration" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <input type="text" defaultValue={totalVisitorsPerYear} name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered" />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" defaultValue={description} name="description" placeholder="Short Description" className=" textarea input input-bordered"></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#D2B48C] text-lg btn-outline border-none">Update Tourist Spots</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTouristSpot;