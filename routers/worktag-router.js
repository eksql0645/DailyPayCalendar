const { Router } = require('express');

const workTagRouter = Router();

// 로그인 미들웨어 추가
workTagRouter.get('/', (req, res) => {
  res.send('전체 태그 조회');
});

workTagRouter.post('/', (req, res) => {
  res.send('태그 추가');
});

workTagRouter.get('/:id', (req, res) => {
  res.send('특정 태그 조회');
});

workTagRouter.patch('/:id', (req, res) => {
  res.send('태그 수정');
});

workTagRouter.delete('/:id', (req, res) => {
  res.send('태그 삭제');
});

module.exports = workTagRouter;
