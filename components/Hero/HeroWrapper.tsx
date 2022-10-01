import styled from "styled-components";

export const HeroWrapper = styled.div`
  /* min-height: 100%; */
  /* background-image: url("./mainpattern.png"); */
  display: flex;
  align-items: center;
  height: auto;
  padding-top: 16px;
  padding-bottom: 16px;
  @media ${(p) => p.theme.queries.tabletAndUp} {
    padding-top: 32px;
    padding-bottom: 32px;
    height: calc(100vh - 96px);
  }
`;
