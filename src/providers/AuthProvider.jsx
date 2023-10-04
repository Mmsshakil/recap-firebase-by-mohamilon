import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

// 1. create createContext
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // for creat user/ register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // for sign in
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // for signout
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // ------------------------ problem part-------------------------------------------
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log('current user', currentUser);
            }
            return () => {
                unSubscribe();
            }
        })
    }, [])
    // ---------------------------------------------------------------------

    const authInfo = { user, createUser, signInUser, logOut, loading }
    console.log('Auth observing',authInfo);

    return (
        // 2. set provider with value
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.protoTypes = {
    children: PropTypes.node
}