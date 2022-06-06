import {GET_NATIONALITIES,GET_USERTYPES,GET_APPTYPES } from "./Urls";
import {assignToTypeArray} from "./utils/assignType";
import {Nationality,UserType,AppType} from "../types/lookUpTypes";
import {SelectOptions} from "../types/UIRelated"

export const getNationalities = async ():Promise<Nationality[]> =>{
    let response = await fetch(GET_NATIONALITIES, { 
        headers: {
          'Content-Type': 'application/json'
        }      
      });
      let data = await response.json();     
      let nationalities = new Array<Nationality>();
      nationalities = assignToTypeArray<Nationality>(data, new Nationality(),nationalities);
      return nationalities;
}

// export const getUserTypes = async ():Promise<UserType[]> =>{
//     let response = await fetch(GET_USERTYPES, { 
//         headers: {
//           'Content-Type': 'application/json'
//         }      
//       });
//       let data = await response.json();     
//       let userTypes = new Array<UserType>();
//       userTypes = assignToTypeArray<UserType>(data, new UserType(),userTypes);
//       return userTypes;
// }

export const getAppTypes = async ():Promise<SelectOptions[]> =>{
  let response = await fetch(GET_APPTYPES, { 
      headers: {
        'Content-Type': 'application/json'
      }      
    });
    let res:SelectOptions[] = await response.json();     
    return res;
}



export const getNations = async ():Promise<SelectOptions[]> =>{
  let response = await fetch(GET_NATIONALITIES, { 
      headers: {
        'Content-Type': 'application/json'
      }      
    });
    let res:SelectOptions[] = await response.json();     
    return res;
}

export const getUserTypes = async ():Promise<SelectOptions[]> =>{
  let response = await fetch(GET_USERTYPES, { 
      headers: {
        'Content-Type': 'application/json'
      }      
    });
    let res:SelectOptions[] = await response.json();     
    return res;
}