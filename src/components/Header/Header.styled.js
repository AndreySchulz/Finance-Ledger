import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from 'stylesheet/breakpoints';

export const HeaderBox = styled.header`
  position: fixed;
  width: 100%;

  color: var(--white);
  @media ${device.tablet} {
    height: 70px;
  }
`;
export const Container = styled.div`
  padding: 22px;
  text-align: center;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px 32px;
    text-align: start;
  }
  @media ${device.desktop} {
    padding: 22px 28px 0 28px;
    max-width: 1360px;
    margin: 0 auto;
  }
`;

export const Logo = styled(Link)`
  display: inline-block;
  margin-bottom: 16px;
  font-size: 28px;
  line-height: 1.35;
  color: var(--primary);

  @media ${device.tablet} {
    margin-bottom: 0;
    font-size: 35px;
    line-height: 1.37;
    transition: var(--transition);
    cursor: pointer;

    :hover {
      letter-spacing: 0.02em;
      color: var(--primaryActive);
    }
  }
`;

export const SpanLogo = styled.span`
  color: var(--white);
`;

export const LinkBar = styled.ul`
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;
export const LinkBarList = styled.li`
  font-size: 16px;
  line-height: 1.38;
  margin-right: 12px;

  @media ${device.tablet} {
    font-size: 18px;
    margin-right: 20px;
  }
  @media ${device.desktop} {
    margin-right: 40px;
  }
  :last-child {
    margin-right: 0;
  }
`;
export const NavLink = styled(Link)`
  cursor: pointer;
  padding-bottom: 10px;

  &.active {
    border-bottom: 2px solid var(--primary);
  }
`;
