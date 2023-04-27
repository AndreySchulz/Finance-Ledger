import styled from 'styled-components';

export const PostBox = styled.div`
  margin: 0 auto;

  color: var(--white);
`;
export const Container = styled.div`
  display: flex;
  padding-left: 28px;
  margin: 0 auto;
  max-width: 1360px;
  background-color: var(--blue);
`;
export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
`;
export const PostText = styled.p`
  font-size: 18px;
  line-height: 1.38;
  margin-bottom: 16px;
`;

export const PostHeader = styled.h2`
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 24px;
`;

export const PostBtn = styled.button`
  width: 186px;
  height: 57px;
  margin-top: 8px;

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
  max-width: 670px;
  object-fit: cover;
`;
