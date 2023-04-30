import Social from 'components/Social/Social';
import { FooterBox } from './Footer.styled';
const Footer = () => {
  return (
    <FooterBox>
      <Social className="footer" />
      <p>Copyright © 2021 - FinanceLedger</p>
    </FooterBox>
  );
};

export default Footer;
