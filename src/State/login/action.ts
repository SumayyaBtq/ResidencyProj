import * as loginActions from "./types"


export const getloginRequest = (Credentials:loginActions.credentials):loginActions.LoginActionTypes=>{
    return {
        type:loginActions.LOGIN_REQUEST,
        payload:Credentials
    }
}
export const getloginRequestLoading = ():loginActions.login_loading_action_type=>{
    return {
        type:loginActions.LOGIN_LOADING,
            }
}

export const getloginSuccess = (state:loginActions.AuthState):loginActions.LoginActionTypes=>{
    return {
        type:loginActions.LOGIN_SUCCESS,
        payload:state
    }
}

export const getllogout = ():loginActions.logout_action_type=>{
    return {
        type:loginActions.LOGOUT,
    }
}
export const changeProfile = (data:loginActions.IUserProfile):loginActions.profile_action_type=>{
    return {
        type:loginActions.PROFILECHANGE,
        payload:data
    }
}