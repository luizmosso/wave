const IS_ERROR = "IS_ERROR";
const IS_SUCCESS = "IS_SUCCESS";
const MESSAGE = "MESSAGE";
const NOTIFY = "NOTIFY"

const initialState = {
  notify: false,
  isError: false,
  isSuccess: null,
  message: null
};

export default function notification(state = initialState, action) {
  switch (action.type) {
    case IS_ERROR:
      return {
        ...state,
        isError: action.isError
      };

    case IS_SUCCESS:
      return {
        ...state,
        isSuccess: action.isSuccess
      };

    case MESSAGE:
      return {
        ...state,
        message: action.message
      };

    case NOTIFY:
      return {
        ...state,
        notify: action.notify
      };

    default:
      return state;
  }
}
