

import {PASSPORT_INFO_CREATE,PASSPORT_INFO_FETCH_UPDATE } from "./Urls";
import {IState} from "../State/passportInfo";

export const createPassportInfo = async (data:IState): Promise<IState> => {
  
    console.log("in create peassport service", {...data}); 
  
    try {
      let response = await fetch(PASSPORT_INFO_CREATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         ...data
        })
      });
      if (!response.ok) {
        // return { ...authenticateResponse, status: response.status, message: response.statusText, hasError: true }
      }
      let temp:IState = await response.json();

    return temp;
    } catch (e) {
      console.log("NET error",e);
      return data
    //   return { ...authenticateResponse, status: 500, message: e, hasError: true }
    }
  }

  export const fetchPassportInfo = async (appNum:number): Promise<IState> => {
    let res :IState ={};
    try {
      let url = `${PASSPORT_INFO_FETCH_UPDATE}${appNum}`;
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      });
      
      if (!response.ok) {
        // return { ...authenticateResponse, status: response.status, message: response.statusText, hasError: true }
      }
      let temp:IState = await response.json();
      console.log("from Fetch service",temp);
      

      return temp;
  
    } catch (e) {
      console.log("NET error incomp",e);
      return res
   
    }
  }  

  export const updatePassportInfo = async (data:IState): Promise<IState> => {
    let res :IState ={};
    try {
      let url = `${PASSPORT_INFO_FETCH_UPDATE}${data.id}`;
      let response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data
         })

      });
      
      if (!response.ok) {
        // return { ...authenticateResponse, status: response.status, message: response.statusText, hasError: true }
      }
      let temp:IState = await response.json();
      console.log("UPDATE Fetch service",temp);
      

      return temp;
  
    } catch (e) {
      console.log("NET error incomp",e);
      return res
   
    }
  }  