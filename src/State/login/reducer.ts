import {
  LoginActionTypes,
  AuthState,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGOUT,
  PROFILECHANGE
} from './types'
import { UserInfo } from "../../types/userInfo";
const initialState: AuthState = {
  isLoggedIn: false,
  jwtToken: undefined,
  userInfo: undefined,
  isLoading: true
}

export function loginReducer(
  state: AuthState = initialState,
  action: LoginActionTypes
): AuthState {

  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        isLoading: false,
        userInfo: action.payload.userInfo,
        jwtToken: action.payload.jwtToken,
        hasError: action.payload.hasError,
        message: action.payload.message

      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        jwtToken: undefined,
        userInfo: undefined,
        hasError: false,
        message: ""
      }
    case PROFILECHANGE:
      let temp = new UserInfo();
      temp = state.userInfo as UserInfo;
      temp.email = action.payload.email;
      temp.mobileNumber = action.payload.mobileNumber;
      temp.civilIdSerialNumber = action.payload.mobileNumber;
      let localData: any = localStorage.getItem('user');
      if (localData) {
        localData = JSON.parse(localData);
        localData.response.userInfo = temp;
      }
      localStorage.setItem("user", JSON.stringify(localData));
      return {
        ...state,
        userInfo: temp
      }


    default:
      let localStorageData: any = localStorage.getItem('user');
      if (localStorageData) {
        localStorageData = JSON.parse(localStorageData);
        return {
          ...state,
          isLoggedIn: true,
          isLoading: false,
          jwtToken: localStorageData.response.jwtToken,
          userInfo: localStorageData.response.userInfo,
          hasError: localStorageData.hasError,
          message: localStorageData.message
        }
      }

      return state;

  }
}

export default loginReducer;