import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { PrinkFeaturesWrapper } from "./PrinkFeaturesWrapper";

const PrinkFeatures = () => {
  return (
    <PrinkFeaturesWrapper>
      <Background />
      <MaxWidthWrapper>
        <Title>
          What is in <Logo variant="white-colored" /> ?
        </Title>
        <Subtitle>Lets Describe Included Features in Our App</Subtitle>
      </MaxWidthWrapper>
    </PrinkFeaturesWrapper>
  );
};

export default PrinkFeatures;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-image: url("./featuresBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 225px;
  @media ${(p) => p.theme.queries.tabletAndUp} {
    height: 400px;

  }
`;
const Title = styled.h2`
  font-size: ${22 / 16}rem;
  line-height: 25px;
  color: var(--color-on-secondary);
  text-align: center;
  margin-bottom: 24px;
  @media ${(p) => p.theme.queries.tabletAndUp} {
    font-size: ${40 / 16}rem;
    line-height: 60px;
  }
`;
const Subtitle = styled.p`
  font-size: ${16 / 16}rem;
  line-height: 16px;
  color: var(--color-on-secondary);
  text-align: center;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    font-size: ${22 / 16}rem;
    line-height: 25px;
  }
`;
