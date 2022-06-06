import * as Types from './types';


  const initialState: Types.IStateApp = {IState: {
   applicationDate:undefined,
   applicationStatusId:undefined,
   applicationNumber:undefined,
   applicationTypeId:undefined,
   isActive:undefined,
   remark:undefined,
   stepNo:undefined,
   userId:undefined
  },
  isloading:false
}


  export function newAppReducer( state:Types.IStateApp = initialState,
    action: Types.NewAppActionsTypes):Types.IStateApp{
    switch (action.type) {


      case Types.Clear:
        localStorage.setItem("newApp",JSON.stringify({...initialState}));

        return {
          ...initialState
        }
      case Types.Loading:
        localStorage.setItem("newApp", JSON.stringify({ ...state,isloading:action.payload }));

        return {
          ...state,
         isloading:action.payload
        }
      case Types.CreateSuccess:
        localStorage.setItem("newApp", JSON.stringify({ ...state,IState:action.payload ,isloading:false }));
      return {
          ...state,
         IState:  action.payload,
         isloading:false
        }
      case Types.IncompleteFetchSuccess:
        localStorage.setItem("newApp", JSON.stringify({ ...state,IState:action.payload ,isloading:false }));

        return {
          ...state,
         IState:  action.payload,
         isloading:false
        }
      case Types.UpdateSuccess:
        localStorage.setItem("newApp", JSON.stringify({ ...state,IState:action.payload ,isloading:false }));
        return {
          ...state,
         IState:  action.payload,
         isloading:false
        }
      default:
         let localStorageData:any = localStorage.getItem('newApp');
            if (localStorageData) {
                localStorageData = JSON.parse(localStorageData);
                return {
                    ...state,
                    IState:localStorageData.IState,
                    isloading:localStorageData.isloading,
                }
            }
            return state;
        return state
    }

  }

  export default newAppReducer;