import React from 'react';
import BookOnline from './BookOnline/BookOnline';
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
            <SpecialMenu />
            <BookOnline/>
        </div>
    );
};

export default Home;