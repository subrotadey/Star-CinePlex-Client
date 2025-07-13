import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import TrailerSection from '../../components/TrailerSection/TrailerSection';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <FeatureSection/>
            <TrailerSection/>
            <Footer></Footer>
        </>
    );
};

export default Home;