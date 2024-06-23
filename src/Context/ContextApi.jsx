import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
export const ContextApi = createContext(null)

const Contextapp = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)


    
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }

    const UserLogout = async () => {
        setLoading(false)
        // await axiosSecure(`${import.meta.env.VITE_SERVER_URL}/jwt-logout`, {
        //     withCredentials: true,
        // })
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(true)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const value = { user,setLoading ,loading , googleLogin , UserLogout }
    return (
        <ContextApi.Provider value={value}>{children}</ContextApi.Provider>
    );
};

export default Contextapp;

