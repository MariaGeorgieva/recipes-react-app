import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext';

export default function Logout() {
    const { userLogout } = useAuthContext();

    useEffect(() => {
        userLogout();
    }, [userLogout]);

    return <Navigate to="/" />
};