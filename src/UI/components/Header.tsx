import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authenticateResponse } from '../../types/userInfo';
import { getLocalStorage } from '../../Services/utils/localStorageHelper';
import { useDispatch } from 'react-redux';
import {getllogout} from "../../State/login";
import {ClearRequest} from "../../State/newApp";
import {RequestClear as RequestClearPersonalInfo} from "../../State/personalInfo";
import {RequestClear as RequestClearPassportInfo} from "../../State/passportInfo";
import {RequestClear as RequestClearattachmentDocuments} from "../../State/attachmentDocuments";
import { useHistory } from "react-router-dom";


const Header = () => {

  const userAuth = getLocalStorage("user", authenticateResponse);
  let dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch(getllogout());
    dispatch(ClearRequest());
    dispatch(RequestClearPersonalInfo());
    dispatch(RequestClearPassportInfo());
    dispatch(RequestClearattachmentDocuments());
  }


  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <img className="navbar-brand d-none d-md-block" src={process.env.PUBLIC_URL + 'img/brand.png'} alt="" />

        <p className="navbar-brand d-block d-sm-none">وزارة الاوقاف والشئون اﻹسلامية</p>
        <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle"
        > <i className="fas fa-bars" />
        </button>
        {/* profle*/}
        {/*#######################################*/}
        <div className="d-none d-md-inline-block">
          <ul className="navbar-nav ml-auto ml-md-0">
            {userAuth.isLoggedIn ?
              <li className="nav-item dropdown"> <a className="top-nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw" />&nbsp;&nbsp; ملف المستخدم
              &nbsp;&nbsp;</a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                  {/* <button className="dropdown-item sb-nav-link-icon">
                    <i className="fas fa-angle-double-left" />&nbsp;&nbsp; الملف الشخصي
                  </button> */}
                  <Link to="/profile" className="dropdown-item sb-nav-link-icon" onClick={()=>history.push("/profile")} >
                    <i className="fas fa-angle-double-left" />&nbsp;&nbsp;  الملف الشخصي 
                  </Link>
                  <Link to="/login" className="dropdown-item sb-nav-link-icon" onClick={logout} >
                    <i className="fas fa-angle-double-left" />&nbsp;&nbsp; تسجيل الخروج
                  </Link>
                  <div className="dropdown-divider " />
                </div>
              </li> : <li className="nav-item"><Link to="/login" className="top-nav-link">تسجيل الدخول</Link></li>}
          </ul>
        </div>
        <div className="d-none d-md-inline-block" />
        {/*#######################################*/}
      </nav>

    </>
  );
}

export default Header;
