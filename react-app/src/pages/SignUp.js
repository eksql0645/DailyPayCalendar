import React from 'react';
import ModalTemplate from '../components/modal/ModalTemplate';
import SignupForm from '../containers/SignupForm';

function SignUp() {
  return (
    <ModalTemplate>
      <SignupForm />
    </ModalTemplate>
  );
}

export default SignUp;
