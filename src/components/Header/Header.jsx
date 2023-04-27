import { Link, animateScroll as scroll } from 'react-scroll';
import {
  Container,
  HeaderBox,
  LinkBar,
  LinkBarList,
  Logo,
  SpanLogo,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderBox id="header">
      <Container>
        <Logo>
          Finance <SpanLogo>Ledger</SpanLogo>
        </Logo>
        <LinkBar>
          <LinkBarList>Home</LinkBarList>
          <LinkBarList>About</LinkBarList>
          <LinkBarList>Cases</LinkBarList>
          <LinkBarList>Blog</LinkBarList>
          <LinkBarList>Contact</LinkBarList>
        </LinkBar>
      </Container>
    </HeaderBox>
  );
};

export default Header;
