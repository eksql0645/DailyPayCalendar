import Modal from '../components/Modal';
import React, { useState } from 'react';
import Login from './LogIn';
import SignUp from './SignUp';

function Main() {
  const [loginModal, setLoginModal] = useState(true);
  const [signUpModal, setSignUpModal] = useState(true);
  return (
    <div>
      <button onClick={() => setSignUpModal(!signUpModal)}>SignUp</button>
      {!signUpModal && (
        <Modal
          closeModal={() => {
            setSignUpModal(!signUpModal);
          }}
        >
          <SignUp signUpModal={signUpModal} setSignUpModal={setSignUpModal} />
        </Modal>
      )}
      <button onClick={() => setLoginModal(!loginModal)}>Login</button>
      {!loginModal && (
        <Modal
          closeModal={() => {
            setLoginModal(!loginModal);
          }}
        >
          <Login loginModal={loginModal} setLoginModal={setLoginModal} />
        </Modal>
      )}
    </div>
  );
}

export default Main;
