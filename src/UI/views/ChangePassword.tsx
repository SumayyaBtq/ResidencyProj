import React,{useState,useEffect,useRef} from 'react'
import { useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../State/rootReducer";
import {IChangePassword,IResponse} from "../../types";
import { updatePassword } from "../../Services/changePassword";
import {  toast } from 'react-toastify';


const ChangePassword = () => {
  const history = useHistory(); 
  const {userInfo} = useSelector<RootState, RootState["login"]>(state => state.login);
  const [isSapUser, setIsSapUser] = useState(userInfo?.isSapUser);
  let dispatch = useDispatch();
  const { register, handleSubmit, watch,errors } = useForm<IChangePassword>();
  const password = useRef({});
  password.current = watch("password", "");


  const onSubmit = async (data: IChangePassword) => {
    data.userId = userInfo?.userId;
    let result: IResponse = await updatePassword(data);
    if (!result.hasError) {
      toast.success(result.message);
      history.push("./newApp")
    }
    else {
      toast.error(result.message);
    }
  }

  useEffect(() => {
    if (isSapUser === true) {
      const options = {
        onOpen:() =>{ history.push("/newApp")
      }
    };
    toast.warning("You cannot change your password from here, Change in ldap",options);
    }
  }, [isSapUser])
  return (

    <main className="login-bg">
      <div className="container" style={{ marginBottom: '80px' }}>
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{ border: '1px solid rgb(189, 189, 189)' }}>
              <div className="card-header bg-dark">
                <div className="text-center">
                  <h1 className=" text-gray-900 mb-1 shorooq gold" style={{ fontSize: '28px' }}>ChangePassword </h1>
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

                          <label htmlFor="oldPassword" className="col-sm-2 col-form-label">Old Password </label>
                          <div className="col-sm-4">
                            <input type="password" className="form-control form-control-user"
                              name="oldPassword" ref={register} />
                          </div>

                        </div>

                        {/* ################### form- row-002 #################*/}
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
                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                          </div>
                          <label htmlFor="password_repeat" className="col-sm-2 col-form-label">تأكيد كلمة المرور</label>
                          <div className="col-sm-4">
                            <input type="password" name="password_repeat" className="form-control form-control-user"
                              ref={register({
                                validate: value =>
                                  value === password.current || "The passwords do not match"
                              })} />
                            {errors.password_repeat && <span className="text-danger">{errors.password_repeat.message}</span>}

                          </div>
                        </div>


                        <hr />
                        {/* ################# submit btn ##################### */}
                        <div className="row justify-content-center">
                          <button type="submit" className="btn btn-primary btn-user shorooq registeralert " style={{ fontSize: '22px' }}>
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

export default ChangePassword;
