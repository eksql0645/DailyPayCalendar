import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Link, Routes, Route } from 'react-router-dom';
import WorkTagTable from './work-tag-table';
import moment from 'moment';
import Calendar from 'react-calendar';
import './App.css';
function WorkSetting() {
  return (
    <div>
      <div>
        <label>급여시작일</label>
        <input type="text" placeholder="입력"></input>
        <br />
        <label>급여종료일</label>
        <input type="text" placeholder="입력"></input>
      </div>
      <label>기본 단가</label>
      <input type="text" placeholder="입력"></input>
      <div>
        <h3>나의 근로 태그 목록</h3>
        <WorkTagTable />
      </div>
      <button>추가</button>
    </div>
  );
}

function WorkingPeriod(props) {
  return (
    <div>
      {moment(props.value).format('YYYY년 MM월 DD일')}부터{' '}
      {moment(props.value).add(1, 'months').format('YYYY년 MM월 DD일')}까지{' '}
      <span>상세 내역</span>
    </div>
  );
}

function WorkInfo(props) {
  const workInfo = props.data.map((info) => {
    return (
      <span key={info.id}>
        {info.content}
        <br />
      </span>
    );
  });
  return <div>{workInfo}</div>;
}

function CalendarInfo() {
  const [value, onChange] = useState(new Date());
  const [isLogin, setIsLogin] = useState(false);
  const elements = [
    { id: 1, content: '총 공수' },
    { id: 2, content: '총 급여' },
    { id: 3, content: '총 근무일' },
  ];
  return (
    <div>
      {!isLogin && <Login />}
      <Calendar onChange={onChange} value={value}></Calendar>
      <WorkingPeriod value={value} />
      <WorkInfo data={elements} />
      <Link to="/workSetting">
        <button>설정</button>
      </Link>
    </div>
  );
}

function Login() {
  return (
    <div className="modal">
      <label>이메일</label>
      <input type="email" placeholder="이메일을 입력하세요."></input>
      <br />
      <label>비밀번호</label>
      <input type="password" placeholder="비밀번호를 입력하세요."></input>
      <br />
      <Link to="/findPassword">비밀번호 찾기</Link>
      <br />

      <Link to="/signUp">
        <button>회원가입</button>
      </Link>
    </div>
  );
}

function SignUp() {
  return (
    <div className="modal">
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
      <button>가입하기</button>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/workSetting" element={<WorkSetting />} />
      <Route path="/" element={<CalendarInfo />} />
    </Routes>
  );
}

export default App;
