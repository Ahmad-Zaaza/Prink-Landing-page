import Image from "next/image";
import styled from "styled-components";
import JoinUsForm from "../JoinUsForm/JoinUsForm";
import Logo from "../Logo/Logo";
import mockup from "../../assets/hero-mockup.png";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { HeroWrapper } from "./HeroWrapper";

const Hero = () => {
  return (
    <HeroWrapper>
      <MaxWidthWrapper>
        <TopSection>
          <Logo withSubtitle variant="black-colored" />
        </TopSection>
        <ContentWrapper>
          <LeftColumn>
            <Title>Ready to unleash the Fashion ?</Title>
            <Subtitle>
              Create Fashion Videos, discover latest trends and inspire others
              follow you.
            </Subtitle>
            <Subtitle>
              A new social media platform dedicated to fashion.
            </Subtitle>
            <JoinUsForm />
          </LeftColumn>
          <RightColumn>
            <Image src={mockup} alt='Prink app phone mockup' />
          </RightColumn>
        </ContentWrapper>
      </MaxWidthWrapper>
    </HeroWrapper>
  );
};

export default Hero;

const TopSection = styled.div`
  display: flex;
  padding-top: 24px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-block-size: 100%;
  justify-content: center;
  align-items: flex-start;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1 0 350px;
`;
const RightColumn = styled.div`
  flex: 1 300000 350px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: ${32 / 16}rem;
  line-height: 40px;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    font-size: ${48 / 16}rem;
    line-height: 60px;
  }
`;
const Subtitle = styled.p`
  font-size: ${20 / 16}rem;
  line-height: 32px;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    font-size: ${24 / 16}rem;
    line-height: 32px;
  }
`;
