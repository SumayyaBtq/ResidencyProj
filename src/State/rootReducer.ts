import { combineReducers } from "redux"; 

import loginReducer from "./login" ;
import lookUpReducer from "./lookUps";
import newAppReducer from "./newApp";
import personalInfoReducer  from "./personalInfo";
import passportInfoReducer from "./passportInfo";
import ManageRequestsReducer from "./ManageRequests"
import  attachmentInfoReducer from "./attachmentDocuments"

export const rootReducer = combineReducers({
    login: loginReducer,
    lookUp:lookUpReducer,
    newApp:newAppReducer,
    personalInfo:personalInfoReducer,
    passportInfo:passportInfoReducer,
    manageRequest:ManageRequestsReducer,
    attachmentInfo:attachmentInfoReducer

  });

  export type RootState = ReturnType<typeof rootReducer>

