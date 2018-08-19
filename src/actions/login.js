import { notify } from '../actions/notification';

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const SET_USER_DATA = "SET_USER_DATA";

export function setLoginSuccess(isLoginSuccess) {
  return {
    type: LOGIN_SUCCESS,
    isLoginSuccess
  };
}

export function setUserData(user) {
  return {
    type: SET_USER_DATA,
    user
  };
}

export function doLogin(email, pwd) {
  return dispatch => {
    const URL = `${process.env.REACT_APP_API_URL}/api/usuario/login`;
    const HEADER = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    });

    let dados = { email, pwd };
    fetch(URL, { method: "POST", headers: HEADER, body: JSON.stringify(dados) })
      .then(response => {        
        if (response.status === 204)
          throw new Error(response.statusText);
        else
          return response.json()
      })
      .then(usuario => {
        if (usuario.error)
          throw new Error(usuario.error);

        localStorage.setItem("userData", JSON.stringify(usuario));
        dispatch(setLoginSuccess(true));
        dispatch(setUserData(usuario));
      })
      .catch(err => {
        dispatch(setLoginSuccess(false));
        dispatch(notify(true, "error", err));
      });
  };
}
