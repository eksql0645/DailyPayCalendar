import React from 'react';
import moment from 'moment';

function Schedule(props) {
  return (
    <div>
      <div>{moment(props.value).format('YYYY년 MM월 DD일')}</div>
      <div>
        <label>오늘 공수 </label>

        <input type="number" step="0.1" min="0"></input>
        <button>태그로 선택</button>
      </div>
      <div>
        <p>메모 내용</p>
        <input type="text" placeholder="메모를 입력하세요."></input>
      </div>
      <button>추가</button>
    </div>
  );
}

export default Schedule;
