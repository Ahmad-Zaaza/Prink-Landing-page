import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MaxWidthWrapper from "../components/MaxWidthWrapper/MaxWidthWrapper";
import styled, { css } from "styled-components";

const PrivacyPolicy = () => {
  return (
    <div style={{ paddingBlock: 24 }}>
      <Navbar />
      {/* <Logo variant="black-colored" /> */}
      <MaxWidthWrapper>
        <LastUpdatedContainer>
          <Subtitle>Last Update: July 16, 2023</Subtitle>
        </LastUpdatedContainer>
        <Subtitle>
          At Prink – Short Fashion Videos, we take your privacy very seriously.
          This privacy policy explains how we collect, use, share, and protect
          your personal information when you use our app (the
          &ldquo;App&ldquo;).
        </Subtitle>
        <OrderedList>
          <li>
            <Subtitle boldVariant>
              What information do we collect about you?
            </Subtitle>
            <Subtitle>
              We may collect the following information about you:
            </Subtitle>
            <UnOrderedList>
              <li>
                Your personal information, such as your name, email address, and
                telephone digits.
              </li>
              <li>
                Your login and usage data, encompassing your IP address, device
                classification, operating system, and the pages which you visit
              </li>
              <li>Your location data, should you opt to share it with us</li>
              <li>
                Information regarding your device, including its identification
                code and software version.
              </li>
            </UnOrderedList>
          </li>
          <li>
            <Subtitle boldVariant>
              How will we use the information we have about you?
            </Subtitle>
            <Subtitle>
              We may use your personal information for the following purposes:
            </Subtitle>
            <UnOrderedList>
              <li>
                Enhancing and improving our services, comprising technical
                assistance and user support.
              </li>
              <li>
                Personalizing your experience, by suggesting content that aligns
                with your interests.
              </li>
              <li>
                Communicating with you regarding our services, promotions, and
                updates.
              </li>
              <li>
                Preventing fraud and unauthorized access to our services. •
                Complying with legal obligations and safeguarding our rights.
              </li>
            </UnOrderedList>
          </li>
          <li>
            <Subtitle boldVariant>
              Who do we share your information with?
            </Subtitle>
            <Subtitle>
              We may share your personal information with the following third
              parties:
            </Subtitle>
            <UnOrderedList>
              <li>
                Service providers, such as hosting providers, payment
                processors, and analytics companies, who assist us in providing
                our services
              </li>
              <li>
                Legal authorities, if required by law or to protect our legal
                rights
              </li>
              <li>
                Other users, if you choose to share your content publicly.
              </li>
            </UnOrderedList>
          </li>
          <li>
            <Subtitle boldVariant>
              How long do we keep hold of your information?
            </Subtitle>
            <Subtitle>
              We will keep your personal information for as long as necessary to
              provide our services and comply with legal obligations. After
              that, we will securely delete or anonymize your data.
            </Subtitle>
          </li>
          <li>
            <Subtitle boldVariant>
              How will we notify you of any changes to this Privacy Policy?
            </Subtitle>
            <Subtitle>
              As a leading-edge app, we are continually evolving to meet the
              needs of our users. Therefore, we may make changes to this Privacy
              Policy from time to time. We will notify you of any changes by
              updating the &quot;Last Updated&quot; date at the top of the
              policy and by providing you with a notice within the app.
            </Subtitle>
          </li>
          <li>
            <Subtitle boldVariant>
              The types of personal data that we use We collect and use the
              following types of personal data:
            </Subtitle>
            <UnOrderedList>
              <li>Contact information, such as your name and email address.</li>
              <li>
                Login and usage data, such as your IP address and device
                information.
              </li>
              <li>Location data, if you choose to share it.</li>
              <li>User-generated content, such as videos and comments.</li>
            </UnOrderedList>
          </li>
          <li>
            <Subtitle boldVariant>
              Cookies and other tracking technologies We use:
            </Subtitle>
            <Subtitle>
              various cookies and tracking technologies to analyze user behavior
              and to improve our services continually. These technologies will
              allow us to provide you with highly targeted and personalized
              content, thereby enhancing your experience with our app.
            </Subtitle>
          </li>
          <li>
            <Subtitle boldVariant>
              Permissions to unlock the full potential of our app
            </Subtitle>
            <Subtitle>
              We may require permission to access certain features on your
              device, such as your camera or microphone. These permissions are
              necessary to provide you with a highly engaging and immersive
              experience.
            </Subtitle>
          </li>
          <li>
            <Subtitle boldVariant>How do we use your personal data?</Subtitle>
            <Subtitle>
              We use your personal data to provide and improve our services,
              personalize your experience, communicate with you, and comply with
              legal obligations.
            </Subtitle>
          </li>
          <li>
            <Subtitle boldVariant>How do we share your personal data?</Subtitle>
            <Subtitle>
              Rest assured, we highly value your privacy and shall not share
              your data with any external entities for financial benefit.
              However, we may disclose your information to reliable third-party
              service providers that facilitate the provision of our
              application&apos;s services.
            </Subtitle>
          </li>
          <li>
            <Subtitle boldVariant>
              Where do we store your personal data?
            </Subtitle>
            <Subtitle>
              We store your personal data in highly secure servers located in
              the United Arab Emirates. By using our app, you consent to the
              transfer of your personal data to the United Arab Emirates.
            </Subtitle>
          </li>
          <li>
            <Subtitle boldVariant>Your Rights and Choices</Subtitle>
            <Subtitle>
              You have the right to access, rectify, and delete your personal
              data, as well as to object to or restrict its processing. You can
              exercise these rights by contacting us at info@prink.live. You
              also have the right to lodge a complaint with a data protection
              authority.
            </Subtitle>
          </li>
          <li>
            <Subtitle boldVariant>The security of your personal data</Subtitle>
            <Subtitle>
              We take appropriate technical and organizational measures to
              protect your personal data against unauthorized access,
              disclosure, and destruction.
            </Subtitle>
          </li>
          <li>
            <Subtitle boldVariant>
              How long will we keep your personal data?
            </Subtitle>
            <Subtitle>
              We&apos;ll keep it only for as long as needed to meet the original
              reasons for collecting it, or as mandated by law.
            </Subtitle>
          </li>
          <li>
            <Subtitle boldVariant>Complaints</Subtitle>
            <Subtitle>
              In the event that you have grievances regarding the data
              processing activities of our application, it is within your
              entitlement to file a complaint with the pertinent data protection
              authority.
            </Subtitle>
          </li>
        </OrderedList>
      </MaxWidthWrapper>
    </div>
  );
};

export default PrivacyPolicy;

const LastUpdatedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

const Subtitle = styled.p<{ boldVariant?: boolean }>`
  font-size: ${16 / 16}rem;
  line-height: 32px;
  text-align: center;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    font-size: ${16 / 16}rem;
    line-height: 32px;
    text-align: unset;
  }

  ${(p) =>
    p.boldVariant &&
    css`
      text-align: center;
      font-weight: 700 !important;
      @media ${(p) => p.theme.queries.tabletAndUp} {
        font-weight: unset;
      }
    `}
`;
const OrderedList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-block: 16px;
`;
const UnOrderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-block: 8px;
  list-style: disc;
  margin-inline-start: 16px;
`;
