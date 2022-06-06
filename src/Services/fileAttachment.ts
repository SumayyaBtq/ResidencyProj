import {IState,IFileAttachment} from "../State/attachmentDocuments";
import {ATTACHMENT } from "../Services/Urls"

// const url="https://localhost:44367/api/AttachmentDocument";



export const createAttachemnt = async (data:IFileAttachment) => {
  
    console.log("in attachments service", {...data}); 

    var postData = new FormData()
    postData.append('ApprovedLetterForResidencyRenewal', data.ApprovedLetterForResidencyRenewal as File);
    postData.append('SalaryCertification', (data.SalaryCertification  as File));
    postData.append('CivilIdCopy', (data.CivilIdCopy as File));
    postData.append('PassportCopy', (data.PassportCopy  as File));
    postData.append('OtherRelatedDocuments', (data.OtherRelatedDocuments as File));
    postData.append("ApplicationNumber",data.ApplicationNumber?.toString() as string);
    postData.append("UserId",data.UserId?.toString() as string);

  
    try {
      let response = await fetch(ATTACHMENT, {
        method: 'POST',
        body: postData
      });
      if (!response.ok) {

       }
      let temp = await response.json();
      console.log("temp",temp);

    return temp;
    } catch (e) {
      console.log("NET error",e);
      return data

    }
  }

  export const fetchAttachemnt = async (appNum:number) => {
  
    console.log("in attachments service", appNum); 
    let res :IState ={};
    try {
      let urlf = `${ATTACHMENT}/${appNum}`;
      let response = await fetch(urlf, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      });
      
      if (!response.ok) {

       }
      let temp:IState = await response.json();
      console.log("from Fetch service",temp);
      

      return temp;
  
    } catch (e) {
      console.log("NET error incomp",e);
      return res
   
    }


  }

  export const updateAttachment = async (data:IFileAttachment) => {

      
    console.log("in attachments service", {...data}); 

     var postData = new FormData();
     if (data.ApprovedLetterForResidencyRenewal!==undefined)
     postData.append('ApprovedLetterForResidencyRenewal', data.ApprovedLetterForResidencyRenewal as File);
     if (data.SalaryCertification!==undefined)
     postData.append('SalaryCertification', (data.SalaryCertification  as File));
     if (data.CivilIdCopy!==undefined)
     postData.append('CivilIdCopy', (data.CivilIdCopy as File));
     if(data.PassportCopy)
     postData.append('PassportCopy', (data.PassportCopy  as File));
     if(data.OtherRelatedDocuments)
     postData.append('OtherRelatedDocuments', (data.OtherRelatedDocuments as File));
     postData.append("ApplicationNumber",data.ApplicationNumber?.toString() as string);
     postData.append("UserId",data.UserId?.toString() as string);
     postData.append("Id",data.id?.toString() as string);

    let res :IState ={};
    try {
      console.log("data",data);
      let urlf = `${ATTACHMENT}/${data.id}`;
      let response = await fetch(urlf, {
        method: 'PUT',
        body:postData

      });
      
      if (!response.ok) {

        }
      let temp:IState = await response.json();
      console.log("UPDATE Fetch service",temp);
      

      return temp;
  
    } catch (e) {
      console.log("NET error incomp",e);
      return res
   
    }
  } 