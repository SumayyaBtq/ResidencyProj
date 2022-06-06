import React from 'react';
type Props={
loggedIn : boolean,
civilId:string,
fullName:string
}
const AuthHeader = (props:Props) => {
  return (
    <>{props.loggedIn &&
      <div className="alert-info pb-2">
        <div className="row">
          <div className="col-sm-12 pt-2">&nbsp;
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />&nbsp;
            <label className="noor-Bold">الرقم المدني :</label> <span>{props.civilId}</span>
            &nbsp;
            <label className="noor-Bold">اسم المستخدم :</label> <span>{props.fullName}</span>
          </div>
        </div>
      </div>
}
    </>
  )
}

export default AuthHeader;
