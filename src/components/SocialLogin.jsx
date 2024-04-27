import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    const { googleLogin, githubLogin } = useAuth();

    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate();

    const handleSocialMedia = (socialMedia) => {
        socialMedia()
            .then(result => {
                if (result.user) {
                    navigate(location?.state || '/')
                }
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    return (
        <>
            <div className="flex justify-center space-x-4">
                <button onClick={() => handleSocialMedia(googleLogin)} aria-label="Log in with Google" className="p-3 rounded-sm">
                    <FcGoogle className="text-2xl"></FcGoogle>
                </button>
                <button onClick={() => handleSocialMedia(githubLogin)} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                    <FaGithub className="text-2xl"></FaGithub>
                </button>
            </div>
        </>
    );
};

export default SocialLogin;