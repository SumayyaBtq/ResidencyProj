import {IFileAttachment,IAttachment} from "../../types";

export interface IState extends IAttachment{

}

export type {
    IFileAttachment
} ;


export const RequestClear = 'ATTACHMENT/REQUESTCLEAR';
export interface RequestClearActionType {
    type: typeof RequestClear
}


export const CreateRequest = 'ATTACHMENT/CREATE';
export interface CreateRequestActionType {
    type: typeof CreateRequest,
    payload:IFileAttachment
}

export const CreateSuccess = 'ATTACHMENT/CREATE_SUCCESS';
export interface CreateSuccessActionType {
    type: typeof CreateSuccess,
    payload:IState
}

export const FetchRequest = 'ATTACHMENT/FETCH';
export interface FetchActionType {
    type: typeof FetchRequest,
    payload:number
}

export const FetchSuccess = 'ATTACHMENT/FETCH_SUCCESS';
export interface FetchSuccessActionType {
    type: typeof FetchSuccess,
    payload:IState
}

export const UpdateRequest = 'ATTACHMENT/UPDATE';
export interface UpdateActionType {
    type: typeof UpdateRequest,
    payload:IState
}

export const UpdateSuccess = 'ATTACHMENT/UPDATE_SUCCESS';
export interface UpdateSuccessActionType {
    type: typeof UpdateSuccess,
    payload:IState
}


export type ActionsTypes = CreateRequestActionType | CreateSuccessActionType |
                                    FetchActionType | FetchSuccessActionType |
                                    UpdateActionType | UpdateSuccessActionType|
                                    RequestClearActionType;



