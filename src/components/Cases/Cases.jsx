import cases1 from '../../assets/images/cases/cases1.jpg';
import cases12x from '../../assets/images/cases/cases1@2x.jpg';
import cases1Web from '../../assets/images/cases/cases1.webp';
import cases12xWeb from '../../assets/images/cases/cases1@2x.webp';
import cases2 from '../../assets/images/cases/cases2.jpg';
import cases22x from '../../assets/images/cases/cases2@2x.jpg';
import cases2Web from '../../assets/images/cases/cases2.webp';
import cases22xWeb from '../../assets/images/cases/cases2@2x.webp';
import cases3 from '../../assets/images/cases/cases3.jpg';
import cases32x from '../../assets/images/cases/cases3@2x.jpg';
import cases3Web from '../../assets/images/cases/cases3.webp';
import cases32xWeb from '../../assets/images/cases/cases3@2x.webp';
import cases4 from '../../assets/images/cases/cases4.jpg';
import cases42x from '../../assets/images/cases/cases4@2x.jpg';
import cases4Web from '../../assets/images/cases/cases4.webp';
import cases42xWeb from '../../assets/images/cases/cases4@2x.webp';
import cases5 from '../../assets/images/cases/cases5.jpg';
import cases52x from '../../assets/images/cases/cases5@2x.jpg';
import cases5Web from '../../assets/images/cases/cases5.webp';
import cases52xWeb from '../../assets/images/cases/cases5@2x.webp';
import cases6 from '../../assets/images/cases/cases6.jpg';
import cases62x from '../../assets/images/cases/cases6@2x.jpg';
import cases6Web from '../../assets/images/cases/cases6.webp';
import cases62xWeb from '../../assets/images/cases/cases6@2x.webp';
import {
  Container,
  CasesBox,
  CasesFirstP,
  CasesHeader,
  CasesSecondP,
  CasesList,
} from './Cases.styled';

const Cases = () => {
  return (
    <CasesBox id="cases">
      <Container>
        <CasesFirstP>This is what we do</CasesFirstP>
        <CasesHeader>Business Cases</CasesHeader>
        <CasesSecondP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </CasesSecondP>
        <CasesList>
          <li>
            <picture>
              <source
                srcset={`${cases1Web} 1x, ${cases12xWeb} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${cases1}1x, ${cases12x} 2x`}
                type="image/jpeg"
              />
              <img src={cases1} alt="Case 1" />
            </picture>
          </li>
          <li>
            <picture>
              <source
                srcset={`${cases2Web} 1x, ${cases22xWeb} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${cases2}1x, ${cases22x} 2x`}
                type="image/jpeg"
              />
              <img src={cases2} alt="Case 2" />
            </picture>
          </li>
          <li>
            <picture>
              <source
                srcset={`${cases3Web} 1x, ${cases32xWeb} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${cases3}1x, ${cases32x} 2x`}
                type="image/jpeg"
              />
              <img src={cases3} alt="Case 3" />
            </picture>
          </li>
          <li>
            <picture>
              <source
                srcset={`${cases4Web} 1x, ${cases42xWeb} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${cases4}1x, ${cases42x} 2x`}
                type="image/jpeg"
              />
              <img src={cases4} alt="Case 4" />
            </picture>
          </li>
          <li>
            <picture>
              <source
                srcset={`${cases5Web} 1x, ${cases52xWeb} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${cases5}1x, ${cases52x} 2x`}
                type="image/jpeg"
              />
              <img src={cases5} alt="Case 5" />
            </picture>
          </li>
          <li>
            <picture>
              <source
                srcset={`${cases6Web} 1x, ${cases62xWeb} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${cases6}1x, ${cases62x} 2x`}
                type="image/jpeg"
              />
              <img src={cases6} alt="Case 6" />
            </picture>
          </li>
        </CasesList>
      </Container>
    </CasesBox>
  );
};

export default Cases;
