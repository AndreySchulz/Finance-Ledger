import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const FooterBox = styled.footer`
  padding: 20px 0;
  background-color: var(--textColor);
  color: var(--white);
  text-align: center;
`;
export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: baseline;

  margin-bottom: 12px;
  @media ${device.tablet} {
    margin-bottom: 10px;
  }
`;

export const SocialItem = styled.li`
  margin-right: 25px;

  :last-child {
    margin-right: 0;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 35px;
  height: 35px; */
  color: var(--white);
  fill: currentColor;

  :hover {
    fill: var(--primary);
  }
`;
