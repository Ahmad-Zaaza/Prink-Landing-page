import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SocialLinks from "../SocialLinks";
import { NavbarWrapper } from "./NavbarWrapper";

const Navbar = () => {
  return (
    <MaxWidthWrapper>
      <NavbarWrapper>
        <Logo size={100} withSubtitle variant="black-colored" />
        <SocialLinks />
      </NavbarWrapper>
    </MaxWidthWrapper>
  );
};

export default Navbar;
