import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const ProvideBox = styled.div`
  background-color: var(--primary);
  color: var(--white);

  @media ${device.tablet} {
    display: flex;
  }
  @media ${device.desktop} {
    /* max-width: 1360px; */
    margin: 0 auto;
  }
`;

export const PrivideImg = styled.img`
  object-fit: cover;

  @media ${device.tablet} {
    max-width: 368px;
    height: 589px;
  }
  @media ${device.desktop} {
    max-width: 670px;
    height: 460px;
  }
`;

export const ProvideInfoBox = styled.div`
  padding: 79px 20px;

  @media ${device.tablet} {
    padding: 62px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media ${device.desktop} {
    padding: 80px 28px;
  }
`;
export const ProvideHeader = styled.h2`
  font-size: 32px;
  line-height: 1.2;
  margin-bottom: 24px;
  @media ${device.tablet} {
    font-size: 40px;
  }
`;

export const ProvideText = styled.p`
  font-size: 16px;
  line-height: 1.38;
  margin-bottom: 16px;
  @media ${device.tablet} {
    font-size: 18px;
  }
`;

export const ProvideBtn = styled.button`
  width: 156px;
  height: 57px;
  margin-top: 8px;

  font-size: 16px;
  line-height: 1.37;

  border: 1px solid var(--white);
  border-radius: 5px;
  background-color: transparent;
  color: var(--white);
  cursor: pointer;
  transition: var(--transition);

  :hover {
    background: #f4f4f4;
    color: var(--primary);
    border-color: var(--primary);
  }
`;
