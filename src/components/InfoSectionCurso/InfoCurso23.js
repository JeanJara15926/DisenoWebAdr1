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

function InfoCurso23({
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
                        <h3>UNIDAD I</h3>
                        <p > 
                        - historia del color y su utilización durante el tiempo<br></br>
                        <h3>UNIDAD II</h3>
                        - introducción al color y sus caracteristicas<br></br>
                        <h3>UNIDAD III</h3>
                        - ¿como elegir un esquema de color?<br></br>
                        <h3>UNIDAD IV</h3>
                        - principios de percepcion del color                        
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

export default InfoCurso23;