import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ModalTemplate from '../components/modal/ModalTemplate';
import ModalForm from '../components/modal/ModalForm';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const data = { email, password };
    const bodyData = JSON.stringify(data); // JSON 형식으로 변환

    // 서버와 통신
    await axios
      .post('http://localhost:3000/api/user/login', bodyData, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        // 일치하는 계정이 있으면(200) 로그인 후 모달창 닫고 캘린더 화면으로 전환
        console.log(res);
      });

    props.setLoginModal(!props.loginModal); // 일치하면 모달 창 닫고 캘린더로 이동
    // 일치하는 계정이 없으면(에러코드) 모달창에 일치하는 계정이 없다는 메세지 출력
  }

  // email state 변경
  function handleEmailChange(e) {
    setEmail(e.target.value);
    console.log(email);
  }

  // password state 변경
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <ModalTemplate>
      <ModalForm type="login" />
    </ModalTemplate>
  );
}

export default Login;
