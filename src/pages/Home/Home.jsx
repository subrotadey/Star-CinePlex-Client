import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Footer></Footer>
        </>
    );
};

export default Home;