import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    <form onSubmit={handleLoginSubmit}>
      <label>
        이메일
        <input
          type="email"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <div>
        <label>
          비밀번호
          <input
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <div>
        <Link to="/findPassword">비밀번호 찾기</Link>
        <Link to="/signup">회원가입</Link>
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
