import client from './client';

// 로그인
export const login = ({ email, password }) =>
  client.post('/api/user/login', { email, password });

// 회원가입
export const signup = ({ email, password }) =>
  client.post('/api/user/signup', { email, password });

// 로그인 상태 확인
export const check = () => client.get('/api/user/check');
