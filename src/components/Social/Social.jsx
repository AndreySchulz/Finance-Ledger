import SVG from 'react-inlinesvg';
import { facebook, linkedin, twit, youtube } from '../../assets/images/icon';
import { SocialItem, SocialLink, SocialList } from './Social.styled';

const Social = ({ className }) => {
  return (
    <SocialList>
      <SocialItem>
        <SocialLink href="/" className={className}>
          <SVG src={facebook} width={35} height={35} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="/" className={className}>
          <SVG src={twit} width={35} height={35} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="/" className={className}>
          <SVG src={youtube} width={35} height={35} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="/" className={className}>
          <SVG src={linkedin} width={35} height={35} />
        </SocialLink>
      </SocialItem>
    </SocialList>
  );
};

export default Social;
