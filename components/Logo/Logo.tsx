import Image, { ImageProps } from "next/image";
import styled from "styled-components";
import blackColored from "../../assets/blackColoredLogo.png";
import whiteColored from "../../assets/whiteColoredLogo.png";

interface IProps extends Omit<ImageProps, "src"> {
  variant: "black-colored" | "white-colored";
  withSubtitle?: boolean;
  /**
   * @default 115
   */
  size?: number;
}

const Logo = ({ variant, withSubtitle, size = 115, ...delegated }: IProps) => {
  const src = {
    "black-colored": blackColored,
    "white-colored": whiteColored,
  };
  if (withSubtitle) {
    return (
      <div>
        <Image
          layout="intrinsic"
          alt="Prink Logo"
          height={size / 2.3}
          width={size}
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
      height={size / 2.3}
      width={size}
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
