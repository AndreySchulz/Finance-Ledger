import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const PostBox = styled.div`
  color: var(--white);
`;
export const Container = styled.div`
  background-color: var(--blue);
  @media ${device.tablet} {
    display: flex;
    flex-direction: row-reverse;
  }
  @media ${device.desktop} {
    margin: 0 auto;
    max-width: 1360px;
  }
`;
export const PostInfo = styled.div`
  padding: 48px 20px;

  @media ${device.tablet} {
    padding: 59px 32px;
  }
  @media ${device.desktop} {
    padding: 80px 28px;
  }
`;
export const PostText = styled.p`
  font-size: 16px;
  line-height: 1.37;
  margin-bottom: 16px;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 1.38;
  }
`;

export const PostHeader = styled.h2`
  font-size: 32px;
  line-height: 1.37;
  margin-bottom: 24px;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 1.38;
  }
`;

export const PostBtn = styled.button`
  width: 186px;
  height: 57px;
  margin-top: 8px;
  font-size: 16px;
  line-height: 1.37;

  border: 1px solid var(--white);
  border-radius: 5px;
  background-color: transparent;
  color: var(--white);
  cursor: pointer;
  transition: var(--transition);

  :hover {
    background: #f4f4f4;
    color: var(--blue);
    border-color: var(--blue);
  }
`;

export const PostImg = styled.img`
  object-fit: cover;
  @media ${device.tablet} {
    max-width: 368px;
  }
  @media ${device.desktop} {
    max-width: 670px;
  }
`;
