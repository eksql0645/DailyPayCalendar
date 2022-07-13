import React from 'react';

function WorkSetting() {
  return (
    <div>
      <div>
        <label>급여시작일</label>
        <input type="text" placeholder="입력"></input>
      </div>
      <div>
        <label>급여종료일</label>
        <input type="text" placeholder="입력"></input>
      </div>
      <div>
        <label>기본 단가</label>
        <input type="text" placeholder="입력"></input>
      </div>
    </div>
  );
}

export default WorkSetting;
