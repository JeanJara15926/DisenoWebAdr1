import React from 'react';
import { Button } from '../../globalStyles';

import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';

import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up' target="_parent">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>S/26.99</PricingCardCost>
                <PricingCardLength>Mensual</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Acceso a todos los cursos</PricingCardFeature>
                  <PricingCardFeature>Acceso a criticas y charlas </PricingCardFeature>
                  <PricingCardFeature>Cursos exclusivos Premium</PricingCardFeature>
                  <PricingCardFeature>Acceso a certificados</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up' target="_parent">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>S/156.99</PricingCardCost>
                <PricingCardLength>6 Meses</PricingCardLength>
                <PricingCardFeatures>
                <PricingCardFeature>Acceso a todos los cursos</PricingCardFeature>
                  <PricingCardFeature>Acceso a criticas y charlas </PricingCardFeature>
                  <PricingCardFeature>Cursos exclusivos Premium</PricingCardFeature>
                  <PricingCardFeature>Acceso a certificados</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up' target="_parent">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>S/306.99</PricingCardCost>
                <PricingCardLength>Anual</PricingCardLength>
                <PricingCardFeatures>
                <PricingCardFeature>Acceso a todos los cursos</PricingCardFeature>
                  <PricingCardFeature>Acceso a criticas y charlas </PricingCardFeature>
                  <PricingCardFeature>Cursos exclusivos Premium</PricingCardFeature>
                  <PricingCardFeature>Acceso a certificados</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;