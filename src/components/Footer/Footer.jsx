import SVG from 'react-inlinesvg';
import { facebook, linkedin, twit, youtube } from '../../assets/images/icon';
import { FooterBox, SocialList, SocialItem, SocialLink } from './Footer.styled';
const Footer = () => {
  return (
    <FooterBox>
      <div>
        <SocialList>
          <SocialItem>
            <SocialLink href="/">
              <SVG src={facebook} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="/">
              <SVG src={twit} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="/">
              <SVG src={youtube} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="/">
              <SVG src={linkedin} />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <p>Copyright © 2021 - FinanceLedger</p>
      </div>
    </FooterBox>
  );
};

export default Footer;
