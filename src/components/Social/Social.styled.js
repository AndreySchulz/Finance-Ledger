import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

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

  color: var(--white);
  fill: currentColor;
  transition: var(--transition);

  &.team {
    :hover {
      fill: rgba(255, 255, 255, 0.8);
    }
  }
  &.footer {
    :hover {
      fill: var(--primary);
    }
  }
`;
