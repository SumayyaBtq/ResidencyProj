import { API_NonSapRegister } from "./Urls";
import {RegisterRequest} from "../types/registerRequest"

export const RegisterNonSapUser = async(registerInfo:RegisterRequest)=>
{
  console.log("IN RegisterNonSapUser" );
    let response = await fetch(API_NonSapRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...registerInfo
           })
      });
     let res = await response.json()
     return res;
}