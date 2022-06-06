import * as Types from './types';


const initialState: Types.IState = {
  id: undefined,
  employeeNumber: undefined,
  employeeNameArabic: undefined,
  employeeNameEnglish: undefined,
  birthDate: undefined,
  mobileNumber: undefined,
  department: undefined,
  jobTitle: undefined,
  hireDate: undefined,
  applicationNumber: undefined,
  userId: undefined,
  createdDate: undefined,
  updatedDate: undefined
}


export function personalInfoReducer(state: Types.IState = initialState,
  action: Types.NewAppActionsTypes): Types.IState {
  switch (action.type) {


    case Types.CreateSuccess:
      
      localStorage.setItem("personalInfo", JSON.stringify({ ...action.payload }));
      return {
        ...action.payload,
      }
    case Types.FetchSuccess:
      localStorage.setItem("personalInfo", JSON.stringify({ ...action.payload }));

      return {
        ...action.payload,
      }
    case Types.UpdateSuccess:
      localStorage.setItem("personalInfo", JSON.stringify({ ...action.payload }));

      return {
        ...action.payload,
      }
      
    case Types.RequestClear:
      localStorage.setItem("personalInfo",JSON.stringify({...initialState}));
      
      return {
        ...initialState
      }
    default:
      let localStorageData:any = localStorage.getItem('personalInfo');
            if (localStorageData) {
                localStorageData = JSON.parse(localStorageData);
                return {
                    ...localStorageData
                }
            }
            return state;
     
  }

}

export default personalInfoReducer;