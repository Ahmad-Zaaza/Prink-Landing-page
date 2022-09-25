import styled from "styled-components";
import Logo from "../Logo/Logo";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

const Hero = () => {
  return (
    <Wrapper>
      <GridWrapper>
        <Logo variant="black-colored" />
        <ContentWrapper>
          <LeftColumn>
            <Title>Ready to unleash the Fashion ?</Title>
            <Subtitle>
              Create Fashion Videos, discover latest trendsm and inspire others
              follow you.
            </Subtitle>
            <Subtitle>
              A new social media platform dedicated to fashion.
            </Subtitle>
          </LeftColumn>
          <RightColumn></RightColumn>
        </ContentWrapper>
      </GridWrapper>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  height: 100%;
  background-image: url("./mainpattern.png");
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  block-size: 100%;
  gap: 24px;
  /* @media ${(p) => p.theme.queries.tabletAndUp} {
    gap: 16px;
  } */
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-block-size: 100%;
  justify-content: center;
  align-items: flex-start;
  /* flex-direction: column; */

  @media ${(p) => p.theme.queries.tabletAndUp} {
    align-items: center;
  }
`;


const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const RightColumn = styled.div`
  position: relative;
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
  font-size: ${24 / 16}rem;
  line-height: 32px;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    font-size: ${24 / 16}rem;
    line-height: 32px;
  }
`;
