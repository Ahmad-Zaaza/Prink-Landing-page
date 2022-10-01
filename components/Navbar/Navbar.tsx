import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Navbar = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Logo size={100} withSubtitle variant="black-colored" />
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  /* display: flex; */
  padding: 16px 0;
`;
