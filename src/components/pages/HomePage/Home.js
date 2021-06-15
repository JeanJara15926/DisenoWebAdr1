import React from 'react';
import '../../../App.css';

import HeroSection from '../../HeroSection';
import Cards from '../Cards';
import Footer from '../../Footer';
import Pricing from '../../Pricing/Pricing';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import InfoSection from '../../InfoSection/InfoSection';
import InfoSection2 from '../../InfoSection/InfoSection2';
function Home(){
    return(        
        <render>
            <HeroSection/>
            <Cards/>            
            <InfoSection {...homeObjOne} />
            <InfoSection2 {...homeObjThree} />            
            <Pricing />            
            <Footer/>
        </render>           
        
    )
}
export default Home;