import {IPassportInfo} from "../../types";

export interface IState extends IPassportInfo{

}

export const RequestClear = 'PASSPORTINFO/REQUESTCLEAR';
export interface RequestClearActionType {
    type: typeof RequestClear
}




export const CreateRequest = 'PASSPORTINFO/CREATE';
export interface CreateRequestActionType {
    type: typeof CreateRequest,
    payload:IState
}

export const CreateSuccess = 'PASSPORTINFO/CREATE_SUCCESS';
export interface CreateSuccessActionType {
    type: typeof CreateSuccess,
    payload:IState
}

export const FetchRequest = 'PASSPORTINFO/FETCH';
export interface FetchActionType {
    type: typeof FetchRequest,
    payload:number
}

export const FetchSuccess = 'PASSPORTINFO/FETCH_SUCCESS';
export interface FetchSuccessActionType {
    type: typeof FetchSuccess,
    payload:IState
}

export const UpdateRequest = 'PASSPORTINFO/UPDATE';
export interface UpdateActionType {
    type: typeof UpdateRequest,
    payload:IState
}

export const UpdateSuccess = 'PASSPORTINFO/UPDATE_SUCCESS';
export interface UpdateSuccessActionType {
    type: typeof UpdateSuccess,
    payload:IState
}


export type ActionsTypes = CreateRequestActionType | CreateSuccessActionType |
                                    FetchActionType | FetchSuccessActionType |
                                    UpdateActionType | UpdateSuccessActionType|RequestClearActionType;



