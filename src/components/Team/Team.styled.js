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

export const TeamPhoto = styled.img``;
export const TeamOverlayBox = styled.div`
  position: relative;
  margin-bottom: 16px;

  transition: var(--transition);
  cursor: pointer;

  :hover {
    transform: scale(1.03);
  }

  @media ${device.tablet} {
    margin-bottom: 14px;
  }
`;
export const TeamItemOverlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  transition: var(--transition);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));

  ${TeamOverlayBox}:hover & {
    opacity: 1;
    box-shadow: 1px 2px 11px 2px rgba(10, 11, 11, 0.6);
    z-index: 1;
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
