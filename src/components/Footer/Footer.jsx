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
              <SVG src={facebook} width={35} height={35} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="/">
              <SVG src={twit} width={35} height={35} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="/">
              <SVG src={youtube} width={35} height={35} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="/">
              <SVG src={linkedin} width={35} height={35} />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <p>Copyright © 2021 - FinanceLedger</p>
      </div>
    </FooterBox>
  );
};

export default Footer;
