import { useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function AuthProvider(props) {
    const { children, submit = () => { }, initialValues } = props;

    const [auth, setAuth] = useState(initialValues);

    const userLogin = (authData) => {
        setAuth(authData);
      };
     
      const userLogout = () => {
        setAuth({});
      }


    return (
        <AuthContext.Provider value={{
            user: auth,
            userLogin,
            userLogout,
            isAuthenticated: !!auth.accessToken
        }}>
            {children}
        </AuthContext.Provider>
    )
} 