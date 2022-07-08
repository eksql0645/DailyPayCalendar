import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { Routes, Route } from 'react-router-dom';
import WorkTagTable from './work-tag-table';

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

function App() {

  return (
    <Routes>
      <Route path="/work_setting" element={<WorkSetting />} />
    </Routes>
  );
}

export default App;
