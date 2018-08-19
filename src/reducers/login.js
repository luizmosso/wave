const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  isLoginSuccess: false,
  user: {}
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess
      };

    case SET_USER_DATA:
      return {
        ...state,
        user: action.user
      };    

    default:
      return state;
  }
}
