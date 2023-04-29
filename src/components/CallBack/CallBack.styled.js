import styled from 'styled-components';
import { Field, Form } from 'formik';
import { device } from 'stylesheet/breakpoints';
import SVG from 'react-inlinesvg';

export const CallbackBox = styled.div`
  background-color: var(--gray);
  @media ${device.tablet} {
    display: flex;
  }
  @media ${device.desktop} {
    /* margin: 0 auto;
    max-width: 1360px; */
  }
`;

export const CallBackImg = styled.img`
  object-fit: cover;
  @media ${device.tablet} {
    max-width: 368px;
    height: 354px;
  }
  @media ${device.desktop} {
    max-width: 670px;
    height: 454px;
  }
`;
export const CallbackForm = styled(Form)`
  position: relative;
  width: 100%;
  padding: 51px 20px 25px 20px;

  @media ${device.tablet} {
    display: flex;
    padding: 32px 32px;
    flex-direction: column;
    justify-content: center;
  }
  @media ${device.desktop} {
    padding: 28px 28px;
  }
`;

export const CallbackHeader = styled.h2`
  font-size: 32px;
  line-height: 1.5;
  margin-bottom: 69px;
  color: var(--textColor);
  @media ${device.tablet} {
    font-size: 40px;
    line-height: 1.35;
    margin-bottom: 24px;
  }
`;

export const CallBackField = styled(Field)`
  width: 100%;
  height: 60px;
  padding: 8px 16px;

  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.44;

  background: var(--white);
  border-radius: 5px;
  border: none;

  color: #808080;

  :nth-child(3) {
    margin-bottom: 24px;
  }

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 1.38;
  }

  @media ${device.desktop} {
    :nth-child(3) {
      margin-bottom: 40px;
    }
  }
`;

export const SubmitBtn = styled.button`
  width: 155px;
  height: 57px;

  font-size: 16px;
  line-height: 1.37;

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

export const ErrorText = styled.p`
  position: absolute;
  bottom: 84px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: red;
  @media ${device.tablet} {
    bottom: 91px;
  }
  @media ${device.desktop} {
    bottom: 140px;
  }
`;

export const ErrorIcon = styled(SVG)``;
