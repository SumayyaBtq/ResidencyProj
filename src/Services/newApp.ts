import {NEWAPP_CREATE,NEWAPP_GETINCOMPLETE,NEWAPP_UPDATE } from "./Urls";
import {IState} from "../State/newApp";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../State/rootReducer' ;

export const createNewApp = async (data:IState): Promise<IState> => {
  let res: IState={} ;
    try {
      let response = await fetch(NEWAPP_CREATE, {
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
       res =
      {
        applicationDate: temp.applicationDate,
        applicationNumber: temp.applicationNumber,
        applicationStatusId: temp.applicationStatusId,
        applicationTypeId: temp.applicationTypeId,
        isActive: temp.isActive,
        remark: temp.remark,
        stepNo: temp.stepNo,
        userId: temp.userId
      }

      return res;
  
    } catch (e) {
      console.log("NET error");
      return data
    //   return { ...authenticateResponse, status: 500, message: e, hasError: true }
    }
  }



  export const fetchIncompleteNewApp = async (userId:number): Promise<IState> => {

    
    let res :IState ={};
    try {
      let url = `${NEWAPP_GETINCOMPLETE}${userId}`;
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      });
      
      console.log("response",response);
      if (!response.ok) {
        // return { ...authenticateResponse, status: response.status, message: response.statusText, hasError: true }
      }
      let temp:IState = await response.json();
       res = 
              {
               applicationDate:temp.applicationDate,
               applicationNumber : temp.applicationNumber,
               applicationStatusId:temp.applicationStatusId,
               applicationTypeId:temp.applicationTypeId,
               isActive:temp.isActive,
               remark:temp.remark,
               stepNo:temp.stepNo,
               userId:temp.userId
            }
      return res;
  
    } catch (e) {
      console.log("NET error incomp",e);
      return res
   
    }
  }  

  export const getAppRequest = async (data:number): Promise<IState> => {

    
    let res :IState ={};
    try {
      let url = `${NEWAPP_UPDATE}${data}`;
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
       res = 
              {
               applicationDate:temp.applicationDate,
               applicationNumber : temp.applicationNumber,
               applicationStatusId:temp.applicationStatusId,
               applicationTypeId:temp.applicationTypeId,
               isActive:temp.isActive,
               remark:temp.remark,
               stepNo:temp.stepNo,
               userId:temp.userId
            }
      return res;
  
    } catch (e) {
      console.log("NET error incomp",e);
      return res
   
    }
  }  

  export const updateNewApp = async (data:IState): Promise<IState> => {

    console.log("UpdatNewApp in service userId",data);
    
    let res :IState ={};
    try {
      let url = `${NEWAPP_UPDATE}${data.applicationNumber}`;
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
       res = 
              {
               applicationDate:temp.applicationDate,
               applicationNumber : temp.applicationNumber,
               applicationStatusId:temp.applicationStatusId,
               applicationTypeId:temp.applicationTypeId,
               isActive:temp.isActive,
               remark:temp.remark,
               stepNo:temp.stepNo,
               userId:temp.userId
            }
    console.log("in UpdateNewApp service",res,temp)
      return res;
  
    } catch (e) {
      console.log("NET error UpdateNewApp",e);
      return res
   
    }
  }  

  export const updateNewAppStatus = async (data:any): Promise<any> => {

    
    let res :IState ={};
    try {
      let url = `${NEWAPP_UPDATE}${data.userId}/${data.applicationNumber}/${data.statusId}?Remark=N'${data.remark}'`;
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
      let temp:any = await response.json();
     
    console.log("in UpdateNewApp service",res,temp)
      return temp;
  
    } catch (e) {
      console.log("NET error UpdateNewApp",e);
      return res
   
    }
  } 


