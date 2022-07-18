import React from 'react';
import ModalForm from '../components/modal/ModalForm';
import ModalTemplate from '../components/modal/ModalTemplate';

function SignUp(props) {
  return (
    <ModalTemplate>
      <ModalForm type="signup" />
    </ModalTemplate>
  );
}

export default SignUp;
