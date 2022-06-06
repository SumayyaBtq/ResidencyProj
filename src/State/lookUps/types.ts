import {SelectOptions} from "../../types/UIRelated"

export const Loading ="LOADING";
export interface loading_action_type {
    type: typeof Loading,
    payload:boolean   
}

export const AppTypes_request = 'LOOKUP/APPTYPE_REQUEST';
export interface appTypes_request_action_type {
    type: typeof AppTypes_request   
}

export const AppTypes_Success = 'LOOKUP/APPTYPE_SUCCESS';
export interface appTypes_Success__action_type {
    type: typeof AppTypes_Success,
    payload:SelectOptions[]
}

export const Nationalities_request = 'LOOKUP/NATIONALITIES_REQUEST';
export interface nationalities_request_action_type {
    type: typeof Nationalities_request   
}

export const Nationalities_Success = 'LOOKUP/NATIONALITIES_SUCCESS';
export interface nationalities_Success__action_type {
    type: typeof Nationalities_Success
    payload:SelectOptions[]
}

export const UserTypes_request = 'LOOKUP/USERTYPES_REQUEST';
export interface UserTypes_request_action_type {
    type: typeof UserTypes_request   
}

export const UserTypes_Success = 'LOOKUP/USERTYPES_SUCCESS';
export interface UserTypes_Success__action_type {
    type: typeof UserTypes_Success
    payload:SelectOptions[]
}

export interface ILookUpState {
    IsLoading:boolean,
    AppTypes?:SelectOptions[],
    Nationalities?:SelectOptions[],
    UserTypes?:SelectOptions[]   
}

export type LoadingActionType = loading_action_type;
export type AppTypesActionsTypes = appTypes_request_action_type|appTypes_Success__action_type;
export type NationalitiesActionsTypes = nationalities_request_action_type|nationalities_Success__action_type;
export type UserTypesActionsTypes = UserTypes_request_action_type|UserTypes_Success__action_type;

export type LookUpActionTypes = LoadingActionType|AppTypesActionsTypes|
                                NationalitiesActionsTypes|UserTypesActionsTypes;