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

function InfoCurso42({
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
                            A todas las personas que quieran potenciar sus fotografías y vídeos para crear contenido visual atractivo.<br></br>
                            <h3>RSoftware que necesitas:</h3>
                            Adobe Photoshop y Lightroom.<br></br>    
                            <h3>Requisitos:</h3>                    
                            No necesitas conocimientos previos. Sobre los materiales, necesitarás un teléfono móvil con una buena cámara.                        
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

export default InfoCurso42;