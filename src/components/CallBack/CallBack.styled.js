import styled from 'styled-components';
import { Field, Form } from 'formik';
import { device } from 'stylesheet/breakpoints';

export const CallbackBox = styled.div`
  background-color: var(--gray);
`;

export const Container = styled.div`
  display: flex;

  @media ${device.desktop} {
    margin: 0 auto;
    max-width: 1360px;
  }
`;

export const CallBackImg = styled.img`
  object-fit: cover;
  @media ${device.tablet} {
    max-width: 368px;
  }
  @media ${device.desktop} {
    max-width: 670px;
  }
`;
export const CallbackForm = styled(Form)`
  display: flex;

  width: 100%;
  @media ${device.tablet} {
    padding: 32px 32px;
    flex-direction: column;
    justify-content: center;
  }
  @media ${device.desktop} {
    padding: 28px 28px;
  }
`;

export const CallbackHeader = styled.h2`
  font-size: 40px;
  line-height: 1.35;
  margin-bottom: 31px;
  color: var(--textColor);
`;

export const CallBackField = styled(Field)`
  height: 60px;
  padding: 8px 16px;

  margin-bottom: 25px;

  :last-child {
    margin-bottom: 40px;
  }

  background: var(--white);
  border-radius: 5px;
  border: none;

  font-size: 18px;
  line-height: 1.38;
  color: #808080;
`;

export const SubmitBtn = styled.button`
  width: 155px;
  height: 57px;

  background-color: var(--primary);
  border-radius: 5px;
  color: var(--white);
  border: none;
  transition: var(--transition);
  cursor: pointer;

  :hover {
    background-color: var(--primaryActive);
  }
`;
