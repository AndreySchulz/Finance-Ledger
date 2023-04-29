import people from '../../assets/images/home/people.jpg';
import people2x from '../../assets/images/home/contact@2x.jpg';
import peapleWeb from '../../assets/images/home/people.webp';
import peaple2xWeb from '../../assets/images/home/people@2x.webp';
import {
  ProvideBox,
  PrivideImg,
  ProvideInfoBox,
  ProvideHeader,
  ProvideText,
  ProvideBtn,
} from './Provide.styled';
const Provide = () => {
  return (
    <ProvideBox id="about">
      <picture>
        <source
          srcset={`${peapleWeb} 1x, ${peaple2xWeb} 2x`}
          type="image/webp"
        />
        <source srcset={`${people}1x, ${people2x} 2x`} type="image/jpeg" />
        <PrivideImg src={people} alt="People" />
      </picture>
      <ProvideInfoBox>
        <ProvideText>What you are looking for</ProvideText>
        <ProvideHeader>We provide bespoke solutions</ProvideHeader>
        <ProvideText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </ProvideText>
        <ProvideBtn type="button">Read More</ProvideBtn>
      </ProvideInfoBox>
    </ProvideBox>
  );
};
export default Provide;
