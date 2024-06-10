import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../routes';

const HomePage = () => {
    
    const navigate = useNavigate();

    useEffect(() => {
        navigate(routes.START_MOKUMMATCH)
    },[navigate]);  

    return (
        <></>
    );
};

export default HomePage