import React from 'react';
import'../../App.css';
import HeroSection from '../HeroSectionCurso';
import Cards from './Cards';
import Footer from '../Footer';
import Pricing from '../Pricing/Pricing';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './HomePage/DataCurso';
import InfoSectionCurso from '../InfoSectionCurso/InfoSectionCurso1';
import InfoSectionCurso2 from '../InfoSectionCurso/InfoSectionCurso2';
import InfoSectionCurso3 from '../InfoSectionCurso/InfoSectionCurso3';
import InfoSectionCurso4 from '../InfoSectionCurso/InfoSectionCurso4';

function Curso() {

    return(        
        <render>
            <HeroSection/>                     
            <InfoSectionCurso {...homeObjOne} />
            <InfoSectionCurso2 {...homeObjTwo} /> 
            <InfoSectionCurso3 {...homeObjThree} />    
            <InfoSectionCurso4 {...homeObjFour} />         
            <Pricing />            
            <Footer/>
        </render>           
        
    )
    
}
export default Curso;


