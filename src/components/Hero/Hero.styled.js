import styled from 'styled-components';
import showcase from '../../assets/images/home/showcase@2x.jpg';
import SVG from 'react-inlinesvg';
import { device } from 'stylesheet/breakpoints';

export const HeroBox = styled.div`
  padding: 160px 0 104px 0;

  text-align: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${showcase});
  background-size: cover;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    padding: 378px 0;
  }
  @media ${device.desktop} {
    max-width: 1360px;
    margin: 0 auto;
    padding: 270px 0;
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--white);
`;

export const HeroTitle = styled.h1`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 40px;
  line-height: 1.36;
  @media ${device.tablet} {
    font-size: 55px;
  }
`;

export const HeroDescription = styled.p`
  margin-bottom: 24px;
  font-size: 26px;
  line-height: 1.35;
  @media ${device.tablet} {
    font-size: 40px;
  }
`;

export const HeroBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 175px;
  height: 57px;

  font-size: 18px;
  line-height: 1.38;

  border-radius: 5px;
  border: none;
  background-color: var(--primary);
  color: var(--white);
  cursor: pointer;
  transition: var(--transition);

  :hover {
    background-color: var(--primaryActive);
  }
`;

export const BtnSvg = styled(SVG)`
  margin-right: 8px;
`;
