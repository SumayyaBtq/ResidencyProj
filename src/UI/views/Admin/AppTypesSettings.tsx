import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../State/rootReducer';
import { useHistory } from "react-router-dom";
import Switch from "react-switch";
import {getApplicationTypes,updateIsActive} from "../../../Services/applicationTypes";
import {ApplicationTypes as AppTypes} from "../../../types/Enums"
import {  toast } from 'react-toastify';
import { IResponse,IApplicationType } from '../../../types';



const AppTypesSettings = () => {

  const userData = useSelector<RootState, RootState["login"]>(state => state.login);
  const history = useHistory();
  let dispatch = useDispatch();

  const [chkResidencyRenewal, setchkResidencyRenewal] = useState(false);
  const [chkInformationTransfer, setchkInformationTransfer] = useState(false);
  const [chkUpdateData, setchkUpdateData] = useState(false);
  const [chkCancelResidency, setchkCancelResidency] = useState(false);
  const [chkResidencyExtension, setchkResidencyExtension] = useState(false);



  const onChange = async (checked: boolean, event: MouseEvent | React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>, id: string) => {
     switch (Number(id))
     {
       case AppTypes.ResidencyRenewal :
         {
          setchkResidencyRenewal(checked);
          break;
         }
         case AppTypes.InformationTransfer :
         {
          setchkInformationTransfer(checked);
          break;
         }
         case AppTypes.UpdateData :
         {
          setchkUpdateData(checked);
          break;
         }
         case AppTypes.CancelResidency :
         {
          setchkCancelResidency(checked);
          break;
         }
         case AppTypes.ResidencyExtension :
         {
          setchkResidencyExtension(checked);
          break;
         }
     }
     let res:IResponse<IApplicationType> = await updateIsActive(Number(id),checked); 
     if (res.hasError){
       toast.error(res.message);
     }
     else{
      toast.success(res.message);
     }
     
  }


  useEffect(() => {
    const getIntialVal = async ()=>{
      let res:IResponse<IApplicationType[]> = await getApplicationTypes();
      if (!res.hasError){
        res.response?.forEach((appType:IApplicationType)=>{
         switch (appType.applicationTypeId){
          
            case AppTypes.ResidencyRenewal :
              {
               setchkResidencyRenewal(appType.isActive as boolean);
               break;
              }
              case AppTypes.InformationTransfer :
              {
               setchkInformationTransfer(appType.isActive as boolean);
               break;
              }
              case AppTypes.UpdateData :
              {
               setchkUpdateData(appType.isActive as boolean);
               break;
              }
              case AppTypes.CancelResidency :
              {
               setchkCancelResidency(appType.isActive as boolean);
               break;
              }
              case AppTypes.ResidencyExtension :
              {
               setchkResidencyExtension(appType.isActive as boolean);
               break;
              }
         }
        })
      }
      else {
        toast.error(res.message);
      }
    }
    getIntialVal();
    
  }, [])




  return (
    <main className="login-bg">
      <div className="container" style={{ marginBottom: '80px' }}>
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{ border: '1px solid rgb(189, 189, 189)' }}>
              <div className="card-header bg-dark">
                <div className="text-center">
                  <h1 className=" text-gray-900 mb-1 shorooq gold" style={{ fontSize: '28px' }}>نوع المعاملة</h1>
                </div>
              </div>
              <div className="card-body p-0 ">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="p-5">
                      <form className="user" >
                        <div className="form-group row">
                          <label htmlFor="employeeType" className="col-sm-4 col-form-label">  طلب تجديد اقامة</label>
                          <Switch
                            className="col-sm-1"
                            onChange={onChange}
                            checked={chkResidencyRenewal}
                            id="1"
                          />
                        </div>
                        <div className="form-group row">
                          <label htmlFor="employeeType" className="col-sm-4 col-form-label">    طلب نقل معلومات </label>
                          <Switch
                            className="col-sm-1"
                            onChange={onChange}
                            checked={chkInformationTransfer}
                            id="2"
                          />
                        </div>
                        <div className="form-group row">
                          <label htmlFor="employeeType" className="col-sm-4 col-form-label"> طلب تحديث او تعديل بيانات </label>
                          <Switch
                           className="col-sm-1"
                            onChange={onChange}
                            checked={chkUpdateData}
                            id="3"
                          />
                        </div>
                        <div className="form-group row">
                          <label htmlFor="employeeType" className="col-sm-4 col-form-label">   تمديد إقامة </label>
                          <Switch
                            className="col-sm-1"
                            onChange={onChange}
                            checked={chkCancelResidency}
                            id="4"
                          />
                        </div>
                        <div className="form-group row">
                          <label htmlFor="employeeType" className="col-sm-4 col-form-label">   الغاء إقامة  </label>
                          <Switch
                            className="col-sm-1"
                            onChange={onChange}
                            checked={chkResidencyExtension}
                            id="5"
                          />
                        </div>
             
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></main>



  )
}

export default AppTypesSettings;
