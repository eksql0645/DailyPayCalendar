import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

// 로그인, 회원가입 form 상태관리를 위한 action
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// API 요청을 위한 action 타입 설정
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] =
  createRequestActionTypes('auth/SIGNUP');

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');

// form 상태관리 action
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);

// form 초기화 action
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

// 회원가입 요청 action
export const signup = createAction(SIGNUP, ({ email, password }) => ({
  email,
  password,
}));

// 로그인 요청 action
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));

// 사가(generator 함수) 생성
const signupSaga = createRequestSaga(SIGNUP, authAPI.signup);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(SIGNUP, signupSaga);
  yield takeLatest(LOGIN, loginSaga);
}

// form 초기값
const initialState = {
  signup: {
    email: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    email: '',
    password: '',
  },
  auth: null,
  authError: null,
};

// form 상태관리 reducer
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null, // form 전환 시 회원 인증 에러 초기화
    }),
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);
export default auth;
