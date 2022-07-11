import React from 'react';

function SignUp(props) {
  function signUpCheck() {
    // 일치하는 계정 확인
    // 없으면 가입 후 자동 로그인
    props.setSignUp(!props.signUp); // 모달 창 닫기
  }
  return (
    <div>
      <div>
        <label>이메일</label>
        <input type="email" placeholder="이메일을 입력하세요"></input>
      </div>
      <div>
        <label>닉네임</label>
        <input type="email" placeholder="닉네임을 원하시면 입력하세요"></input>
      </div>
      <div>
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력하세요"></input>
      </div>
      <button onClick={signUpCheck}>가입하기</button>
    </div>
  );
}

export default SignUp;
