import React from 'react';
import'../../App.css';
import './Cards.css';
import '../Footer.css';
import Footer from '../Footer';
import Pricing from '../Pricing/Pricing';

import { homeObjCurso11, homeObjCurso12,homeObjCurso13, homeObjCurso14 } from './HomePage/DataCurso';
import InfoCurso11 from '../InfoSectionCurso/InfoCurso11';
import InfoCurso12 from '../InfoSectionCurso/InfoCurso12';
import InfoCurso13 from '../InfoSectionCurso/InfoCurso13';
import InfoCurso14 from '../InfoSectionCurso/InfoCurso14';
function Curso1() {
    
    return (   
        <render>
        <div >                     
            <InfoCurso11 {...homeObjCurso11} />
            <InfoCurso12 {...homeObjCurso12} />    
            <InfoCurso13 {...homeObjCurso13} />  
            <InfoCurso14 {...homeObjCurso14} />     
            <Pricing />            
            <Footer/>                    
        </div> 
        </render> 

    )
    
}
export default Curso1;
