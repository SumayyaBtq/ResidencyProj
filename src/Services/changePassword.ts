
import { IChangePassword, IResponse } from "../types"
import { CHANGE_PASSWORD } from "./Urls";

export const updatePassword = async (data: IChangePassword): Promise<IResponse> => {
    let obj = {

        "userId": data.userId,
        "oldPassword": data.oldPassword,
        "newPassword": data.password
    }
    let rtnObj: IResponse = {

    };

    try {
        let response = await fetch(CHANGE_PASSWORD, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...obj
            })
        });
        if (!response.ok) {

        }
        rtnObj = await response.json();
        console.log("result", rtnObj);


    } catch (e) {
        rtnObj = {
            status: 1,
            message: "ErrorOccured",
            response: e,
            hasError: true
        }
        console.log("errorRes", rtnObj);
    }
    return rtnObj;
}