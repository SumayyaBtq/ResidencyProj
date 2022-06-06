import * as React from 'react';
import {useHistory} from 'react-router-dom'


const LandingPage: React.FunctionComponent = () => {
  const history = useHistory();

   const setDirection=(input:string)=>{
    if(input=="fwd")
    {
      history.push("/passportInfo");
    }
    else if(input=="bwd")
    {
      history.push("/newApp");
    }
   }
  return <>
   <div  className="row justify-content-between"> 
                          <button type="submit" className="btn btn-primary btn-user shorooq  " 
                          onClick={()=> {setDirection("bwd");  }} style={{ fontSize: '22px' }}>
                          
                          <a   className="btn btn-primary btn-user shorooq  " style={{ fontSize: '22px' }}>
                            الاستعلام عن معاملات
                            </a>
                            </button>

                            <button type="submit" className="btn btn-primary btn-user shorooq  "
                             onClick={()=> {setDirection("fwd");  }} style={{ fontSize: '22px' }}>
                            <a  className="btn btn-primary btn-user shorooq  " style={{ fontSize: '22px' }}>
                                اعدادات النظام
                          </a>
                            </button>
                          </div>
  </> ;
};

export default LandingPage;
