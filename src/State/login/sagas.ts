import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import {  AuthenticateResponse} from "../../types/userInfo";
import * as actionTypes from "./types";
import {getloginSuccess} from "./action"
import {setLoading} from "../lookUps/action"; 
import {login} from "../../Services/login";




function* onLoginRequest({ type, payload  }: actionTypes.login_request_action_type) {
    const { username, password} = payload;
   
    try {
      yield put(setLoading(true));
      const  loginRes:AuthenticateResponse  = yield call(login, username, password);
         if(!loginRes.hasError)
     {
      loginRes.isLoggedIn = true;
      console.log("loginRes",loginRes);
      localStorage.setItem("user", JSON.stringify(loginRes));
      let tempState : actionTypes.AuthState ={
        isLoading:false,
        jwtToken:loginRes.response.jwtToken,
        userInfo:loginRes.response.userInfo,
        isLoggedIn:true,
        hasError:false,
        message:""
      }
      
      yield put(getloginSuccess(tempState));
    }
    else
      {
        loginRes.isLoggedIn = false;
        localStorage.setItem("user", JSON.stringify(loginRes));
        let tempState : actionTypes.AuthState ={
          isLoading:false,
          jwtToken:undefined,
          userInfo:undefined,
          isLoggedIn:false,
          hasError:true,
          message:loginRes.message
        }
      yield put(getloginSuccess(tempState));

      }
      yield put(setLoading(false));
       
    } catch (error) {
      yield put(setLoading(false));

    }
  }


function* watchOnLgin() {
    yield takeEvery(actionTypes.LOGIN_REQUEST, onLoginRequest);
  }

  export default function* loginSaga() {
    yield all([fork(watchOnLgin)]);
  }