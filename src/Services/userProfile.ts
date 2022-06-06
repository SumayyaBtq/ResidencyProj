import {IUserProfile} from "../types/userProfile";
import {CHANGEPROFILE} from "../Services/Urls"

export const updateProfile = async (data:IUserProfile):Promise<any> => {

    try {
      let url = `${CHANGEPROFILE}`;
      let response = await fetch(url, {
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
      let obj = response.json();
     return obj;
  
    } catch (e) {
      console.log("NET error incomp",e);
      
      return null;
   
    }
  }  