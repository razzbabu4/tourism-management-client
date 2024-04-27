import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {toast} from 'react-toastify'


const Register = () => {
    const { createUser, updateUserProfile } = useAuth()
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password)

        if (password.length < 6) {
            toast.warning('Password should be at least 6 characters');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.warning('Please Provide at least one uppercase letter');
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.warning('Please Provide at least one lowercase letter');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(name, photo)
                // .then(() => {
                //     navigate('/')
                //     toast.success('Successfully registered')
                //     setUser({
                //         displayName: name,
                //         photoURL: photo,
                //     })
                //     setUpdate(false)
                // });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

        form.name.value = "";
        form.email.value = "";
        form.photo.value = "";
        form.password.value = "";

    }
    return (
        <div className="mt-6">
            <div className="w-full m-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Name</label>
                        <input type="text" name="name" id="username" placeholder="Full Name" className="w-full input input-bordered px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                        <input type="text" name="email" id="userEmail" placeholder="Email" className="w-full input input-bordered px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">PhotoUrl</label>
                        <input type="text" name="photo" id="userPhoto" placeholder="PhotoUrl" className="w-full input input-bordered px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full input input-bordered px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign up</button>
                </form>

                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Have an account? <Link to='/login' className="text-base text-violet-600">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;