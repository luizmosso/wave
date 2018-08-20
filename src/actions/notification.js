const IS_ERROR = "IS_ERROR";
const IS_SUCCESS = "IS_SUCCESS";
const MESSAGE = "MESSAGE";
const NOTIFY = "NOTIFY"

export function setError(isError) {
  return {
    type: IS_ERROR,
    isError
  };
}

export function setSuccess(isSuccess) {
  return {
    type: IS_SUCCESS,
    isSuccess
  };
}

export function setMessage(message) {
  return {
    type: MESSAGE,
    message
  };
}

export function setNotify(notify) {
  return {
    type: NOTIFY,
    notify
  }
}

export function notify(notify, type, message) {
  return dispatch => {
    if (notify) {
      if (type === "error") {
        dispatch(setError(true));
        dispatch(setSuccess(false));
        dispatch(setMessage(message));
      }
      else {
        dispatch(setSuccess(true));
        dispatch(setError(false))
        dispatch(setMessage(message));
      }
      dispatch(setNotify(true))
    }
    else {
      dispatch(setNotify(false))
    }
  };
}