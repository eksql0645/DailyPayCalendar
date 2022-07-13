const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
const cors = require('cors');
// const path = require('path');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

// db 연결 객체인 sequelize로 MySQL과 연동
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
    // db 연결 후 서버 연결
    app.listen(port, () => {
      console.log(`Server is running ${port} port`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

// cors 에러 방지
app.use(cors());

// body-parser: 요청 데이터 -> req.body 객체로 변환
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 개발용 로그 출력
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello express');
});

// 리액트 연결 - 빌드 후에 설정
// react-app/build 안에 파일들을 static파일로 설정
// app.use(express.static(path.join(__dirname, "react-app/build")));

// // 모든 요청 시 index.html로 이동: 리액트 라우터 사용
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/react-app/bulid/index.html"));
// });

module.exports = app;
