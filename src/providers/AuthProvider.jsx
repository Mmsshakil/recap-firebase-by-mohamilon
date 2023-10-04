import { createContext } from "react";
import PropTypes from 'prop-types';


// 1. create createContext
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const authInfo = { name: 'hello world' }

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