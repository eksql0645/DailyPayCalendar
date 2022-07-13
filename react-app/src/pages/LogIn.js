import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
  function loginCheck() {
    // db에 일치하는 이메일 비번 있는지 확인 후
    props.setLoginModal(!props.loginModal); // 일치하면 모달 창 닫고 캘린더로 이동
    // 일치하는 계정이 없으면 alert창 띄우기
  }
  return (
    <div>
      <div>
        <label>이메일</label>
        <input type="email" placeholder="이메일을 입력하세요."></input>
      </div>
      <div>
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력하세요."></input>
      </div>
      <div>
        <Link to="/findPassword">비밀번호 찾기</Link>
      </div>
      <button onClick={loginCheck}>로그인</button>
    </div>
  );
}

export default Login;
