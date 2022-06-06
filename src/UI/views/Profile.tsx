import React,{useState,useEffect} from 'react'
import { useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import {IUserProfile} from "../../types";
import {changeProfile} from "../../State/login";
import {updateProfile} from "../../Services/userProfile";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../State/rootReducer";
import { assignToType } from "../../Services/utils/assignType";

class TempCLass implements IUserProfile{
  userId?:number;  
  mobileNumber?:string;
  employeeNumber?:string;
  email?:string;
  civilIdSerialNumber?:string;
}

const Profile = () => {
  const history = useHistory(); 
  const {userInfo} = useSelector<RootState, RootState["login"]>(state => state.login);
  const [isSapUser, setIsSapUser] = useState(userInfo?.isSapUser);
  let dispatch = useDispatch();
  const { register, handleSubmit, watch,setValue ,errors,control } = useForm<IUserProfile>({
    defaultValues:{
      email: userInfo?.email,
      mobileNumber:userInfo?.mobileNumber,
      employeeNumber:userInfo?.employeeNumber,
      civilIdSerialNumber:userInfo?.civilIdSerialNumber
    }
  });




  const onSubmit = async (data:IUserProfile) => {
    data.userId = userInfo?.userId;
    let res = await updateProfile(data);
    let temp = new TempCLass();
    temp = assignToType(res, temp);
    if (temp.userId !==undefined)
    dispatch(changeProfile(temp));

  }

  


  return (


      <main className="login-bg">

      <div className="container" style={{marginBottom: '80px'}}>
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{border: '1px solid rgb(189, 189, 189)'}}>
              <div className="card-header bg-dark">
                <div className="text-center">
                  <h1 className=" text-gray-900 mb-1 shorooq gold" style={{fontSize: '28px'}}>Profile Info  </h1>
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

                          <label htmlFor="" className="col-sm-2 col-form-label">الرقم المسلسل</label>
                          <div className="col-sm-4">
                            <input type="text" className="form-control form-control-user" disabled={!isSapUser}
                            name="civilIdSerialNumber" ref={register}/>
                          </div>

                          <label htmlFor="employeeNumber" className="col-sm-2 col-form-label">رقم الموظف</label>
                          <div className="col-sm-4">
                            <input name="employeeNumber"  type="text" className="form-control form-control-user"
                              ref={register}/>
                          </div>
                        </div>
   
                        {/* ################### form- row-002 #################*/}
                        <div className="form-group row">
                          <label htmlFor="mobileNumber" className="col-sm-2 col-form-label">رقم الهاتف</label>
                          <div className="col-sm-4">
                            <input name="mobileNumber" type="text" className="form-control form-control-user"
                             ref={register} />
                          </div>
                          <label htmlFor="email" className="col-sm-2 col-form-label">البريد الالكتروني</label>
                          <div className="col-sm-4">
                            <input name="email" type="email" className="form-control form-control-user" 
                            disabled={isSapUser} ref={register} />
                          </div>
                        </div>
                           
                   
                        <hr />
                        {/* ################# submit btn ##################### */}
                        <div className="row justify-content-center"> 
                        <button type="submit" className="btn btn-primary btn-user shorooq registeralert " style={{fontSize: '22px'}}>
                            Save  
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
      </div>


</main>
  
  );
}

export default Profile
