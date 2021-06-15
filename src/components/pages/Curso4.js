import React from 'react';
import'../../App.css';
import './Cards.css';
import '../Footer.css';
import Footer from '../Footer';
import Pricing from '../Pricing/Pricing';

import { homeObjCurso41, homeObjCurso42,homeObjCurso43, homeObjCurso44 } from './HomePage/DataCurso';
import InfoCurso41 from '../InfoSectionCurso/InfoCurso41';
import InfoCurso42 from '../InfoSectionCurso/InfoCurso42';
import InfoCurso43 from '../InfoSectionCurso/InfoCurso43';
import InfoCurso44 from '../InfoSectionCurso/InfoCurso44';

function Curso4() {
    
    return (   
        <render>
        <div >                     
            <InfoCurso41 {...homeObjCurso41} />
            <InfoCurso42 {...homeObjCurso42} />    
            <InfoCurso43 {...homeObjCurso43} />  
            <InfoCurso44 {...homeObjCurso44} />     
            <Pricing />            
            <Footer/>                    
        </div> 
        </render> 

    )
    
}
export default Curso4;