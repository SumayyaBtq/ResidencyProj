import React,{useState,useEffect,useRef} from 'react'
import Layout from "../components/Layout";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Select from 'react-select';
import Switch from "react-switch";
import {RegisterRequest,RegisterRequestModel} from "../../types/registerRequest";
import {getNationalities,getUserTypes} from "../../Services/lookup";
import {assignToSelectType, assignToType} from "../../Services/utils/assignType";
import ModalInfo, {PropsModal} from '../components/ModalInfo';
import {SelectOptions} from "../../types/UIRelated";
import {RegisterNonSapUser}from "../../Services/register";
import {IResponse as Response} from "../../types";



const Register2 = () => {
  const history = useHistory(); 


  const [moaIqama, setmoaIqama] = useState(true);
  const [nationalities, setnationalitiesOption] = useState<SelectOptions[]>();
  const [userTypes, setuserTypesOption] = useState<SelectOptions[]>();
  const [show, setShow] = useState(false);
  const [propsModal, setpropsModal] = useState<PropsModal>({
    handleClose: () => {setShow(false); history.push("/login");},
    show: show,
    modalBody: '',
    modalTitle: ''
  });


  const { register, handleSubmit, watch, errors,control } = useForm<RegisterRequestModel>();
  const password = useRef({});
  password.current = watch("password", "");



  const onSubmit = async (data:FormData) => {
    
    let temp = new RegisterRequestModel();
    temp = assignToType(data,temp);
    
    let arg = new RegisterRequest();
    arg.email = temp.email;
    arg.password = temp.password;
    arg.civilId= temp.civilId;
    arg.employeeName= temp.employeeName;
    arg.nationalityId = temp.selectedNationality?.value;
    arg.jobTitle = temp.jobTitle;
    arg.userTypeId = temp.userTypeId?.value;
    arg.employeeType="temp Data";//TODO
    arg.organization=temp.organization;
    arg.mobileNumber = temp.mobileNumber;
    arg.employeeNumber= temp.employeeNumber;


    let a:Response= await RegisterNonSapUser(arg);

    if (a.status ){
      let tempModal = {...propsModal}
      tempModal.show = true;
      tempModal.modalBody=a.message as string;
      tempModal.modalTitle="Info"
      setpropsModal({...tempModal});
    }

  }

//intial fetch for dropdown
  useEffect(() => {
    const GetDropdownValues = async()=>{
      let responseNations = await getNationalities();
      let nationOptions: SelectOptions[] = assignToSelectType(responseNations, "nationalityId", "nationalityName");
      setnationalitiesOption(nationOptions);

      let responseUserTypes = await getUserTypes();
      let userTypesOptions: SelectOptions[] = assignToSelectType(responseUserTypes, "userTypeId", "userTypeName");
      setuserTypesOption(userTypesOptions);
      
    };  
    GetDropdownValues();
    
  }, []);
  return (
    <Layout>

      <main className="login-bg">

      <div className="container" style={{marginBottom: '80px'}}>
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{border: '1px solid rgb(189, 189, 189)'}}>
              <div className="card-header bg-dark">
                <div className="text-center">
                  <h1 className=" text-gray-900 mb-1 shorooq gold" style={{fontSize: '28px'}}>تسجيل مستخدم جديد</h1>
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
                          <label htmlFor="civilId" className="col-sm-2 col-form-label">الرقم المدني</label>
                          <div className="col-sm-4">
                            <input type="text" name="civilId" className="form-control form-control-user"
                             ref={register({ required: true,minLength:12,maxLength:12})} />
                            {errors?.civilId?.type==="required" && <span className="text-danger">CivilId is required</span>  }
                            {(errors?.civilId?.type==="minLength" || errors?.civilId?.type==="maxLength")  && 
                             <span  className="text-danger">Length must be 12 </span>  }
                            
                          </div>
                          <label htmlFor="" className="col-sm-2 col-form-label">الرقم المسلسل</label>
                          <div className="col-sm-4">
                            <input type="text" name="civilIdSerialNumber" className="form-control form-control-user" 
                            ref={register({ required: true})}/>
                             {errors?.civilIdSerialNumber?.type==="required" && 
                             <span className="text-danger">CivilIdSerialNumber is required</span>  }
                          </div>
                        </div>
                        {/* ################### form- row-002 #################*/}
                        <div className="form-group row">
                          <label htmlFor="employeeNumber" className="col-sm-2 col-form-label">رقم الموظف</label>
                          <div className="col-sm-4">
                            <input name="employeeNumber"  type="text" className="form-control form-control-user"
                              ref={register}/>
                          </div>
                          <label htmlFor="employeeName" className="col-sm-2 col-form-label">اسم الموظف</label>
                          <div className="col-sm-4">
                            <input name="employeeName" type="text" className="form-control form-control-user" ref={register} />
                          </div>
                        </div>
                        {/* ################### form- row-003 #################*/}
                        <div className="form-group row">
                          <label htmlFor="mobileNumber" className="col-sm-2 col-form-label">رقم الهاتف</label>
                          <div className="col-sm-4">
                            <input name="mobileNumber" type="text" className="form-control form-control-user" ref={register} />
                          </div>
                          <label htmlFor="email" className="col-sm-2 col-form-label">البريد الالكتروني</label>
                          <div className="col-sm-4">
                            <input name="email" type="email" className="form-control form-control-user" ref={register} />
                          </div>
                        </div>
                        {/* ################### form- row-004 #################*/}
                        <div className="form-group row">
                          <label htmlFor="organization" className="col-sm-2 col-form-label">الادارة / القسم</label>
                          <div className="col-sm-4">
                            <input name="organization" type="text" className="form-control form-control-user" ref={register} />
                          </div>
                          <label htmlFor="selectedNationality" className="col-sm-2 col-form-label">الجنسية</label>
                          <div className="col-sm-4">
                            <Controller
                                name="selectedNationality"
                                control={control}
                                placeholder=" اختر الدولة "
                                options={nationalities}
                                as={Select}
                              />
                          </div>
                        </div>
                        {/* ################### form- row-005 #################*/}
                        <div className="form-group row">
                          <label htmlFor="employeeType" className="col-sm-2 col-form-label">الفئة التابعة لها</label>
                          <div className="col-sm-4">
     
                              <Controller
                                name="userTypeId"
                                control={control}
                                placeholder="  Select UserType "
                                options={userTypes}
                                as={Select}
                              />
                          </div>
                          <label htmlFor="" className="col-sm-2 col-form-label">إقامة وزارة</label>
                          <div className="col-sm-4">
                            {/* <div className="custom-control custom-checkbox  mt-1"> */}
                              {/* <input type="checkbox" defaultChecked data-toggle="toggle" data-on="<i class='fa fa-check'></i>" data-off="<i class='fas fa-times'></i>" data-size="sm" /> */}
                              {/* <Switch onChange={()=> setmoaIqama(val=>!val)} checked={moaIqama} /> */}
                              <Controller
                                name="isMOA"
                                control={control}
                                defaultValue={true}
                                render={({ onChange, value }) => (
                                  <Switch
                                    onChange={onChange}
                                    checked={value}
                                    />
                                  )}
                              />
                            {/* </div> */}
                          </div>
                        
                        
                        </div>
                        {/* ################### form- row-006 #################*/}
                        <div className="form-group row">
                          <label htmlFor="password" className="col-sm-2 col-form-label">كلمة المرور</label>
                          <div className="col-sm-4">
                            <input name="password" type="password" className="form-control form-control-user" 
                             ref={register({
                              required: "You must specify a password",
                              minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                              }
                            })} />
                             {errors.password && <span  className="text-danger">{errors.password.message}</span>}
                          </div>
                          <label htmlFor="password_repeat" className="col-sm-2 col-form-label">تأكيد كلمة المرور</label>
                          <div className="col-sm-4">
                            <input  type="password" name="password_repeat" className="form-control form-control-user" 
                            ref={register({
                              validate: value =>
                                value === password.current || "The passwords do not match"
                            })}/>
                             {errors.password_repeat && <span  className="text-danger">{errors.password_repeat.message}</span>}

                          </div>
                        </div>

                   
                        <hr />
                        {/* ################# submit btn ##################### */}
                        <div className="row justify-content-center"> 
                        <button type="submit" className="btn btn-primary btn-user shorooq registeralert " style={{fontSize: '22px'}}>
                            تسجيل مستخدم جديد
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

    {/*Success Modal */}
      <ModalInfo show={propsModal.show}
         handleClose={propsModal.handleClose} 
         modalBody={propsModal.modalBody}
         modalTitle = {propsModal.modalTitle}
        />


   </Layout>
  );
}

export default Register2
