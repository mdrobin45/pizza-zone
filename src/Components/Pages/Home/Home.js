import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import OrderStep from './OrderStep/OrderStep';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <OrderStep/>
        </div>
    );
};

export default Home;