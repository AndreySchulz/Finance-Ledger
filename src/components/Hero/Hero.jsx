import { angleRight } from 'assets/images/icon';
import {
  HeroBox,
  HeroInfo,
  HeroTitle,
  HeroDescription,
  HeroBtn,
  BtnSvg,
} from './Hero.styled';

const Hero = () => {
  return (
    <HeroBox id="home">
      <HeroInfo>
        <HeroTitle>The Sky Is The Limit</HeroTitle>
        <HeroDescription>
          We provide world class financial assistance
        </HeroDescription>
        <HeroBtn type="button">
          <BtnSvg src={angleRight} width={9} height={19} />
          Read More
        </HeroBtn>
      </HeroInfo>
    </HeroBox>
  );
};
export default Hero;
