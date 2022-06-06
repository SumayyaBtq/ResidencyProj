import { UserInfo } from "../../types/userInfo";
import {IUserProfile} from '../../types'
export type {IUserProfile};
export type credentials={
    username: string, 
    password: string
}

export const LOGIN_REQUEST = 'LOGIN/LOGIN_REQUEST';
export interface login_request_action_type {
    type: typeof LOGIN_REQUEST
    payload: credentials
}

export const LOGIN_LOADING = 'LOGIN/LOGIN_LOADING';
export interface login_loading_action_type {
    type: typeof LOGIN_LOADING
  
}

export const LOGIN_SUCCESS = 'LOGIN/LOGIN_SUCCESS';
export interface login_success_action_type {
    type: typeof LOGIN_SUCCESS,
    payload: AuthState
}

export const LOGOUT = 'LOGOUT';
export interface logout_action_type {
    type: typeof LOGOUT,
}

export const PROFILECHANGE = 'PROFILECHANGE';
export interface profile_action_type {
    type: typeof PROFILECHANGE,
    payload:IUserProfile 
}

export interface AuthState {
    isLoading:boolean,
    isLoggedIn: boolean,
    jwtToken?:string,
    userInfo?:UserInfo,
    hasError?:Boolean,
    message?:string
  }

export type LoginActionTypes = login_request_action_type|
                               login_success_action_type|
                               login_loading_action_type|
                               profile_action_type|
                               logout_action_type;

