const { Router } = require('express');

const calendarRouter = Router();

// 로그인 유무 미들웨어 추가해서 해당 cal_worker를 가진 캘린더 가져오기
// 캘린더의 모든 일정 조회
calendarRouter.get('/', (req, res) => {
  // 캘린더db에서 특정 기간의 unit(공수)을 가져와서
  // 총 공수, 급여(공수x일당), 근무일수 계산해서 변수에 넣어 데이터로 보내기
  // 리액트에서는 보낸 데이터를 캘린더 밑 상세내용에 뿌리기
  res.send('캘린더 전체 일정 조회');
});

// 캘린더의 특정 일정 조회
calendarRouter.get('/:id', (req, res) => {
  res.send('캘린더 특정 일정 조회');
});

calendarRouter.post('/', (req, res) => {
  // 태그로 입력하면 태그 db에서 unit과 memo 가져와서 입력
  res.send('캘린더 일정 추가');
});

calendarRouter.patch('/:id', (req, res) => {
  res.send('캘린더 일정 수정');
});

calendarRouter.delete('/:id', (req, res) => {
  res.send('캘린더 일정 삭제');
});

module.exports = calendarRouter;
