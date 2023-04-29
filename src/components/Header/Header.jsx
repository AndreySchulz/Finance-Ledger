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
  const [screen, SetScreen] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const handleResize = () => {
    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth >= 768) {
      SetScreen(-70);
      return;
    }
    SetScreen(-120);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let header = document.getElementById('header');
    if (scroll >= 120) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }, [scroll]);

  return (
    <HeaderBox>
      <Container id="header">
        <Logo to="home" spy={true} smooth={true}>
          <SVG src={book} width={40} height={30} />
          Finance <SpanLogo>Ledger</SpanLogo>
        </Logo>
        <LinkBar>
          <LinkBarList>
            <NavLink to="home" spy={true} smooth={true} offset={screen}>
              Home
            </NavLink>
          </LinkBarList>
          <LinkBarList>
            <NavLink to="about" spy={true} smooth={true} offset={screen}>
              About
            </NavLink>
          </LinkBarList>
          <LinkBarList>
            <NavLink to="cases" spy={true} smooth={true} offset={screen}>
              Cases
            </NavLink>
          </LinkBarList>
          <LinkBarList>
            <NavLink to="blog" spy={true} smooth={true} offset={screen}>
              Blog
            </NavLink>
          </LinkBarList>
          <LinkBarList>
            <NavLink to="contact" spy={true} smooth={true} offset={screen}>
              Contact
            </NavLink>
          </LinkBarList>
        </LinkBar>
      </Container>
    </HeaderBox>
  );
};

export default Header;
