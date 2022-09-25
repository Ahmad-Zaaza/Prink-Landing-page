import styled from "styled-components";
import Logo from "../Logo/Logo";

const Hero = () => {
  return (
    <Wrapper>
      <Logo variant="black-colored" />
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  height: 100%;
  background-image: url("./mainpattern.png");
`;
