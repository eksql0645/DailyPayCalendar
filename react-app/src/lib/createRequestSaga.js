import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

// 요청에 대한 액션 타입 정의
export function createRequestActionTypes(type) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
}

// redux-saga를 이용하여 API요청에 대한 generator 함수 생성
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  // 제너레이터 함수 - action을 파라미터로 받으면 action 정보 조회 가능
  return function* (action) {
    // 로딩 시작 - START_LOADING action 디스패치 state: true
    yield put(startLoading(type));
    try {
      // promise를 반환하는 함수를 호출, 기다린다.
      // 첫번째 파라미터는 함수, 나머지는 해당 함수에 넣을 인수이다.
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    // 로딩 끝 - FINISH_LOADING action 디스패치 state: false
    yield put(finishLoading(type));
  };
}
