import person1 from '../../assets/images/team/person1.jpg';
import porson12x from '../../assets/images/team/person1@2x.jpg';
import person1Web from '../../assets/images/team/person1.webp';
import peson12xWeb from '../../assets/images/team/person1@2x.webp';
import person2 from '../../assets/images/team/person2.jpg';
import person22x from '../../assets/images/team/person2@2x.jpg';
import personWeb from '../../assets/images/team/person2.webp';
import porson22xWeb from '../../assets/images/team/person2@2x.webp';
import person3 from '../../assets/images/team/person3.jpg';
import person32x from '../../assets/images/team/person3@2x.jpg';
import person3Web from '../../assets/images/team/person3.webp';
import person32xWeb from '../../assets/images/team/person3@2x.webp';

import {
  TeamBox,
  Container,
  TeamFirstP,
  TeamSecondP,
  TeamHeader,
  TeamPhoto,
  TeamList,
  TeamName,
  TeamItemOverlay,
  TeamOverlayBox,
} from './Team.styled';
import Social from 'components/Social/Social';

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
            <TeamOverlayBox>
              <picture>
                <source
                  srcset={`${person1Web} 1x, ${peson12xWeb} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${person1}1x, ${porson12x} 2x`}
                  type="image/jpeg"
                />
                <TeamPhoto src={person1} alt="John Doe" />
              </picture>
              <TeamItemOverlay>
                <Social className="team" />
              </TeamItemOverlay>
            </TeamOverlayBox>
            <TeamName>John Doe</TeamName>
            <p>President</p>
          </li>
          <li>
            <TeamOverlayBox>
              <picture>
                <source
                  srcset={`${personWeb} 1x, ${porson22xWeb} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${person2}1x, ${person22x} 2x`}
                  type="image/jpeg"
                />
                <TeamPhoto src={person2} alt="John Doe" />
              </picture>
              <TeamItemOverlay>
                <Social className="team" />
              </TeamItemOverlay>
            </TeamOverlayBox>
            <TeamName>John Doe</TeamName>
            <p>Vice President</p>
          </li>
          <li>
            <TeamOverlayBox>
              <picture>
                <source
                  srcSet={`${person3Web} 1x, ${person32xWeb} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${person3}1x, ${person32x} 2x`}
                  type="image/jpeg"
                />
                <TeamPhoto src={person3} alt="Steve Smith" />
              </picture>
              <TeamItemOverlay>
                <Social className="team" />
              </TeamItemOverlay>
            </TeamOverlayBox>
            <TeamName>Steve Smith</TeamName>
            <p>Marketing Head</p>
          </li>
        </TeamList>
      </Container>
    </TeamBox>
  );
};
export default Team;
