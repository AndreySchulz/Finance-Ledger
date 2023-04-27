import styled from 'styled-components';

export const CasesBox = styled.div`
  padding: 80px 0;
  color: var(--textColor);
`;

export const Container = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 28px;
  text-align: center;
`;

export const CasesFirstP = styled.p`
  font-size: 18px;
  line-height: 1.83;
  margin-bottom: 16px;
`;

export const CasesHeader = styled.h2`
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 24px;
`;

export const CasesSecondP = styled.p`
  font-size: 18px;
  line-height: 1.38;
  margin-bottom: 36px;
`;

export const CasesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 21px;
  grid-row-gap: 24px;
`;
