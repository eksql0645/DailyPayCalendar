import React, { useEffect } from 'react';
import ModalForm from '../components/modal/ModalForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../modules/auth';

function SignupForm() {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.signup,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signup',
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);

  return (
    <ModalForm
      type="signup"
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
}

export default SignupForm;
