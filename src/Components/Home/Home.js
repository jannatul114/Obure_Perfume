import React from 'react';
import Banner from '../Banner/Banner';
import Benefits from '../Benefits/Benefits';
import Companies from '../Companies/Companies';
import Featured from '../Featured/Featured';
import Sale from '../Sale/Sale';

const Home = () => {
    return (
        <div>
            <Banner />
            <Benefits />
            <Featured />
            <Sale />
            <Companies />
        </div>
    );
};

export default Home;