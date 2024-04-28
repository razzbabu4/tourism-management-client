import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'

const MyList = () => {
    const { user } = useAuth();
    const [spots, setSpots] = useState([]);
    const [control, setControl] = useState(false);

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then(result=> {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteSpots/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tourist spot has been deleted.",
                                icon: "success"
                            });
                            setControl(!control)
                        }
                    })
            }
        })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSpots(data)
            })
    }, [user, control])

    return (
        <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>Spots Info</th>
                            <th>Short Description</th>
                            <th>Cost</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            spots.map(spot => <tr key={spot._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={spot.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{
                                                spot.tourists_spot_name}</div>
                                            <div className="text-sm opacity-50">{spot.country_Name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {spot.description}
                                </td>
                                <td><span>$</span>{spot.average_cost}</td>
                                <th>
                                    <div className="flex items-center gap-4">
                                        <button className="btn btn-ghost btn-xs text-green-500 btn-outline">Update</button>
                                        <button onClick={()=>handleDelete(spot._id)} className="btn btn-ghost btn-xs text-red-500 btn-outline">Delete</button>
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyList;