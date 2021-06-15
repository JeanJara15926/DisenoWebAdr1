import React from 'react';
import'../../App.css';
import './Cards.css';
import '../Footer.css';
import Footer from '../Footer';
import Pricing from '../Pricing/Pricing';

import { homeObjCurso31, homeObjCurso32,homeObjCurso33, homeObjCurso34 } from './HomePage/DataCurso';
import InfoCurso31 from '../InfoSectionCurso/InfoCurso31';
import InfoCurso32 from '../InfoSectionCurso/InfoCurso32';
import InfoCurso33 from '../InfoSectionCurso/InfoCurso33';
import InfoCurso34 from '../InfoSectionCurso/InfoCurso34';
function Curso3() {
    
    return (   
        <render>
        <div >                     
            <InfoCurso31 {...homeObjCurso31} />
            <InfoCurso32 {...homeObjCurso32} />    
            <InfoCurso33 {...homeObjCurso33} />  
            <InfoCurso34 {...homeObjCurso34} />     
            <Pricing />            
            <Footer/>                    
        </div> 
        </render> 

    )
    
}
export default Curso3;