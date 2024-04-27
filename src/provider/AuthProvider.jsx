import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const userInfo = {
        createUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
            <ToastContainer/>
        </AuthContext.Provider>
    );
};

export default AuthProvider;