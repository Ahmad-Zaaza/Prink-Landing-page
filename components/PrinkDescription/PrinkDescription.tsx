import Image from "next/image";
import styled from "styled-components";
import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import selfieGirl from "../../assets/girl-with-hat.jpg";
import mirrorGirl from "../../assets/girl-with-mirror.jpg";
import { PrinkDescriptionWrapper } from "./PrinkDescriptionWrapper";

const PrinkDescription = () => {
  return (
    <PrinkDescriptionWrapper>
      <MaxWidthWrapper>
        <TopSection>
          <Text>
            <Logo variant="white-colored" />
            <span style={{ margin: "0 4px" }}></span>
            is a new IOS app that will be launching this Year. It targets both
            men and women who are interested in fashion and beauty through short
            videos showing the styles of trendy clothes.
          </Text>
          <TopSectionImageWrapper>
            <Image
              layout="intrinsic"
              src={selfieGirl}
              width={400}
              height={267}
              alt="Girl taking a selfie infront of clothes"
            />
            <BottomSectionImageWrapper>
              <Image
                layout="intrinsic"
                src={mirrorGirl}
                width={300}
                height={200}
                alt="A girl applying makeup infront of her mirror"
              />
            </BottomSectionImageWrapper>
          </TopSectionImageWrapper>
        </TopSection>
        <BottomSection>
          <Text>
            You would be able to create videos of your outfit, upload and share
            it with others, RATE and LIKE styles from other users, and find
            inspiration for your next style.
          </Text>
          <BottomSectionFakeWrapper></BottomSectionFakeWrapper>
        </BottomSection>
        {/* <LeftColumn>
          <Text>
            <Logo variant="white-colored" />
            <span style={{ margin: "0 4px" }}></span>
            is a new IOS app that will be launching this Year. It targets both
            men and women who are interested in fashion and beauty through short
            videos showing the styles of trendy clothes.
          </Text>
          <Text>
            You would be able to record a video of your outfit, publish it, and
            get feedback on it. You can also get many outfits inspirations.
          </Text>
        </LeftColumn>
        <RightColumn>
          <Image
            layout="intrinsic"
            src={selfieGirl}
            width={526}
            height={411}
            alt="Girl taking a selfie infront of clothes"
          />
        </RightColumn> */}
      </MaxWidthWrapper>
    </PrinkDescriptionWrapper>
  );
};

export default PrinkDescription;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  flex-direction: column;
  margin-bottom: 36px;
  @media ${p => p.theme.queries.laptopAndUp} {
    flex-direction: row;
    margin-bottom: 0;
  }
`;
const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  /* flex-wrap: wrap; */
  flex-direction: column;
  @media ${p => p.theme.queries.laptopAndUp} {
    flex-direction: row;
    margin-bottom: 0;
  }
`;
const TopSectionImageWrapper = styled.div`
  flex: 1 300000 250px;
  max-width: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${p => p.theme.queries.tabletAndUp} {
    justify-content: flex-end;
    max-width: revert;
  }
`;
const BottomSectionImageWrapper = styled.div`
  position: absolute;
  left: 100px;
  top: 220px;
  display: none;
  transform: translateX(-100px);
  @media ${p => p.theme.queries.desktopAndUp} {
    display: block;
  }
  /* max-height: 200px; */
`;
const BottomSectionFakeWrapper = styled.div`
  flex: 1 300000 250px;
  display: none;
  @media ${p => p.theme.queries.tabletAndUp} {
    display: block;
  }
  /* max-width: 350px; */
`;
const Text = styled.h6`
  font-weight: 400;
  font-size: ${18 / 16}rem;
  line-height: 35px;
  @media ${p => p.theme.queries.tabletAndUp} {
    line-height: 45px;
    font-size: ${24 / 16}rem;
  }

  ${TopSection} & {
    flex: 1 0 auto;
    @media ${p => p.theme.queries.laptopAndUp} {
      flex: 1 0 350px;
    }
  }
  ${BottomSection} & {
    flex: 1 0 auto;
    @media ${p => p.theme.queries.laptopAndUp} {
      flex: 1 0 300px;
    }
  }
`;
