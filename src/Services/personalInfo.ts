import {PERSONAL_INFO_CREATE,PERSONAL_INFO_FETCH_UPDATE } from "./Urls";
import {IState} from "../State/personalInfo";

export const createPersonalInfo = async (data:IState): Promise<IState> => {
  
    console.log("in create personal service", {...data}); 
  
    try {
      let response = await fetch(PERSONAL_INFO_CREATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         ...data
        })
      });
      if (!response.ok) {

      }
      let temp:IState = await response.json();

    return temp;
    } catch (e) {
      console.log("NET error");
      return data
    }
  }

  export const fetchPersonalInfo = async (appNum:number): Promise<IState> => {
    let res :IState ={};
    try {
      let url = `${PERSONAL_INFO_FETCH_UPDATE}${appNum}`;
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

  export const updatePersonalInfo = async (data:IState): Promise<IState> => {
    let res :IState ={};
    try {
      let url = `${PERSONAL_INFO_FETCH_UPDATE}${data.id}`;
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