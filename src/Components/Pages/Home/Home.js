import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import OrderStep from './OrderStep/OrderStep';
import Speciality from './Speciality/Speciality';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <OrderStep />
            <Speciality/>
        </div>
    );
};

export default Home;