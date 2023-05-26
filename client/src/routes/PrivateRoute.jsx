import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return <div className='w-full h-[100vh] bg-black mx-auto flex justify-center items-center'>
            <Oval
                height={60}
                width={60}
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#fff"
                strokeWidth={4}
                strokeWidthSecondary={4}
            />
        </div>
    }

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location }}></Navigate>
    }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;