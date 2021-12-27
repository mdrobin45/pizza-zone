import React from 'react';
import BestChef from './BestChef/BestChef';
import BookOnline from './BookOnline/BookOnline';
import HomeBanner from './HomeBanner/HomeBanner';
import LatestNews from './LatestNews/LatestNews';
import OrderStep from './OrderStep/OrderStep';
import Speciality from './Speciality/Speciality';
import SpecialMenu from './SpecialMenu/SpecialMenu';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <OrderStep />
            <Speciality />
            <SpecialMenu />
            <BookOnline />
            <BestChef />
            <LatestNews />
            <Testimonial/>
        </div>
    );
};

export default Home;