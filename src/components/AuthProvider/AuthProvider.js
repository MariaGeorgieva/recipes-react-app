import { useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { authServiceFactory } from '../../services/authService';
export default function AuthProvider({ children }) {
    // const { children, initialValues } = props;

    const [auth, setAuth] = useState({});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userRegister = (authData) => {
        setAuth(authData);
    };

    const authService = authServiceFactory(auth.accessToken)

    const userLogout = () => {
        setAuth({});
    }

    const contextValues = {
        userLogin,
        userRegister,
        // onRegisterSubmit,
        userLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,
    };
    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
} 