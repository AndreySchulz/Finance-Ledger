import SVG from 'react-inlinesvg';
import { useEffect, useState } from 'react';
import { book } from 'assets/images/icon';
import {
  Container,
  HeaderBox,
  LinkBar,
  LinkBarList,
  Logo,
  SpanLogo,
  NavLink,
} from './Header.styled';

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log(scroll);
  return (
    <HeaderBox>
      <Container>
        <Logo to="home" spy={true} smooth={true}>
          <SVG src={book} width={40} height={30} />
          Finance <SpanLogo>Ledger</SpanLogo>
        </Logo>
        <LinkBar>
          <LinkBarList>
            <NavLink to="home" spy={true} smooth={true} offset={-70}>
              Home
            </NavLink>
          </LinkBarList>
          <LinkBarList>
            <NavLink to="about" spy={true} smooth={true} offset={-70}>
              About
            </NavLink>
          </LinkBarList>
          <LinkBarList>
            <NavLink to="cases" spy={true} smooth={true} offset={-70}>
              Cases
            </NavLink>
          </LinkBarList>
          <LinkBarList>
            <NavLink to="blog" spy={true} smooth={true} offset={-70}>
              Blog
            </NavLink>
          </LinkBarList>
          <LinkBarList>
            <NavLink to="contact" spy={true} smooth={true} offset={-70}>
              Contact
            </NavLink>
          </LinkBarList>
        </LinkBar>
      </Container>
    </HeaderBox>
  );
};

export default Header;
