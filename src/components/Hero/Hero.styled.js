import styled from 'styled-components';
import showcase from '../../assets/images/home/showcase@2x.jpg';

export const HeroBox = styled.div`
  padding-top: 272px;
  padding-bottom: 270px;
  max-width: 1360px;
  margin: 0 auto;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${showcase});
  background-size: 100%;
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
  font-size: 55px;
  line-height: 1.36;
`;

export const HeroDescription = styled.p`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.35;
`;

export const HeroBtn = styled.button`
  width: 175px;
  height: 57px;
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
