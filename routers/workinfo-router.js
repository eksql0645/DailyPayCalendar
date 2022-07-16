const { Router } = require('express');

const workInfoRouter = Router();

// 로그인 유무 미들웨어 추가해서 work_worker id로 찾기
workInfoRouter.get('/', (req, res) => {
  res.send('근로 정보 조회');
});

workInfoRouter.post('/', (req, res) => {
  res.send('근로 정보 추가');
});

workInfoRouter.patch('/', (req, res) => {
  res.send('근로 정보 수정');
});

workInfoRouter.delete('/', (req, res) => {
  res.send('근로 정보 삭제');
});

module.exports = workInfoRouter;
