import * as Types from './types';


  const initialState: Types.IState = {
    id:undefined,  
    civilID:undefined,  
    nationalityId:undefined,
    passportNumber:undefined,
    issueCountry:undefined,
    issueDate:undefined,
    expiryDate:undefined,
    mobileNumber:undefined,  
    address:undefined,
    residencyExpiryDate:undefined,
    applicationNumber:undefined,    
    userId:undefined,    
    createdDate:undefined, 
    updatedDate:undefined
  }


  export function passportInfoReducer( state:Types.IState = initialState,
    action: Types.ActionsTypes):Types.IState{
      switch (action.type) {

    case Types.RequestClear:
      localStorage.setItem("passportInfo",JSON.stringify({...initialState}));
      return {
        ...initialState
      }
        case Types.CreateSuccess:
        localStorage.setItem("passportInfo", JSON.stringify({ ...action.payload }));
          return {
            ...action.payload,
          }
        case Types.FetchSuccess:
          localStorage.setItem("passportInfo", JSON.stringify({ ...action.payload }));
        
        return {
            ...action.payload,
          }
        case Types.UpdateSuccess:
          localStorage.setItem("passportInfo", JSON.stringify({ ...action.payload }));
        
        return {
            ...action.payload,
          }
        default:
          let localStorageData:any = localStorage.getItem('passportInfo');
          if (localStorageData) {
              localStorageData = JSON.parse(localStorageData);
              return {
                  ...localStorageData
              }
          }
          return state;

      }

  }

  export default passportInfoReducer;