import Image, { ImageProps } from "next/image";
import styled from "styled-components";
import blackColored from "../../assets/blackColoredLogo.png";
import whiteColored from "../../assets/whiteColoredLogo.png";
import Link from "next/link";

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
        <Link href="/">
          <Image
            layout="intrinsic"
            alt="Prink Logo"
            height={size / 2.3}
            width={size}
            {...delegated}
            src={src[variant]}
          />
        </Link>
        <Subtitle>Short Fashion Video Platform</Subtitle>
      </div>
    );
  }
  return (
    <Link href="/">
      <Image
        //   layout="intrinsic"
        alt="Prink Logo"
        height={size / 2.3}
        width={size}
        {...delegated}
        src={src[variant]}
      />
    </Link>
  );
};

export default Logo;

const Subtitle = styled.span`
  font-size: ${10 / 16}rem;
  display: block;
`;
