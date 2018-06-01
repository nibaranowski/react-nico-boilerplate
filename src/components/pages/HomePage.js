import React from 'react';
import Header from '../home-page/Header';
import Main from '../home-page/Main';
import Details from '../home-page/Details';
import Customers from '../home-page/Customers';
import Testimonials from '../home-page/Testimonials';
import Footer from '../home-page/Footer';


const HomePage = () => (
    <div>
        <Header />
        <Main />
        <Details />
        <Customers />
        <Testimonials />
        <Footer />
    </div>
);

export default HomePage;
