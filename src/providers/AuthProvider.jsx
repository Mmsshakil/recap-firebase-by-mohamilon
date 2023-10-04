import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

// 1. create createContext
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // for creat user/ register
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // for sign in
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = { user, creatUser, signInUser }
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