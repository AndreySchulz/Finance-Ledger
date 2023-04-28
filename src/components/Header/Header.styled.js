import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from 'stylesheet/breakpoints';

export const HeaderBox = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;

  color: var(--white);
`;
export const Container = styled.div`
  max-width: 1360px;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    padding: 16px 32px;
  }
  @media ${device.desktop} {
    padding: 22px 28px 0 28px;
  }
`;

export const Logo = styled(Link)`
  font-size: 35px;
  line-height: 1.37;
  color: var(--primary);
  transition: var(--transition);
  cursor: pointer;
  :hover {
    letter-spacing: 0.02em;
    color: var(--primaryActive);
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  padding-bottom: 10px;

  &.active {
    border-bottom: 2px solid var(--primary);
  }
`;
export const SpanLogo = styled.span`
  color: var(--white);
`;

export const LinkBar = styled.ul`
  display: flex;
`;
export const LinkBarList = styled.li`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.38;
  @media ${device.tablet} {
    margin-right: 20px;
  }
  @media ${device.desktop} {
    margin-right: 40px;
  }
  :last-child {
    margin-right: 0;
  }
`;
