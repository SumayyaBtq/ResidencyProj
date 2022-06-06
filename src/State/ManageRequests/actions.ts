import * as ManageRequestsTypes from "./types";





export const ClearMeassageError = ():ManageRequestsTypes.ClearMeassageErrorActionType=>{
    return {
        type:ManageRequestsTypes.ClearMeassageError
    }
}


export const RequestClearRequest = ():ManageRequestsTypes.ClearRequstActionType=>{
    return {
        type:ManageRequestsTypes.ClearRequst
    }
}

export const ClearRequest = ():ManageRequestsTypes.ClearActionType=>{
    return {
        type:ManageRequestsTypes.Clear
    }
}


export const ApplicationStatusUpdateRequst = (data:ManageRequestsTypes.IApplicationStatusUpdateRequst):ManageRequestsTypes.ApplicationStatusUpdateRequstType=>{
    return {
        type:ManageRequestsTypes.ApplicationStatusRequst,
        PAYLOAD:data
    }
}

export const ApplicationStatusUpdate = (data:any):ManageRequestsTypes.ApplicationStatusUpdateType=>{
    return {
        type:ManageRequestsTypes.ApplicationStatus,
            payload:data
    }
}


export const CreateRequest=(data:any):ManageRequestsTypes.ManageRequestsCREATE=>{
    return {
        type:ManageRequestsTypes.CreateRequest,
        payload:data
    }

}
export const CreateRequestAdmin=():ManageRequestsTypes.ManageRequestsCREATEAdmin=>{
    return {
        type:ManageRequestsTypes.CreateRequestAdmin
    }

}
export const CreateRequestAdminOutwardApplications=():ManageRequestsTypes.ManageRequestsAdminOutwardApplications=>{
    return {
        type:ManageRequestsTypes.CreateRequestAdminOutwardApplications
    }

}
export const CreateRequestAdminInwardSearch=():ManageRequestsTypes.ManageRequestsAdminInwardSearch=>{
    return {
        type:ManageRequestsTypes.CreateRequestAdminInwardSearch
    }

}
export const RequestSuccess=(data:ManageRequestsTypes.IRequests[]):ManageRequestsTypes.ManageRequestsSuccess=>{
    return {
        type:ManageRequestsTypes.RequestSuccess,
        payload:data
    }

}

export const RequestError=(data:any):ManageRequestsTypes.ManageRequestsError=>{
    return {
        type:ManageRequestsTypes.RequestError,
        payload:data
    }

}
export const SelectedRequest=(data:ManageRequestsTypes.IRequests):ManageRequestsTypes.ManageSelectedRequest=>{
    return {
        type:ManageRequestsTypes.SelectedRequest,
        payload:data
    }

}

export const DeleteRequest=(data:ManageRequestsTypes.IRequests):ManageRequestsTypes.ManageDeleteRequest=>{
    return {
        type:ManageRequestsTypes.DeleteRequest,
        payload:data
    }

}