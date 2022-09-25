import Image, { ImageProps } from "next/image";
import styled from "styled-components";
import blackColored from "../../assets/blackColoredLogo.png";

interface IProps extends Omit<ImageProps, "src"> {
  variant: "black-colored";
  withSubtitle?: boolean;
}

const Logo = ({ variant, withSubtitle, ...delegated }: IProps) => {
  const src = {
    "black-colored": blackColored,
  };
  if (withSubtitle) {
    return (
      <div>
        <Image
          //   layout="intrinsic"
          alt="Prink Logo"
          height={40}
          width={100}
          {...delegated}
          src={src[variant]}
        />
        <Subtitle>Short Fashion Video Platform</Subtitle>
      </div>
    );
  }
  return (
    <Image
      //   layout="intrinsic"
      alt="Prink Logo"
      height={50}
      width={100}
      {...delegated}
      src={src[variant]}
    />
  );
};

export default Logo;

const Subtitle = styled.span`
  font-size: ${10 / 16}rem;
  display: block;
`;
