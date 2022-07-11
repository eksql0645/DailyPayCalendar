import React from 'react';
import WorkTagTable from '../work-tag-table';

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

export default WorkSetting;
