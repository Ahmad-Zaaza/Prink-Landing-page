import styled from "styled-components";
import Icon from "../Icon";
import { NavbarWrapper } from "../Navbar/NavbarWrapper";

interface IProps {
  /**
   * @default 25
   */
  iconSize?: number;
}

const SocialLinks = ({ iconSize = 25 }: IProps) => {
  return (
    <Wrapper>
      <SocialLink href="https://www.facebook.com/profile.php?id=100086028113619">
        <Icon size={iconSize} color="var(--color-secondary)" id="facebook" />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/prink.official/">
        <Icon size={iconSize} color="var(--color-secondary)" id="instagram" />
      </SocialLink>
      <SocialLink href="https://twitter.com/LivePrink">
        <Icon size={iconSize} color="var(--color-secondary)" id="twitter" />
      </SocialLink>
      {/* <SocialLink href="https://linkedin.com">
        <Icon size={iconSize} color="var(--color-secondary)" id="linkedin" />
      </SocialLink> */}
    </Wrapper>
  );
};

export default SocialLinks;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  ${NavbarWrapper} & {
    display: none;
    @media ${(p) => p.theme.queries.tabletAndUp} {
      display: inherit;
    }
  }
`;

const SocialLink = styled.a.attrs(() => ({
  target: "#",
  rel: "noreferrer noopener",
}))`
  cursor: pointer;
  transition: transform 180ms ease-in-out;
  @media ${(p) => p.theme.queries.hoverPointerDevices} {
    &:hover {
      transform: scale(1.1);
    }
  }
  &:focus {
    transform: scale(1.1);
  }
`;
