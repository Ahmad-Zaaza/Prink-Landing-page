import Navbar from "../components/Navbar/Navbar";
import MaxWidthWrapper from "../components/MaxWidthWrapper/MaxWidthWrapper";
import styled, { css } from "styled-components";
import Footer from "../components/Footer/Footer";

const DataDeletionPolicy = () => {
  return (
    <div>
      <Navbar />
      {/* <Logo variant="black-colored" /> */}
      <div style={{ paddingBottom: 64 }}>
        <MaxWidthWrapper>
          <LastUpdatedContainer>
            <h1>Data Deletion Policy</h1>
            <Subtitle>Date: July 16, 2023</Subtitle>
          </LastUpdatedContainer>
          <Subtitle>
            At Prink-Short Fashion Videos, we understand the importance of
            protecting our users privacy and ensuring the responsible management
            of their personal data. As part of this commitment, we have
            implemented a comprehensive data deletion policy to ensure that user
            data is deleted in a timely and secure manner.
          </Subtitle>
          <Subtitle>
            Our data deletion policy includes the following guidelines:
          </Subtitle>
          <OrderedList>
            <li>
              User Account Deletion: Upon receiving a user request to delete
              their account, we will delete all associated user data within 30
              days. This includes profile information, videos, comments, and any
              other data associated with the user&apos;s account.
            </li>
            <li>
              Inactive User Accounts: We will regularly review our user database
              and identify inactive user accounts. If an account has been
              inactive for a period of six months or more, we may delete all
              associated user data.
            </li>
            <li>
              User Data Retention Period: We will only retain user data for as
              long as it is necessary to fulfill the purposes for which it was
              collected, or as required by law. Once the retention period has
              elapsed, we will delete the data.
            </li>
            <li>
              Deletion of Uploaded Videos: Users can delete their uploaded
              videos at any time, and we will ensure that these videos are
              deleted from our servers within 30 days of the deletion request.
            </li>
            <li>
              Secure Data Deletion: We will ensure that all user data is deleted
              securely to prevent unauthorized access or accidental deletion.
            </li>
          </OrderedList>
          <Subtitle>
            At Prink-Short Fashion Videos; we take our users privacy seriously
            and are committed to providing a safe and secure platform. If you
            have any questions about our data deletion policy or would like to
            request the deletion of your account, please contact our support
            team at info@prink.live.
          </Subtitle>
        </MaxWidthWrapper>
      </div>
      <Footer hideForm />
    </div>
  );
};

export default DataDeletionPolicy;

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
    font-size: ${18 / 16}rem;
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
