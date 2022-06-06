import * as Types from './types';


  const initialState: Types.IState = {
    id:undefined, 
    approvedLetterForResidencyRenewal:undefined,
    salaryCertification:undefined,
    civilIdCopy:undefined,
    passportCopy:undefined,
    otherRelatedDocuments:undefined,
    applicationNumber:undefined,
    userId:undefined,
    createdDate:undefined,
    updatedDate:undefined,
  }


  export function attachmentInfoReducer( state:Types.IState = initialState,
    action: Types.ActionsTypes):Types.IState{
      switch (action.type) {
        case Types.RequestClear:
      localStorage.setItem("attachmentInfo",JSON.stringify({...initialState}));

      return {
        ...initialState
      }

        case Types.CreateSuccess:
      localStorage.setItem("attachmentInfo", JSON.stringify({ ...action.payload }));
          
          return {
            ...action.payload,
          }
        case Types.FetchSuccess:
      localStorage.setItem("attachmentInfo", JSON.stringify({ ...action.payload }));

          return {
            ...action.payload,
          }
        case Types.UpdateSuccess:
      localStorage.setItem("attachmentInfo", JSON.stringify({ ...action.payload }));

          return {
            ...action.payload,
          }
        default:
          let localStorageData:any = localStorage.getItem('attachmentInfo');
          if (localStorageData) {
              localStorageData = JSON.parse(localStorageData);
              return {
                  ...localStorageData
              }
          }
          return state;
          return state
      }

  }

  export default attachmentInfoReducer;