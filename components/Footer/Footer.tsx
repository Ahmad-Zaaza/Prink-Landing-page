import React from "react";
import styled from "styled-components";
import ContactForm from "../ContactForm";
import JoinUsForm from "../JoinUsForm";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SocialLinks from "../SocialLinks";
import { FooterWrapper } from "./FooterWrapper";
import Link from "next/link";

interface IProps {
  hideForm?: boolean;
}

const Footer = ({ hideForm }: IProps) => {
  return (
    <FooterWrapper>
      <MaxWidthWrapper>
        {/* <Subtitle>
          Seen enough ? We are currently in the development stage. Please enter
          your e-mail to be the first to know when the app launches.
        </Subtitle> */}
        {/* <JoinUsForm buttonVariant="secondary" hideSubtitle /> */}
        {!hideForm && (
          <>
            <Subtitle>
              For any suggestions or feedback please contact us
              {/* <Email href="mailto://info@prink.live">info@prink.live</Email> */}
            </Subtitle>
            <ContactForm />
          </>
        )}

        <div>
          <Subtitle style={{ marginBottom: 20 }}>
            Follow us on social media
          </Subtitle>
          <SocialLinks />
        </div>
        <Flex>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/data-deletion-policy">Data Deletion Policy</Link>
        </Flex>
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

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  text-align: center;
  flex-wrap: wrap;
`;
