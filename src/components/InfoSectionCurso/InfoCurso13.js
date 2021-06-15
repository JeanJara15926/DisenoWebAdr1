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

function InfoCurso13({
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
                    {description}
                    <div>
                        <p >   
                        Unidad 1: Introducción al dibujo técnico<br></br>
                        Unidad 2: Trazados fundamentales en el plano<br></br>
                        Unidad 3: Transformaciones geométricas elementales<br></br>
                        Unidad 4: Construcción de curvas técnicas<br></br>
                        Unidad 5: Sistema diédrico<br></br>
                        Unidad 6: Sistema axonométrico<br></br>
                        Unidad 7: Sistema cónico<br></br>
                        Unidad 8: Normalización
                        </p>
                    </div>
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

export default InfoCurso13;