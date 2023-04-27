import {
  TeamBox,
  Container,
  TeamFirstP,
  TeamSecondP,
  TeamHeader,
  TeamPhoto,
  TeamList,
  TeamName,
} from './Team.styled';
import people from '../../assets/images/home/people.jpg';

const Team = () => {
  return (
    <TeamBox>
      <Container>
        <TeamFirstP>Who we are</TeamFirstP>
        <TeamHeader>Our Professional Team</TeamHeader>
        <TeamSecondP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </TeamSecondP>
        <TeamList>
          <li>
            <TeamPhoto src={people} alt="111" />
            <TeamName>John Doe</TeamName>
            <p>President</p>
          </li>
          <li>
            <TeamPhoto src={people} alt="111" />
            <TeamName>John Doe</TeamName>
            <p>Vice President</p>
          </li>
          <li>
            <TeamPhoto src={people} alt="111" />
            <TeamName>Steve Smith</TeamName>
            <p>Marketing Head</p>
          </li>
        </TeamList>
      </Container>
    </TeamBox>
  );
};
export default Team;
