
export interface IRequests
{
    applicationNumber?: number,
    userId?: number,
    applicationStatusId?: number,
    applicationStatusName?:string,
    applicationTypeId?: number,
    applicationTypeName?:string,
    applicationDate?: Date,
    isActive?: boolean,
    remark?: string,
    stepNo?: number,
    stepName?:string,
    civilId?:number,
    userName?:string
}

export interface IRequestsState
{
    IRequests:IRequests[],
    SelectedRequest:IRequests,
    hasError:boolean,
    message:string
}

export const CreateRequest="MANAGEREQUESTS_CREATE";
export const CreateRequestAdmin="MANAGEREQUESTS_ADMIN_CREATE";
export const CreateRequestAdminOutwardApplications="MANAGEREQUESTS_ADMIN_OUTWARD_CREATE";
export const CreateRequestAdminInwardSearch="MANAGEREQUESTS_ADMIN_INWARD_SEARCH_CREATE";
export const DeleteRequest="MANAGEREQUESTS_DELETE";
export const RequestSuccess="MANAGEREQUESTS_SUCCESS";
export const RequestError="MANAGEREQUESTS_ERROR";
export const SelectedRequest="MANAGEREQUESTS_SELECTEDREQUEST";
export const ApplicationStatusRequst = 'MANAGEREQUESTS/APPLICATIONSTATUSUPDATEREQUEST';
export const ApplicationStatus = 'MANAGEREQUESTS/APPLICATIONSTATUSUPDATE';
export const ClearRequst = 'MANAGEREQUESTS/CLEARREQUEST';
export const Clear = 'MANAGEREQUESTS/CLEAR';
export const ClearMeassageError = 'MANAGEREQUESTS/CLEARMESSAGEERROR';




export interface ClearMeassageErrorActionType {
    type: typeof ClearMeassageError
}



export interface ClearRequstActionType {
    type: typeof ClearRequst
}

export interface ClearActionType {
    type: typeof Clear
}


export interface IApplicationStatusUpdateRequst {
    applicationNumber:number,
    userId:number,
    statusId:number,
    remark?:string
}



export interface ApplicationStatusUpdateRequstType {
    type: typeof ApplicationStatusRequst,
    PAYLOAD:IApplicationStatusUpdateRequst

}

export interface ApplicationStatusUpdateType {
    type: typeof ApplicationStatus,
    payload:any
}

export  interface ManageRequestsCREATE
{
    type: typeof CreateRequest;
    payload:any
   
}export  interface ManageRequestsCREATEAdmin
{
    type: typeof CreateRequestAdmin;
   
}
export  interface ManageRequestsAdminOutwardApplications
{
    type: typeof CreateRequestAdminOutwardApplications;
   
}
export  interface ManageRequestsAdminInwardSearch
{
    type: typeof CreateRequestAdminInwardSearch;
   
}

export  interface ManageRequestsSuccess
{
    type: typeof RequestSuccess;
    payload: IRequests[]
}

export  interface ManageRequestsError
{
    type: typeof RequestError;
    payload: any
}


export  interface ManageSelectedRequest
{
    type: typeof SelectedRequest;
    payload: IRequests
}


export  interface ManageDeleteRequest
{
    type: typeof DeleteRequest;
    payload: any
}


export type ManageRequestsActionsTypes =ManageRequestsError|ManageRequestsSuccess
|ManageRequestsCREATE|ManageSelectedRequest|ApplicationStatusUpdateRequstType|ApplicationStatusUpdateType|ClearRequstActionType|ClearActionType|ClearMeassageErrorActionType;