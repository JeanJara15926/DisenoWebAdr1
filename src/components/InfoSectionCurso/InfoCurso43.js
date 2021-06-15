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

function InfoCurso43({
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
                        <h3>Resumen del curso:</h3>
                        <p > 
                            - 18 sesiones<br></br>
                            - 15 practicas<br></br>
                            - 24 recursos adicionales (6 archivos pdf)<br></br>
                            - Proyecto final<br></br>
                            <h3>¿QUÉ INCLUYE ESTE CURSO?</h3>
                            U1-Introducción<br></br>    
                            U2-Los elementos esenciales<br></br>  
                            U3-Conoce tu equipo y define tu contenido<br></br>  
                            U4-Shooting<br></br>  
                            U5-Edita como un profesional <br></br>  
                            PF-Proyecto final
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

export default InfoCurso43;