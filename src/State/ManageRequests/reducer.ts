import * as Types from "./types";


const initialState:Types.IRequestsState={
    IRequests:[],
    SelectedRequest:{
         applicationNumber:undefined,
         applicationDate:undefined,
         applicationStatusId:undefined,
         applicationStatusName:undefined,
         applicationTypeId:undefined,
         applicationTypeName:undefined,
         isActive:undefined,
         remark:undefined,
         stepName:undefined,
         stepNo:undefined,
         userId:undefined,
         userName:undefined,
         civilId:undefined
    },
    message:"",
    hasError:false
    
}

   
 export  function ManageRequestsReducer(state:Types.IRequestsState=initialState,actions:Types.ManageRequestsActionsTypes):Types.IRequestsState
{
         switch (actions.type) {
          
          case Types.ClearMeassageError:
            localStorage.setItem("IRequestsState", JSON.stringify({ ...state,message:"",hasError:false}));
            return {
              ...state,
              message:"",
              hasError:false
            }
          case Types.Clear:

        localStorage.removeItem("IRequestsState");
           return {
                ...initialState
                  }
           
            case Types.ApplicationStatus:
            localStorage.setItem("IRequestsState", JSON.stringify({ ...state,message:actions.payload.message,hasError:actions.payload.hasError}));
            return {
              ...state,
              message:actions.payload.message,
              hasError:actions.payload.hasError
            }
                 case Types.RequestSuccess:
                    localStorage.removeItem("IRequestsState");
                    localStorage.setItem("IRequestsState", JSON.stringify({ ...state,IRequests:actions.payload ,SelectedRequest:initialState.SelectedRequest }));
                  return{
                    ...state,
                      IRequests:actions.payload,
                     SelectedRequest:initialState.SelectedRequest
                  }
                
         
             default:
                let localStorageData:any = localStorage.getItem('IRequestsState');
                if (localStorageData) {
                    localStorageData = JSON.parse(localStorageData);
                    return {
                        ...state,
                        IRequests:localStorageData.IRequests,
                        SelectedRequest:localStorageData.SelectedRequest
                    }
                }
                return state

         }




}



export default ManageRequestsReducer;