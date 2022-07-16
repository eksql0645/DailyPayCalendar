import React from 'react';
import moment from 'moment';
import Button from '../components/common/Button';

function Schedule(props) {
  return (
    <div>
      <div>{moment(props.value).format('YYYY년 MM월 DD일')}</div>
      <div>
        <label>
          오늘 공수
          <input type="number" step="0.1" min="0" />
        </label>
        <Button>태그로 선택</Button>
      </div>
      <div>
        <label>
          메모 내용
          <input type="text" placeholder="메모를 입력하세요." />
        </label>
        <Button>추가</Button>
      </div>
    </div>
  );
}

export default Schedule;
