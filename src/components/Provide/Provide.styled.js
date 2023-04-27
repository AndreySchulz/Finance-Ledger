import styled from 'styled-components';

export const ProvideBox = styled.div`
  margin: 0 auto;

  color: var(--white);
`;
export const Container = styled.div`
  display: flex;
  padding-right: 28px;
  margin: 0 auto;
  max-width: 1360px;
  background-color: var(--primary);
`;

export const PrivideImg = styled.img`
  max-width: 670px;
  margin-right: 20px;
  object-fit: cover;
`;

export const ProvideInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ProvideHeader = styled.h2`
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 24px;
`;

export const ProvideText = styled.p`
  font-size: 18px;
  line-height: 1.38;
  margin-bottom: 16px;
`;

export const ProvideBtn = styled.button`
  width: 156px;
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
    color: var(--primary);
    border-color: var(--primary);
  }
`;
