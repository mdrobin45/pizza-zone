import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import OrderStep from './OrderStep/OrderStep';
import Speciality from './Speciality/Speciality';
import SpecialMenu from './SpecialMenu/SpecialMenu';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <OrderStep />
            <Speciality />
            <SpecialMenu/>
        </div>
    );
};

export default Home;