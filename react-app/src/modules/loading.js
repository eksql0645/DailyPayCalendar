import { createAction, handleActions } from 'redux-actions';

// action type 설정
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// action creator 설정
export const finishLoading = createAction(
  FINISH_LOADING, // action Type
  (requestType) => requestType // payload 생성자: 요청을 위한 액션타입
);

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType
);

// 초기값 설정
const initialState = {};

// reducer 설정
const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);

export default loading;
