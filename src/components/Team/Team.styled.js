import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const TeamBox = styled.div`
  color: var(--textColor);
  padding: 72px 0 50px 0;
  @media ${device.tablet} {
    padding: 50px 0;
  }
  @media ${device.desktop} {
    padding: 80px 0;
  }
`;
export const Container = styled.div`
  text-align: center;
  padding: 0 20px;
  @media ${device.tablet} {
    padding: 0 28px;
  }

  @media ${device.desktop} {
    max-width: 1360px;
    margin: 0 auto;
  }
`;

export const TeamFirstP = styled.p`
  font-size: 16px;
  line-height: 1.37;
  margin-bottom: 16px;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 1.83;
  }
`;

export const TeamHeader = styled.h2`
  font-size: 32px;
  line-height: 1.37;
  margin-bottom: 24px;
  @media ${device.tablet} {
    font-size: 40px;
    line-height: 1.35;
  }
`;

export const TeamSecondP = styled.p`
  font-size: 16px;
  line-height: 1.37;
  margin-bottom: 63px;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 1.38;
    margin-bottom: 36px;
  }
`;

export const TeamList = styled.ul`
  display: grid;
  grid-row-gap: 30px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 18px;
  }
  @media ${device.desktop} {
    grid-column-gap: 21px;
  }
`;

export const TeamPhoto = styled.img`
  margin-bottom: 16px;
  @media ${device.tablet} {
    margin-bottom: 14px;
  }
`;

export const TeamName = styled.h3`
  font-size: 20px;
  line-height: 1.35;
  margin-bottom: 8px;
  @media ${device.tablet} {
    font-size: 32px;
    line-height: 1;
  }
`;
export const TeamJob = styled.p`
  font-size: 16px;
  line-height: 1.37;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 1.38;
  }
`;
