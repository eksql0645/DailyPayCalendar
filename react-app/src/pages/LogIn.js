import React from 'react';
import ModalTemplate from '../components/modal/ModalTemplate';
import LoginForm from '../containers/LoginForm';

function Login(props) {
  return (
    <ModalTemplate>
      <LoginForm />
    </ModalTemplate>
  );
}

export default Login;
