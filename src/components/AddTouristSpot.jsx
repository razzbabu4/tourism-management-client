import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'

const AddTouristSpot = () => {
    const { user } = useAuth()
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
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;


        const newTouristSpot = { image, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time, totalVisitorsPerYear, description, userEmail, userName };
        console.log(newTouristSpot)


        // send data to server
        fetch('https://tourism-management-server-silk.vercel.app/touristSpots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Tourist Spot added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }
    return (
        <div className="max-w-7xl mx-auto bg-gray-50 p-4 md:p-10 rounded-md">
            <h1 className="text-center text-3xl">Add New Tourist Spot</h1>
            <form onSubmit={handleAddTouristSpot} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="image" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Place Name</span>
                        </label>
                        <input type="text" name="tourists_spot_name" placeholder="Place Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <input type="text" name="country_Name" placeholder="Country" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cost</span>
                        </label>
                        <input type="text" name="average_cost" placeholder="Average Cost" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Season</span>
                        </label>
                        <input type="text" name="seasonality" placeholder="Season" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel Duration</span>
                        </label>
                        <input type="text" name="travel_time" placeholder="Travel Duration" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <input type="text" name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="userName" placeholder="User Name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="text" name="userEmail" placeholder="User Email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" name="description" placeholder="Short Description" className=" textarea input input-bordered"></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#D2B48C] text-lg btn-outline border-none">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddTouristSpot;