import styled from "styled-components";
import Icon from "../Icon";

interface IProps {
  /**
   * @default 25
   */
  iconSize?: number;
}

const SocialLinks = ({ iconSize = 25 }: IProps) => {
  return (
    <Wrapper>
      <SocialLink href="https://facebook.com">
        <Icon size={iconSize} color="var(--color-secondary)" id="facebook" />
      </SocialLink>
      <SocialLink href="https://instagram.com">
        <Icon size={iconSize} color="var(--color-secondary)" id="instagram" />
      </SocialLink>
      <SocialLink href="https://twitter.com">
        <Icon size={iconSize} color="var(--color-secondary)" id="twitter" />
      </SocialLink>
      <SocialLink href="https://linkedin.com">
        <Icon size={iconSize} color="var(--color-secondary)" id="linkedin" />
      </SocialLink>
    </Wrapper>
  );
};

export default SocialLinks;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SocialLink = styled.a.attrs(() => ({
  target: "#",
  rel: "noreferrer noopener",
}))`
  cursor: pointer;
`;
