import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';

export const WithAuthRedirect = (Component, navigateTo) => {
    const ProtectedComponent = props => {
        const isLoggedIn = useSelector(selectIsLoggedIn);
        const isRefreshing = useSelector(selectIsRefreshing);

        return isLoggedIn &&!isRefreshing? (
            <Component {...props} /> 
        ) : (
            <Navigate to={navigateTo} />
        );
    };

    return ProtectedComponent;
};

export default WithAuthRedirect;