

const AddTouristSpot = () => {
    const handleAddTouristSpot = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, test, category, details, photo }
        console.log(newCoffee)


        // send data to server
        
    }
    return (
        <div className="max-w-7xl mx-auto bg-[#F4F3F0] p-4 md:p-20">
            <h1 className="text-center text-3xl">Add New Coffee</h1>
            <form onSubmit={handleAddTouristSpot} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <input type="text" name="test" placeholder="Test" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered" />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#D2B48C]">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddTouristSpot;