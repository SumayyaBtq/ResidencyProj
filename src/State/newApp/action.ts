import * as NewAppTypes from "./types"

export const getCreateRequest = (data:NewAppTypes.IState):NewAppTypes.CreateRequestActionType=>{
    return {
        type:NewAppTypes.CreateRequest,
        payload:data
    }
}


export const RequestClearRequest = ():NewAppTypes.ClearRequstActionType=>{
    return {
        type:NewAppTypes.ClearRequst
    }
}

export const ClearRequest = ():NewAppTypes.ClearActionType=>{
    return {
        type:NewAppTypes.Clear
    }
}

export const RequestloadingRequest = (data : boolean):NewAppTypes.RequestLoadingActionType=>{
    return {
        type:NewAppTypes.RequestLoading,
        payload:data
    }
}

export const loadingRequest = (data : boolean):NewAppTypes.LoadingActionType=>{
    return {
        type:NewAppTypes.Loading,
        payload:data
    }
}
export const getUserApplicationsByApplicationNumber = (data:number):NewAppTypes.GetRequestActionType=>{
    return {
        type:NewAppTypes.GetRequest,
        payload:data
    }
}

export const getCreateSuccess = (data:NewAppTypes.IState):NewAppTypes.CreateSuccessActionType=>{
    return {
        type:NewAppTypes.CreateSuccess,
        payload:data
    }
}

export const getFetchIncompleteRequest = (userId:number):NewAppTypes.FetchIncompleteActionType=>{
    return {
        type:NewAppTypes.IncompleteFetchRequest,
        payload:userId
    }
}

export const getFetchIncompleteSuccess = (data:NewAppTypes.IState):NewAppTypes.IncompleteFetchSuccessActionType=>{
    return {
        type:NewAppTypes.IncompleteFetchSuccess,
        payload:data
    }
}

export const getUpdateRequest = (data:NewAppTypes.IState):NewAppTypes.UpdateActionType=>{
    return {
        type:NewAppTypes.UpdateRequest,
        payload:data
    }
}

export const getUpdateSuccess = (data:NewAppTypes.IState):NewAppTypes.UpdateSuccessActionType=>{
    return {
        type:NewAppTypes.UpdateSuccess,
        payload:data
    }
}

