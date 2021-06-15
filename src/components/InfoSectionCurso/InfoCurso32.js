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

function InfoCurso32({
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
                        <h3>¿A quién está dirigido?</h3>
                        <p > 
                            A arquitectos, ingenieros y cualquier persona que quiera empezar a modelar espacios en 3D y dar sus primeros pasos en el software líder de la metodología BIM, Revit.<br></br>
                            <h3>Requisitos</h3>
                            Es recomendable tener conocimientos de AutoCAD.<br></br>                        
                            Necesitarás una computadora con Windows 7 (o mayor) que cumpla con los requisitos técnicos de Revit versión 2019 (o superior); los puedes revisar en la página oficial de Autodesk Revit. Podrás descargarte una versión de prueba de 30 días en la página de Autodesk.                        
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

export default InfoCurso32;