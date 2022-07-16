import React from 'react';
import WorkTagTable from '../components/work-tag-table';
import Button from '../components/common/Button';

function WorkTag() {
  return (
    <div>
      <div>
        <h3>나의 근로 태그 목록</h3>
        <p>현재 나의 기본 단가:</p>
        <WorkTagTable />
      </div>
      <div>
        <label>근로 종류</label>
        <input type="text" placeholder="주간"></input>
        <label>공수</label>
        <input type="number" placeholder="1.0" step="0.1" min="0"></input>
      </div>
      <div>
        <Button>추가</Button>
      </div>
    </div>
  );
}

export default WorkTag;
