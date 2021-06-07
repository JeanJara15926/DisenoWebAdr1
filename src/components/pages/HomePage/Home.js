import React from 'react';
import '../../../App.css';

import HeroSection from '../../HeroSection';
import Cards from '../Cards';
import Footer from '../../Footer';
import Pricing from '../../Pricing/Pricing';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import InfoSection from '../../InfoSection/InfoSection';

function Home(){
    return(
        
        <>
            <HeroSection/>
            <Cards/>
            <Pricing/>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjFour} />
            <Footer/>
        </>
            
        
    )
}
export default Home;