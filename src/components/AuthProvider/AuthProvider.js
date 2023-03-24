import { AuthContext } from '../../context/AuthContext';
import { useLocalStorage} from  '../../hooks/useLocalStorage'


export default function AuthProvider({ children }) {

    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userRegister = (authData) => {
        setAuth(authData);
    };


    const userLogout = () => {
        setAuth({});
    }

    const contextValues = {
        userLogin,
        userRegister,
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