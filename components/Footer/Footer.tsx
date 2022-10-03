import React from "react";
import styled from "styled-components";
import JoinUsForm from "../JoinUsForm";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SocialLinks from "../SocialLinks";
import { FooterWrapper } from "./FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <MaxWidthWrapper>
        <Subtitle>
          Seen enough ? We are currently in the development stage. Please enter
          your e-mail to be the first to know when the app launches.
        </Subtitle>
        <JoinUsForm />
        <Subtitle>Follow us on social media</Subtitle>
        <SocialLinks />
      </MaxWidthWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const Subtitle = styled.p`
  line-height: 25px;
  text-align: center;
  @media ${p => p.theme.queries.tabletAndUp} {
    font-size: ${20 / 16}rem;
    line-height: 30px;
  }
`;
