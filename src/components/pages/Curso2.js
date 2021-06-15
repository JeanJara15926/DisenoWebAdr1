import React from 'react';
import'../../App.css';
import './Cards.css';
import '../Footer.css';
import Footer from '../Footer';
import Pricing from '../Pricing/Pricing';

import { homeObjCurso21, homeObjCurso22,homeObjCurso23, homeObjCurso24 } from './HomePage/DataCurso';
import InfoCurso21 from '../InfoSectionCurso/InfoCurso21';
import InfoCurso22 from '../InfoSectionCurso/InfoCurso22';
import InfoCurso23 from '../InfoSectionCurso/InfoCurso23';
import InfoCurso24 from '../InfoSectionCurso/InfoCurso24';
function Curso2() {
    
    return (   
        <render>
        <div >                     
            <InfoCurso21 {...homeObjCurso21} />
            <InfoCurso22 {...homeObjCurso22} />    
            <InfoCurso23 {...homeObjCurso23} />  
            <InfoCurso24 {...homeObjCurso24} />     
            <Pricing />            
            <Footer/>                    
        </div> 
        </render> 

    )
    
}
export default Curso2;