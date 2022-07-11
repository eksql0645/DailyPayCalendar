import React from 'react';
import WorkTagTable from '../work-tag-table';

function WorkTag() {
  return (
    <div>
      <div>
        <h3>나의 근로 태그 목록</h3>
        <p>현재 나의 기본 단가:</p>
        <WorkTagTable />
      </div>
      <button>추가</button>
    </div>
  );
}

export default WorkTag;
