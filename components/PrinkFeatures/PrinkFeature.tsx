import styled from "styled-components";
import Icon, { IconsProps } from "../Icon";

interface FeatureProps {
  title: string;
  subtitle: string;
  iconId: IconsProps["id"];
}

const PrinkFeature = ({ iconId, subtitle, title }: FeatureProps) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon color="var(--color-secondary)" id={iconId} size={45} />
      </IconWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
    </Wrapper>
  );
};

export default PrinkFeature;

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  @media ${(p) => p.theme.queries.desktopAndUp} {
    flex-direction: row;
  }
`;

const IconWrapper = styled.div`
  flex-basis: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  flex: 1;
  text-align: center;
  @media ${(p) => p.theme.queries.desktopAndUp} {
    text-align: initial;
  }
`;

const Title = styled.h6`
  font-size: ${16 / 16}rem;
  line-height: 18px;
  /* text-align: center; */
  margin-bottom: 8px;
  @media ${(p) => p.theme.queries.tabletAndUp} {
    font-size: ${20 / 16}rem;
    line-height: 24px;
  }
`;
const Subtitle = styled.p`
  font-size: ${13 / 16}rem;
  line-height: 16px;
  color: var(--color-gray-700);

  @media ${(p) => p.theme.queries.tabletAndUp} {
    font-size: ${16 / 16}rem;
    line-height: 22px;
  }
`;
