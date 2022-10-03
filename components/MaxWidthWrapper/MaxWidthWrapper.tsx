import React from "react";
import styled from "styled-components";
import { FooterWrapper } from "../Footer/FooterWrapper";
import { HeroWrapper } from "../Hero/HeroWrapper";
import { PrinkDescriptionWrapper } from "../PrinkDescription/PrinkDescriptionWrapper";
import { PrinkFeaturesWrapper } from "../PrinkFeatures/PrinkFeaturesWrapper";

const MaxWidthWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MaxWidthWrapper;

const Wrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 24px;
  ${HeroWrapper} & {
    display: flex;
    align-items: center;
    gap: 24px;
    @media ${p => p.theme.queries.tabletAndUp} {
      gap: 0;
    }
  }
  ${PrinkDescriptionWrapper} & {
    padding-top: 80px;
    padding-bottom: 100px;
    @media ${p => p.theme.queries.tabletAndUp} {
      padding-bottom: 120px;
    }
  }
  ${PrinkFeaturesWrapper} & {
    padding-top: 0;
    padding-bottom: 80px;
    @media ${p => p.theme.queries.tabletAndUp} {
      padding-top: 30px;
    }
  }
  ${FooterWrapper} & {
    padding-top: 80px;
    padding-bottom: 80px;
    max-width: 960px;

    display: flex;
    flex-direction: column;
    gap: 24px;
    @media ${p => p.theme.queries.tabletAndUp} {
      gap: 48px;
    }
  }
`;
