import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const CasesBox = styled.div`
  color: var(--textColor);
  padding: 56px 0 40px 0px;
  @media ${device.tablet} {
    padding: 48px 0;
  }
  @media ${device.desktop} {
    padding: 80px 0;
  }
`;

export const Container = styled.div`
  text-align: center;
  padding: 0 20px;

  @media ${device.tablet} {
    padding: 0 32px;
  }
  @media ${device.desktop} {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 28px;
  }
`;

export const CasesFirstP = styled.p`
  font-size: 16px;
  line-height: 1.37;
  margin-bottom: 31px;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 1.83;
    margin-bottom: 16px;
  }
`;

export const CasesHeader = styled.h2`
  font-size: 32px;
  line-height: 1.37;
  margin-bottom: 24px;
  @media ${device.tablet} {
    font-size: 40px;
    line-height: 1.2;
  }
`;

export const CasesSecondP = styled.p`
  font-size: 18px;
  line-height: 1.38;
  margin-bottom: 36px;
`;

export const CasesList = styled.ul`
  display: grid;
  grid-row-gap: 8px;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;
  }
  @media ${device.desktop} {
    grid-column-gap: 21px;
    grid-row-gap: 24px;
  }
`;
export const CasesItem = styled.li`
  transition: var(--transition);
  :hover {
    opacity: 0.8;
    -moz-opacity: 0.8;
    filter: alpha(opacity=80) black;
    -khtml-opacity: 0.8;
    background-color: #000;
  }
`;
