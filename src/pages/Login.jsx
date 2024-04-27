import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {toast} from 'react-toastify'
import SocialLogin from "../components/SocialLogin";


const Login = () => {
    const {logIn, user} = useAuth();
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        if (user) {
            toast.warning('User already exist')
            return;
        }
        logIn(email, password)
        .then(() => {
            toast.success('Successfully login')
            navigate(location?.state ? location.state : '/')
        })
        .catch(() => {
            toast.warning('Please provide a registered user info')
        });

        form.email.value = "";
        form.password.value = "";

    }
    return (
        <div className="mt-6">
            <div className="w-full m-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                        <input type="text" name="email" id="username" placeholder="Email" className="w-full input input-bordered px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full input input-bordered px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
               
                <SocialLogin></SocialLogin>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Do not have an account?
                    <Link to='/register' className="text-base text-violet-700">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;