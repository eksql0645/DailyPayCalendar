const Sequelize = require('sequelize');
const User = require('./user');
const Calendar = require('./calendar');
const WorkInfo = require('./workInfo');
const WorkTag = require('./workTag');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};

// db 설정을 가진 MySQL 연결 객체(sequelize) 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// db 객체에 sequelize 및 모델 추가
db.sequelize = sequelize;
db.User = User;
db.WorkInfo = WorkInfo;
db.WorkTag = WorkTag;
db.Calendar = Calendar;

// 각 모델의 init 호출: 테이블과 모델 연결
User.init(sequelize);
Calendar.init(sequelize);
WorkInfo.init(sequelize);
WorkTag.init(sequelize);

// 테이블 간 관계 설정
User.associate(db);
Calendar.associate(db);
WorkInfo.associate(db);
WorkTag.associate(db);

db.User = User;
db.Calendar = Calendar;
db.WorkInfo = WorkInfo;
db.WorkTag = WorkTag;

// 각 모델 init 메서드 호출 -> 테이블과 모델 연결
User.init(sequelize);
Calendar.init(sequelize);
WorkInfo.init(sequelize);
WorkTag.init(sequelize);

// 다른 테이블과의 관계 연결
User.associate(db);
Calendar.associate(db);
WorkInfo.associate(db);
WorkTag.associate(db);

module.exports = db;
