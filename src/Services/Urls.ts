// export const BASEURL = "http://localhost:25004";
export const BASEURL = "https://localhost:44367";
export const API_AUTHENTICATE = `${BASEURL}/Jwt/authenticate`;
export const API_NonSapRegister = `${BASEURL}/Jwt/register`;
export const CHANGE_PASSWORD = `${BASEURL}/Jwt/UpdatePassword`;
export const GET_NATIONALITIES = `${BASEURL}/api/LookUps/Nationality`; 
export const GET_USERTYPES = `${BASEURL}/api/LookUps/UserType`; 
export const GET_APPTYPES =  `${BASEURL}/api/LookUps/ApplicationTypes`;
export const NEWAPP_CREATE =`${BASEURL}/api/UserApplications`;
export const NEWAPP_GETINCOMPLETE =`${BASEURL}/api/UserApplications/GetActiveUserApplicationByUserID/`;
export const NEWAPP_UPDATE =`${BASEURL}/api/UserApplications/`;
export const PERSONAL_INFO_CREATE =`${BASEURL}/api/PersonalInformation`;
export const PERSONAL_INFO_FETCH_UPDATE = `${BASEURL}/api/PersonalInformation/`;
export const PASSPORT_INFO_CREATE =`${BASEURL}/api/PassportInformation`;
export const PASSPORT_INFO_FETCH_UPDATE = `${BASEURL}/api/PassportInformation/`;
export const ATTACHMENT = `${BASEURL}/api/AttachmentDocument`;
export const CHANGEPROFILE = `${BASEURL}/api/Users/changeProfile`;
export const APPLICATIONTYPES = `${BASEURL}/api/ApplicationTypes`;



