import React from "react";
import styled from "styled-components";
import { HeroWrapper } from "../Hero/HeroWrapper";
import { PrinkDescriptionWrapper } from "../PrinkDescription/PrinkDescriptionWrapper";
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
    padding-bottom: 80px;
  }
`;
