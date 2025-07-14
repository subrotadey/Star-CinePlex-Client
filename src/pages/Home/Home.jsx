import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import TrailerSection from '../../components/TrailerSection/TrailerSection';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <FeatureSection/>
            <TrailerSection/>
        </>
    );
};

export default Home;