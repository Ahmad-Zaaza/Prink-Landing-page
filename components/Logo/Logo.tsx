import Image, { ImageProps } from "next/image";
import blackColored from "../../assets/blackColoredLogo.png";

interface IProps extends Omit<ImageProps, "src"> {
  variant: "black-colored";
}

const Logo = ({ variant, ...delegated }: IProps) => {
  const src = {
    "black-colored": blackColored,
  };

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
