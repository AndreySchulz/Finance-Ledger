import people from '../../assets/images/home/people.jpg';
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
      <PrivideImg src={people} alt="our team"></PrivideImg>
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
