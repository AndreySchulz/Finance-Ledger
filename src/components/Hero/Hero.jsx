import {
  HeroBox,
  HeroInfo,
  HeroTitle,
  HeroDescription,
  HeroBtn,
} from './Hero.styled';

const Hero = () => {
  return (
    <HeroBox>
      <HeroInfo>
        <HeroTitle>The Sky Is The Limit</HeroTitle>
        <HeroDescription>
          We provide world class financial assistance
        </HeroDescription>
        <HeroBtn type="button">Read More</HeroBtn>
      </HeroInfo>
    </HeroBox>
  );
};
export default Hero;
