import * as Types from "./types"


export const RequestClear=():Types.RequestClearActionType=>{
    return{
        type:Types.RequestClear
    }
}


export const getCreateRequest = (data:Types.IFileAttachment):Types.CreateRequestActionType=>{
    return {
        type:Types.CreateRequest,
        payload:data
    }
}

export const getCreateSuccess = (data:Types.IState):Types.CreateSuccessActionType=>{
    return {
        type:Types.CreateSuccess,
        payload:data
    }
}

export const getFetchRequest = (data:number):Types.FetchActionType=>{
    return {
        type:Types.FetchRequest,
        payload:data
    }
}

export const getFetchIncompleteSuccess = (data:Types.IState):Types.FetchSuccessActionType=>{
    return {
        type:Types.FetchSuccess,
        payload:data
    }
}

export const getUpdateRequest = (data:Types.IState):Types.UpdateActionType=>{
    return {
        type:Types.UpdateRequest,
        payload:data
    }
}

export const getUpdateSuccess = (data:Types.IState):Types.UpdateSuccessActionType=>{
    return {
        type:Types.UpdateSuccess,
        payload:data
    }
}