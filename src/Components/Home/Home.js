import React from 'react';
import Banner from '../Banner/Banner';
import Benefits from '../Benefits/Benefits';
import Companies from '../Companies/Companies';
import Featured from '../Featured/Featured';
import Offer from '../Offer/Offer';
import Products from '../Products/Products';
import Sale from '../Sale/Sale';

const Home = () => {
    return (
        <div>
            <Banner />
            <Benefits />
            <Products />
            <Featured />
            <Offer />
            <Sale />
            <Companies />
        </div>
    );
};

export default Home;