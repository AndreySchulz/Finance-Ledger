import styled from 'styled-components';
import { Link } from 'react-scroll';

export const HeaderBox = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;

  color: var(--white);
`;
export const Container = styled.div`
  max-width: 1360px;

  padding: 32px 28px 0 28px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 35px;
  line-height: 1.37;
  color: var(--primary);
  transition: var(--transition);
  :hover {
    letter-spacing: 0.02em;
    color: var(--primaryActive);
  }
`;
export const SpanLogo = styled.span`
  color: var(--white);
`;

export const LinkBar = styled.ul`
  display: flex;
`;
export const LinkBarList = styled.li`
  margin-right: 40px;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.38;

  :last-child {
    margin-right: 0;
  }
`;
