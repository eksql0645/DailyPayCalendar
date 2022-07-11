import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import moment from 'moment';

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

  const elements = [
    { id: 1, content: '총 공수' },
    { id: 2, content: '총 급여' },
    { id: 3, content: '총 근무일' },
  ];
  return (
    <div>
      <Calendar onChange={onChange} value={value}></Calendar>
      <WorkingPeriod value={value} />
      <WorkInfo data={elements} />
      <Link to="/workSetting">
        <button>설정</button>
      </Link>
    </div>
  );
}

export default CalendarInfo;
