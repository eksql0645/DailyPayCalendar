import React, { useEffect } from 'react';
import ModalForm from '../components/modal/ModalForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../modules/auth';

function LoginForm() {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <ModalForm
      type="login"
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
}

export default LoginForm;
