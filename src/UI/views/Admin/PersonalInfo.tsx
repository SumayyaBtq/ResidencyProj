import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import { IState } from "../../../State/personalInfo";
import { SelectOptions } from "../../../types/UIRelated"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../State/rootReducer";
import { assignToType } from "../../../Services/utils/assignType";
import { getCreateRequest,getFetchRequest,getUpdateRequest as personalInfoUpdate } from "../../../State/personalInfo";
import { getFetchIncompleteRequest,getUpdateRequest } from "../../../State/newApp";
import {getFetchRequest as getFetchRequestPassport} from "../../../State/passportInfo"
import { useHistory } from "react-router-dom";
import {Steps} from "../../../types/Enums"
import {getUserApplicationsByApplicationNumber,loadingRequest} from "../../../State/newApp"


export interface IFormData extends IState {
  selectedDept?: SelectOptions,
  selectedJobTitle?: SelectOptions
}

class TempClass implements IState {
  id: number | undefined;
  employeeNumber: number | undefined;
  employeeNameArabic: string | undefined;
  employeeNameEnglish: string | undefined;
  birthDate: Date | undefined;
  mobileNumber: string | undefined;
  department: string | undefined;
  jobTitle?: string | undefined;
  hireDate?: Date | undefined;
  applicationNumber?: number | undefined;
  userId?: number | undefined;
  createdDate?: Date | undefined;
  updatedDate?: Date | undefined;
}

const PersonalInfo = () => {
  const history = useHistory();
  const newAppState = useSelector<RootState, RootState["newApp"]>(state => state.newApp);
  const loginData = useSelector<RootState, RootState["login"]>(state => state.login);
  const stateData = useSelector<RootState, RootState["personalInfo"]>(state => state.personalInfo);
  const { userInfo } = loginData;
  const [IsDisabled, setIsDisabled] = useState<boolean>(true);
  const [Direction, setDirection] = useState<string>("");
  let dispatch = useDispatch();
  const { register, handleSubmit, watch, errors,setValue, getValues,control } = useForm<IFormData>({
    defaultValues:{
      userId : userInfo?.userId,
      birthDate : userInfo?.birthDate?new Date(userInfo?.birthDate as Date):undefined,
      employeeNumber:userInfo?.employeeNumber?Number(userInfo?.employeeNumber):undefined,
      employeeNameArabic : userInfo?.employeeName,
      mobileNumber : userInfo?.mobileNumber,
      createdDate:  undefined,
      updatedDate: undefined,
      hireDate: userInfo?.hireDate?new Date(userInfo?.hireDate as Date):undefined
    }
  });

  //TODO pick values correctly
  const jobTitleOptions: SelectOptions[] =
    [
      { label: "طباع", value: "1" },
      { label: "مبرمج", value: "2" }
    ]

  const deptOptions: SelectOptions[] =
    [
      { label: "نظم المعلومات", value: "1" },
      { label: "الشئون الادارية", value: "2" }
    ]

  useEffect(() => {

    setValue("employeeNameArabic", stateData.employeeNameArabic);
    setValue("employeeNameEnglish", stateData.employeeNameEnglish);
    setValue("mobileNumber", stateData.mobileNumber);
    setValue("employeeNumber", stateData.employeeNumber);
    setValue("selectedJobTitle", jobTitleOptions.find(j => j.value === stateData.jobTitle)?.label);
    setValue("selectedDept", deptOptions.find(j => j.value === stateData.department)?.label);
    
  }, [stateData]);

  const onSubmit = async (data: IFormData) => {
    if(Direction=="fwd")
    {
      dispatch(getFetchRequestPassport(newAppState.IState?.applicationNumber as number));
      history.push("/admin/passportInfo");
    }
    else if(Direction=="bwd")
    {
      dispatch(loadingRequest(true));
      dispatch(getUserApplicationsByApplicationNumber(newAppState.IState?.applicationNumber as number));
      history.push("/admin/newApp");
    }
    
  }
 
  return (
      <main className="login-bg">
        <div className="container" style={{ marginBottom: '80px' }}>
          {/* Outer Row */}
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{ border: '1px solid rgb(189, 189, 189)' }}>
                <div className="card-header bg-dark">
                  <div className="text-center">
                    <h1 className=" text-gray-900 mb-1 shorooq gold" style={{ fontSize: '28px' }}> البيانات
                      الشخصية</h1>
                  </div>
                </div>
                <div className="card-body p-0 ">
                  {/* Nested Row within Card Body */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="p-5">
                        <form className="user" onSubmit={handleSubmit(onSubmit)}>
                          {/* ################### form- row-001 #################*/}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">رقم الموظف</label>
                            <div className="col-sm-3">
                              <input type="number" disabled={IsDisabled} className="form-control form-control-user"
                                name="employeeNumber" defaultValue={userInfo?.employeeNumber} ref={register} />
                            </div>
                          </div>
                          {/* ################### form- row-002 #################*/}
                          <div className="form-group row">
                            <label htmlFor="employeeNameArabic" className="col-sm-3 col-form-label">اسم الموظف-عربي</label>
                            <div className="col-sm-3">
                              <input type="text" disabled={IsDisabled} className="form-control form-control-user"
                                name="employeeNameArabic"  ref={register} />
                            </div>
                            <label className="col-sm-3 col-form-label">رقم الهاتف</label>
                            <div className="col-sm-3">
                              <input type="text" disabled={IsDisabled} className="form-control form-control-user"
                                name="mobileNumber" ref={register} />
                            </div>
                          </div>
                          {/* ################### form- row-003 #################*/}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">اسم الموظف-انجليزي</label>
                            <div className="col-sm-3">
                              <input type="text" disabled={IsDisabled} className="form-control form-control-user"
                                name="employeeNameEnglish" ref={register} />
                            </div>
                            <label className="col-sm-3 col-form-label">تاريخ الميلاد</label>
                            <div className="col-sm-3">
                              {/* <input type="date" className="form-control form-control-user" /> */}
                              <Controller
                                control={control}
                                name="birthDate"
                                render={({ onChange, onBlur, value }) => (
                                  <ReactDatePicker
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    selected={value}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="dd/MM/yyyy "
                                    className="form-control form-control-user"
disabled                                    
                                  />
                                )}
                              />

                            </div>
                          </div>
                          {/* ################### form- row-004 #################*/}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">الادارة/القسم</label>
                            <div className="col-sm-3">
                             <input type="text" disabled={IsDisabled} className="form-control form-control-user"
                                name="selectedDept" ref={register} />
                            </div>
                            <label className="col-sm-3 col-form-label">المسمى الوظيفي</label>
                            <div className="col-sm-3">
                               <input type="text" disabled={IsDisabled} className="form-control form-control-user"
                                name="selectedJobTitle" ref={register} />
                            </div>
                          </div>
                          {/* ################### form- row-005 #################*/}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">تاريخ التعيين</label>
                            <div className="col-sm-3">
                              <Controller
                                control={control}
                                name="hireDate"
                                render={({ onChange, onBlur, value }) => (
                                  <ReactDatePicker
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    selected={value}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="dd/MM/yyyy "
                                    className="form-control form-control-user"
                                    disabled
                                  />
                                )}
                              />
                            </div>
                          </div>
                          {/* ################### form- row-006 #################*/}
                          {/* ################# submit btn ##################### */}
                          <div  className="row justify-content-between"> 
                          <button type="submit" className="btn btn-primary btn-user shorooq  " onClick={()=> {setDirection("bwd");  }} style={{ fontSize: '22px' }}>
                          
                          <a   className="btn btn-primary btn-user shorooq  " style={{ fontSize: '22px' }}>
                            السابق
                            </a>
                            </button>

                            <button type="submit" className="btn btn-primary btn-user shorooq  " onClick={()=> {setDirection("fwd");  }} style={{ fontSize: '22px' }}>
                            <a  className="btn btn-primary btn-user shorooq  " style={{ fontSize: '22px' }}>التالي
                          </a>
                            </button>
                          </div>
                          {/* ################# end submit btn ##################### */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></main>
  );
}
export default PersonalInfo;