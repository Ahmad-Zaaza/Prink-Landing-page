import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import mockup from "../../assets/featuresImage.png";

import MaxWidthWrapper from "../MaxWidthWrapper";
import { PrinkFeaturesWrapper } from "./PrinkFeaturesWrapper";
import PrinkFeature from "./PrinkFeature";

const PrinkFeatures = () => {
  return (
    <PrinkFeaturesWrapper>
      <Background />
      <MaxWidthWrapper>
        <Title>
          What is in {"  "}
          <Logo size={90} variant="white-colored" /> ?
        </Title>
        <Subtitle>Lets Describe Included Features in Our App</Subtitle>

        <ContentWrapper>
          <LeftColumn>
            <Image src={mockup} alt="Prink app phone mockup" />
          </LeftColumn>
          <RightColumn>
            <PrinkFeature
              title="Rate, Comment and Share"
              subtitle="Rate the style of your friends, give feedback, and share styles with them."
              iconId="like"
            />
            <PrinkFeature
              title="Find What Suits You"
              subtitle="Browse by body type, favorite color, or most popular fashion."
              iconId="search-with-heart"
            />
            <PrinkFeature
              title="Follow Fashionistas"
              subtitle="Follow your friends, fashionistas, and quote ideas for your style today."
              iconId="friends"
            />
            <PrinkFeature
              title="Tips & Tricks"
              subtitle="Explore tips on wearing items in your closest in different ways."
              iconId="tips-and-tricks"
            />
          </RightColumn>
        </ContentWrapper>
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
  background-image: url("./mobileBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateY(-160px);
  height: 600px;
  @media ${p => p.theme.queries.tabletAndUp} {
    background-image: url("./featuresBackground.svg");
    transform: translateY(-40px);
    height: 650px;
  }
`;
const Title = styled.h2`
  font-size: ${22 / 16}rem;
  line-height: 25px;
  color: var(--color-on-secondary);
  text-align: center;
  margin-bottom: 24px;
  @media ${p => p.theme.queries.tabletAndUp} {
    font-size: ${40 / 16}rem;
    line-height: 60px;
  }
`;
const Subtitle = styled.p`
  font-size: ${16 / 16}rem;
  line-height: 16px;
  color: var(--color-on-secondary);
  text-align: center;

  @media ${p => p.theme.queries.tabletAndUp} {
    font-size: ${22 / 16}rem;
    line-height: 25px;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  margin-top: 120px;
  flex-direction: column;

  @media ${p => p.theme.queries.desktopAndUp} {
    gap: 56px;
    align-items: center;
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 350px;
`;
const RightColumn = styled.div`
  flex: 1 0 350px;
  position: relative;
  display: grid;
  gap: 24px;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  @media ${p => p.theme.queries.tabletAndUp} {
    gap: 48px;
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
  @media ${p => p.theme.queries.desktopAndUp} {
    grid-template-columns: 1fr;
  }
`;
