"use client";

import Navbar from "../components/Navbar/Navbar";
import MaxWidthWrapper from "../components/MaxWidthWrapper/MaxWidthWrapper";
import styled, { css } from "styled-components";
import Footer from "../components/Footer/Footer";

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingBottom: 64 }}>
        <MaxWidthWrapper>
          <LastUpdatedContainer>
            <h1>Terms and Conditions</h1>
            <Subtitle>Date: July 16, 2023</Subtitle>
          </LastUpdatedContainer>
          <Subtitle>
            Welcome to Prink – Short Fashion Videos (the &ldquo;App&ldquo;).
            These Terms and Conditions of Use (&ldquo;Terms&ldquo;) govern your
            use of the App, including any updates, new features, and services
            (collectively, &ldquo;Services&ldquo;). By accessing or using the
            Services, you acknowledge and agree to be bound by these Terms.
          </Subtitle>
          <OrderedList>
            <li>
              <Subtitle boldVariant>Your Relationship with Us</Subtitle>
              <Subtitle>
                The App is operated and owned by Prink (&ldquo;we,&ldquo;
                &ldquo;us,&ldquo; or &ldquo;our&ldquo;). These Terms constitute
                a legally binding agreement between you and us.
              </Subtitle>
            </li>
            <li>
              <Subtitle boldVariant>Accepting the Terms</Subtitle>
              <OrderedList>
                <li>
                  By accessing or using the App, you accept and agree to be
                  bound by these Terms.
                </li>
                <li>
                  If you do not agree to these Terms, you should not use the
                  App.
                </li>
              </OrderedList>
            </li>
            <li>
              <Subtitle boldVariant>Changes to the Terms</Subtitle>
              <Subtitle>
                We reserve the right, at our sole discretion, to modify, amend,
                or replace these Terms at any time. It is your responsibility to
                review these Terms periodically for any changes. Your continued
                use of the Services after the changes have been posted
                constitutes your acceptance of the new Terms.
              </Subtitle>
            </li>
            <li>
              <Subtitle boldVariant>
                Notification and Communication with Users
              </Subtitle>
              <Subtitle>
                We will communicate with you through the App, email, or any
                other means of communication we consider appropriate. You agree
                to receive communications from us electronically and that such
                communications satisfy any legal requirement for written
                communication.
              </Subtitle>
            </li>
            <li>
              <Subtitle boldVariant>App Permissions</Subtitle>
              <Subtitle>
                By using the App, you grant us permission to access certain
                features of your device, including but not limited to your
                camera and microphone.
              </Subtitle>
            </li>
            <li>
              <Subtitle boldVariant>Additional Terms</Subtitle>
              <Subtitle>
                Additional Terms (Which are not mentioned shall be as per UAE
                law) In addition to these Terms, certain services or features of
                the App may have additional terms and conditions. If there is a
                conflict between these Terms and any additional terms and
                conditions, the additional terms and conditions will prevail.
              </Subtitle>
            </li>
            <li>
              <Subtitle boldVariant>Your Account with Us</Subtitle>
              <Subtitle>
                To use the App, you may be required to create an account with
                us. You agree to provide accurate and complete information when
                creating your account and to keep your account information up to
                date.
              </Subtitle>
            </li>
            <li>
              <Subtitle boldVariant>
                Your Access to and Use of Our Services
              </Subtitle>
              <OrderedList>
                <li>
                  You may access and use the App for your personal,
                  non-commercial use only.
                </li>
                <li>
                  You must comply with all applicable laws and regulations when
                  using the App.
                </li>
                <li>
                  You may not use the App in any manner that could damage,
                  disable, overburden, or impair our servers or networks.
                </li>
              </OrderedList>
            </li>
            <li>
              <Subtitle boldVariant>Intellectual Property Rights</Subtitle>
              <OrderedList>
                <li>
                  The App and its entire contents, features, and functionality
                  are owned by Prink or its licensors and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property or proprietary rights laws.
                </li>
                <li>
                  You may not reproduce, distribute, modify, create derivative
                  works of, publicly display, publicly perform, republish,
                  download, store or transmit any of the material on our App
                  without our prior written consent.
                </li>
              </OrderedList>
            </li>
            <li>
              <Subtitle boldVariant>
                USER-GENERATED CONTENT OWNERSHIP AND LICENSE
              </Subtitle>
              <OrderedList>
                <li>
                  You own all rights in your User-Generated Content
                  (&ldquo;UGC&ldquo;). By submitting UGC to the App, you grant
                  us a non-exclusive, worldwide, royalty-free, perpetual,
                  irrevocable, and transferable license to use, copy, modify,
                  distribute, publicly display, publicly perform, and create
                  derivative works from your UGC in all media formats and
                  channels now known or later developed without compensation to
                  you.
                </li>
                <li>
                  You represent and warrant that you have all necessary rights
                  to grant us the license in 10.1 above and that your UGC does
                  not infringe the intellectual property rights, privacy rights,
                  or any other rights of any third party.
                </li>
                <li>
                  We may remove or refuse to publish any UGC that violates these
                  terms and conditions or that we believe is offensive, harmful,
                  inappropriate, or inaccurate.
                </li>
              </OrderedList>
            </li>
            <li>
              <Subtitle boldVariant>RESTRICTIONS & PROHIBITED ACTS</Subtitle>
              <OrderedList>
                <li>
                  You agree not to use the App to: (i) upload or distribute any
                  UGC that is illegal, offensive, harmful, defamatory, obscene,
                  pornographic, or otherwise objectionable; (ii) impersonate any
                  person or entity or falsely represent your affiliation with
                  any person or entity; (iii) use the App for any commercial
                  purpose or to advertise or promote any product or service;
                  (iv) access or attempt to access the App or any part of it
                  that you are not authorized to access; (v) interfere with the
                  functioning of the App or the servers or networks connected to
                  it or circumvent any technological measure we use to protect
                  the App or its content.
                </li>
                <li>
                  We reserve the right to suspend or terminate your access to
                  the App if you violate any of these restrictions.
                </li>
                <li>
                  You are permitted to publish UGC as per fashion theme of the
                  App, any content that violate App&apos;s theme shall be taken
                  down / removed from the platform with or without prior
                  notification.
                </li>
              </OrderedList>
            </li>
            <li>
              <Subtitle boldVariant>RIGHTS AND OBLIGATIONS OF PARTIES</Subtitle>
              <OrderedList>
                <li>
                  You are solely responsible for your UGC and for any
                  consequences arising from your submission of UGC to the App.
                </li>
                <li>
                  We reserve the right to modify, suspend or terminate the App
                  or any part of it at any time without notice.
                </li>
                <li>
                  We are not responsible for any UGC or third-party content on
                  the App. We do not endorse, guarantee or assume any
                  responsibility for the accuracy, completeness, timeliness or
                  reliability of any UGC or third-party content.
                </li>
                <li>
                  You agree to comply with all applicable laws and regulations
                  in connection with your use of the App.
                </li>
              </OrderedList>
            </li>
            <li>
              <Subtitle boldVariant>ADVERTISING & SPONSORSHIPS</Subtitle>
              <OrderedList>
                <li>
                  We may display advertising and sponsorships on the App. Such
                  advertising and sponsorships may be targeted to the content of
                  UGC on the App.
                </li>
                <li>
                  You agree that we may use your UGC and other information about
                  you to provide advertising and sponsorships that may be of
                  interest to you.
                </li>
              </OrderedList>
            </li>
            <li>
              <Subtitle boldVariant>Indemnity</Subtitle>
              <Subtitle>
                Users agree to indemnify and hold the App and its affiliates,
                officers, directors, employees, and agents harmless from any
                claims, damages, losses, liabilities, costs, and expenses
                (including reasonable attorneys&apos; fees) arising out of or
                relating to their UGC, use of the App, or violation of these
                Terms.
              </Subtitle>
            </li>
            <li>
              <Subtitle boldVariant>Limitation of liability</Subtitle>
              <Subtitle>
                The app and its affiliates, officers, directors, employees, and
                agents will not be liable for any indirect, incidental,
                consequential, special, or punitive damages, or any loss of
                profits or revenues, whether incurred directly or indirectly, or
                any loss of data, use, goodwill, or other intangible losses,
                resulting from:
                <OrderedList>
                  <li>
                    Your access to or use of or inability to access or use the
                    app.
                  </li>
                  <li>
                    Any conduct or content of any third party on the app,
                    including without limitation, any defamatory, offensive, or
                    illegal conduct of other users or third parties.
                  </li>
                  <li>
                    Unauthorized access, use, or alteration of your
                    transmissions or content.
                  </li>
                </OrderedList>
              </Subtitle>
            </li>
            <li>
              <Subtitle boldVariant>
                Termination of Service and Restrictions of Use
              </Subtitle>
              <Subtitle>
                The App may terminate or suspend a user&apos;s access to the App
                at any time and for any reason, without notice or liability.
                Users may also terminate their use of the App at any time. Upon
                termination, all licenses granted by the user will terminate,
                and the user must cease all use of the App.
              </Subtitle>
            </li>
            <li>
              <Subtitle boldVariant>Minimum age</Subtitle>
              <Subtitle>
                The offered Services are only for people 12 years of age and
                over. By using the Services, you confirm that you are over the
                relevant age specified above. If we learn that someone under the
                relevant age specified above is using the Services, we will
                terminate that user&apos;s account.
              </Subtitle>
            </li>
            <li>
              <Subtitle boldVariant>
                Other Terms Applicable for UAE & GCC
              </Subtitle>
              <Subtitle>
                If you are using the app in the UAE or GCC, you agree to comply
                with all applicable laws and regulations in these countries.
              </Subtitle>
            </li>
            <li>
              <Subtitle boldVariant>
                Additional Terms – App Stores (iOS, Android, Amazon App Store)
              </Subtitle>
              <Subtitle>
                If you download the app from an app store, you acknowledge and
                agree that:
              </Subtitle>
              <OrderedList>
                <li>
                  These terms and conditions are between you and us only, not
                  with the app store.
                </li>
                <li>
                  The app store has no obligation to provide any support or
                  maintenance for the app.
                </li>
                <li>
                  The app store is not responsible for any claims you may have
                  relating to the app or your use of the app .
                </li>
                <li>
                  The app store is a third-party beneficiary of these terms and
                  conditions and has the right to enforce these terms and
                  conditions against you.
                </li>
              </OrderedList>
            </li>
          </OrderedList>
        </MaxWidthWrapper>
      </div>
      <Footer hideForm />
    </div>
  );
};

export default TermsAndConditions;

const LastUpdatedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 24px;
  gap: 24px;
  flex-wrap: wrap;
`;

const Subtitle = styled.p<{ boldVariant?: boolean }>`
  font-size: ${16 / 16}rem;
  line-height: 32px;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    font-size: ${16 / 16}rem;
    line-height: 32px;
  }

  ${(p) =>
    p.boldVariant &&
    css`
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
  padding-inline-start: 24px;
`;
