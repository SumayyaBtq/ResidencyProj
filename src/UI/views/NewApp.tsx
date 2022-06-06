import React, {useEffect,useState} from 'react';
import Layout from "../components/Layout";
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../../State/rootReducer';
import {getAppTypesRequest} from "../../State/lookUps";
import {SelectOptions} from '../../types/UIRelated';
import { useHistory ,useParams} from "react-router-dom";
import {getCreateRequest,getFetchIncompleteRequest,getUpdateRequest,getUserApplicationsByApplicationNumber} from "../../State/newApp";
import {Steps,StatusType,ErrorMessages} from "../../types/Enums"
import {INewAppState} from '../../types/newApp'





const NewApp: React.FunctionComponent<INewAppState> =() => {
	const LookUpState = useSelector<RootState,RootState["lookUp"]>(state => state.lookUp);
  const newAppState = useSelector<RootState,RootState["newApp"]>(state => state.newApp);
  const userData = useSelector<RootState,RootState["login"]>(state => state.login);
  const [appType, setappType] = useState<SelectOptions|undefined>({label:"",value:""});
  const [labelName,setLablelName]=useState<string>("");
  const history = useHistory();
  const param=useParams();
  const {AppTypes} = LookUpState;
  let dispatch = useDispatch();

  useEffect(() => {
       if (newAppState.IState.applicationNumber===undefined && newAppState.isloading==false )
       {
          dispatch(getFetchIncompleteRequest(userData.userInfo?.userId as number));
       }
       
  
    const GetDropdownValues = async () => {
      if (AppTypes === undefined) {
        dispatch(getAppTypesRequest());
      }
    };
    GetDropdownValues();

  }, []);

  useEffect(() => {
    console.log("in useEffect newAppState.applicationTypeId,AppTypes");
    if ( newAppState.IState.applicationStatusId==StatusType.Creation||newAppState.IState.applicationStatusId==StatusType.Return)
    {
      let selectedObj = AppTypes?.find(a=>a.value===newAppState.IState.applicationTypeId?.toString());
      setappType(selectedObj);
    }
    if (( newAppState.IState.applicationStatusId==StatusType.Creation||newAppState.IState.applicationStatusId==StatusType.Return) && newAppState.isloading==false )
    {
      setLablelName("  استكمال اخر  معاملة ");
   }
    else 
    {
      setLablelName("  بدء معاملة جديدة");
    }

    return () => {
    }
  }, [newAppState.IState.applicationTypeId,AppTypes]);

  
	const handleSubmit = async (e: React.SyntheticEvent) => {
		 e.preventDefault();
     newAppState.IState.applicationTypeId = Number(appType?.value);
     if (newAppState.IState.applicationNumber===undefined||newAppState.IState.applicationNumber===0)
     {
      newAppState.IState.applicationDate = new Date();
      newAppState.IState.userId=userData.userInfo?.userId;
      newAppState.IState.isActive=false;
      newAppState.IState.stepNo=Steps.CreateApp;
      newAppState.IState.applicationStatusId=StatusType.Creation;
      newAppState.IState.remark="ss";
      dispatch(getCreateRequest(newAppState.IState));
     }
    else
    {
      console.log("in else");
      
      newAppState.IState.remark="ss1";
      dispatch(getUpdateRequest(newAppState.IState));
    }
    history.push("/personalInfo");

	}

  const handleAppTypeChange = async (value?:SelectOptions|SelectOptions[] | null) => { 
   if (value)
   {
      let temp : SelectOptions= value as SelectOptions;
      setappType(temp);
   }
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
                    <h1 className=" text-gray-900 mb-1 shorooq gold" style={{fontSize: '28px'}}>نموذج انشاء معاملة جديدة</h1>
                  </div>
                </div>
                <div className="card-body p-0 ">
                  {/* Nested Row within Card Body */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="p-5">
                        <form className="user" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input type="email" className="form-control form-control-user" id="exampleInputEmail" disabled={true} aria-describedby="emailHelp" placeholder="اختر نوع المعامله " />
                          </div>
                          <div className="form-group">
                           
                            <Select 
                             name="AppType" 
                             placeholder="اختر نوع المعاملة "
                             options={AppTypes}
                             value= {appType}
                             onChange={handleAppTypeChange}
                             rules={{
                              required: true  }}
                              />
 {appType ==undefined && 
                                 <span className="text-danger">{ErrorMessages.required}</span>  }
                          </div>
                          <div className="row justify-content-center"> <button type="submit" className="btn btn-primary btn-user  shorooq " style={{fontSize: '22px'}}>
                           {labelName}
                            </button>
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

export default NewApp
