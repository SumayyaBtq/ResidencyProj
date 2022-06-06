import * as React from 'react';

interface NoDataProps {
    Message:any
}

const NoData: React.FunctionComponent<NoDataProps> = (props) => {
 
 
    return (
  <main className="login-bg">
      <div className="container-fluid" style={{ marginBottom: 10 }}>
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="card o-hidden border-1 shadow my-5 animate__animated animate__fadeIn " style={{ border: '1px solid rgb(189, 189, 189)' }}>
              <div className="card-header bg-dark">
                <div className="text-center">
                  <h1 className=" text-gray-900 mb-1 shorooq gold" style={{ fontSize: 28 }}> متابعة الطلب</h1>
                </div>
              </div>
              <div className="card-body p-5 ">
              {props.Message}
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
 
};

export default NoData;
