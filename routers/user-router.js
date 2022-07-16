const { Router } = require('express');
const userRouter = Router();

userRouter.post('/signup', (req, res) => {
  res.send('회원가입');
});

// 로그인
userRouter.post('/login', (req, res) => {
  // db에 일치하는 이메일 비번 있는지 확인
  res.send(req.body);
});

// 이하 로그인 유무 미들웨어 추가하기
userRouter.get('/', (req, res) => {
  res.send('회원정보 조회');
});

userRouter.patch('/', (req, res) => {
  res.send('회원정보 수정');
});

userRouter.delete('/', (req, res) => {
  res.send('회원정보 삭제');
});

module.exports = userRouter;
