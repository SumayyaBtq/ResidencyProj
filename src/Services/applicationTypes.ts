
import {  IResponse,IApplicationType } from "../types"
import { APPLICATIONTYPES } from "./Urls";

export const getApplicationTypes= async (): Promise<IResponse<IApplicationType[]>> => {
    let rtnObj: IResponse<IApplicationType[]>;
    try {
        let response = await fetch(APPLICATIONTYPES, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        rtnObj = await response.json();
    } catch (e) {
        rtnObj = {
            status: 1,
            message: "ErrorOccured",
            response: e,
            hasError: true
        }
    }
    return rtnObj;
}

export const updateIsActive= async (id:number,isActive:boolean): Promise<IResponse<IApplicationType>> => {
    let rtnObj: IResponse<IApplicationType>;
    try {
        let response = await fetch(`${APPLICATIONTYPES}/updateIsActive/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(isActive)
        });
        rtnObj = await response.json();
    } catch (e) {
        rtnObj = {
            status: 1,
            message: "ErrorOccured",
            response: e,
            hasError: true
        }
    }
    return rtnObj;
}