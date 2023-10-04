import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

// 1. create createContext
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // for creat user/ register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // for sign in
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // ------------------------ problem part-------------------------------------------
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                console.log('current user', currentUser);
            }
            return () => {
                unSubscribe();
            }
        })
    }, [])
    // ---------------------------------------------------------------------

    const authInfo = { user, createUser, signInUser }
    console.log(authInfo);

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