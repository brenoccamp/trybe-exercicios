import { REQUEST_API, COMPLETED_REQUEST, FAILED_REQUEST, } from '../actions/index';

const INITIAL_STATE = {
  loading: false,
  responseAPI: {
    data: {
      children: [
      { data: {
        title: '',
      }}
    ]
  }
  },
  error: false,
};

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      loading: true,
    };
  case COMPLETED_REQUEST:
    return {
      loading: false,
      responseAPI: action.json
    }
  case FAILED_REQUEST:
    return {
      ...state,
      loading: false,
      error: action.error,
    }
  default:
    return state;
  }
};

export default apiReducer;
