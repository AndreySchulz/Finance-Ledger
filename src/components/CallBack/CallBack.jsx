import * as Yup from 'yup';
import { Formik } from 'formik';

import people from '../../assets/images/home/people.jpg';
import {
  CallBackImg,
  CallbackForm,
  CallbackHeader,
  CallBackField,
  SubmitBtn,
  CallbackBox,
} from './CallBack.styled';

const CallBackSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
    .email()
    .min(10, 'Email is too short, at least 10!')
    .matches(
      /^([a-zA-Z0-9]{1}[\w\-.]{0,}[a-zA-Z0-9]{1})+@([\w-]+.)+[\w]{2,4}$/,
      'Invalid email'
    )
    .max(63, 'Email is too long, at maximum 63!')
    .required('Enter email'),
});

const CallBack = () => {
  return (
    <CallbackBox id="contact">
      <CallBackImg src={people} alt="our team" />
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={CallBackSchema}
        onSubmit={null}
      >
        {({ handleChange, values, errors, touched }) => (
          <CallbackForm>
            <CallbackHeader>Request Callback</CallbackHeader>
            <CallBackField
              type="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <CallBackField
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter Email*"
              className={errors.email && touched.email ? 'error' : ''}
            />
            {errors.email && touched.email ? (
              <p>This is a required field</p>
            ) : null}
            <SubmitBtn type="submit">Send</SubmitBtn>
          </CallbackForm>
        )}
      </Formik>
    </CallbackBox>
  );
};

export default CallBack;
