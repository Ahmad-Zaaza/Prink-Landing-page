import React from "react";
import styled from "styled-components";
import { HeroWrapper } from "../Hero/HeroWrapper";
import { PrinkDescriptionWrapper } from "../PrinkDescription/PrinkDescriptionWrapper";
import { PrinkFeaturesWrapper } from "../PrinkFeatures/PrinkFeaturesWrapper";
// import { Wrapper as HeroWrapper } from "../Hero";

const MaxWidthWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MaxWidthWrapper;

const Wrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 24px;
  ${HeroWrapper} & {
    display: grid;
    grid-template-rows: auto 1fr;
    min-block-size: 100%;
    gap: 24px;
    @media ${(p) => p.theme.queries.tabletAndUp} {
      gap: 0px;
    }
  }
  ${PrinkDescriptionWrapper} & {
    padding-top: 80px;
    padding-bottom: 100px;
    @media ${(p) => p.theme.queries.tabletAndUp} {
      padding-bottom: 120px;
    }
  }
  ${PrinkFeaturesWrapper} & {
    padding-top: 0px;
    padding-bottom: 80px;
    @media ${(p) => p.theme.queries.tabletAndUp} {
      padding-top: 30px;
    }
  }
`;
