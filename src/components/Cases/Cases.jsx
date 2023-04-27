import {
  Container,
  CasesBox,
  CasesFirstP,
  CasesHeader,
  CasesSecondP,
  CasesList,
} from './Cases.styled';
import people from '../../assets/images/home/people.jpg';

const Cases = () => {
  return (
    <CasesBox>
      <Container>
        <CasesFirstP>This is what we do</CasesFirstP>
        <CasesHeader>Business Cases</CasesHeader>
        <CasesSecondP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </CasesSecondP>
        <CasesList>
          <li>
            <img src={people} alt="111" />
          </li>
          <li>
            <img src={people} alt="111" />
          </li>
          <li>
            <img src={people} alt="111" />
          </li>
          <li>
            <img src={people} alt="111" />
          </li>
          <li>
            <img src={people} alt="111" />
          </li>
          <li>
            <img src={people} alt="111" />
          </li>
        </CasesList>
      </Container>
    </CasesBox>
  );
};

export default Cases;
