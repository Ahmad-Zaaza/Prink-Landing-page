import React from "react";
import styled from "styled-components";
import ContactForm from "../ContactForm";
import JoinUsForm from "../JoinUsForm";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SocialLinks from "../SocialLinks";
import { FooterWrapper } from "./FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <MaxWidthWrapper>
        {/* <Subtitle>
          Seen enough ? We are currently in the development stage. Please enter
          your e-mail to be the first to know when the app launches.
        </Subtitle> */}
        {/* <JoinUsForm buttonVariant="secondary" hideSubtitle /> */}
        <Subtitle>
          For any suggestions or feedback please contact us
          {/* <Email href="mailto://info@prink.live">info@prink.live</Email> */}
        </Subtitle>

        <ContactForm />

        <div>
          <Subtitle style={{ marginBottom: 20 }}>
            Follow us on social media
          </Subtitle>
          <SocialLinks />
        </div>
      </MaxWidthWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const Subtitle = styled.p`
  line-height: 25px;
  text-align: center;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    font-size: ${24 / 16}rem;
    line-height: 30px;
  }
`;

const Email = styled.a`
  cursor: pointer;
  color: var(--color-secondary);
  font-weight: 600;
  text-decoration: underline;
  @media ${(p) => p.theme.queries.hoverPointerDevices} {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
