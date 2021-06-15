import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements';

function InfoCurso33({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <render>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>                
                <Subtitle lightTextDesc={lightTextDesc}>   
                    <div>                          
                        <h3>¿Qué incluye este curso?</h3>
                        <p > 
                            U1-Introducción<br></br>
                            U2-Aproximación a Revit<br></br>
                            U3-Avanzado de modelamiento<br></br>
                            U4-Obtención de información y datos<br></br>
                            PF-Proyecto final<br></br>
                            <h3>Resumen del curso:</h3>
                            - 15 sesiones<br></br>                        
                            - 12 practicas<br></br>
                            - 18 recursos adicionales (10 archivos pdf)<br></br>
                            - proyecto final                    
                        </p>
                    </div>             
                    {description}
                </Subtitle>             
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </render>
  );
}

export default InfoCurso33;