import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const SideMenuAdmin = () => {
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div className="sb-sidenav-menu">
            {/*#######################################*/}
            <div className="nav">
              {/*############### Section title ########################*/}
              <div className="sb-sidenav-menu-heading-title text-center">نظام تجديد اﻹقامات-وزارة الاوقاف</div>
              {/*######################################################*/}
              {/*#######################################*/} 
              
              <NavLink activeClassName="active" className="nav-link" to="/newApp">
                <span className="sb-nav-link-icon">
                  <i className="fas fa-angle-double-left" />&nbsp;&nbsp;
                </span>
                <span>معاملة جديدة</span>
              </NavLink>
              <NavLink activeClassName="active" className="nav-link" to="/managerequests">
                <span className="sb-nav-link-icon">
                  <i className="fas fa-angle-double-left" />&nbsp;&nbsp;
                </span>
                <span>متابعة المعاملات</span>
              </NavLink>
              <NavLink  activeClassName="active" className="nav-link" to="/passportInfo">
                <span className="sb-nav-link-icon">
                  <i className="fas fa-angle-double-left" />&nbsp;&nbsp;
                </span>
                <span>تعديل بياناتى </span>
              </NavLink>
              <NavLink  activeClassName="active" className="nav-link" to="/passportInfo">
                <span className="sb-nav-link-icon">
                  <i className="fas fa-angle-double-left" />&nbsp;&nbsp;
                </span>
                <span>تغير كلمة المرور</span>
              </NavLink>
              
              
             
              {/* ################## End collapse ############################## */}
              {/*#######################################*/}
            </div>
            {/*#######################################*/}
          </div>
          <div className="sb-sidenav-footer text-center">
            <img   src={process.env.PUBLIC_URL + 'img/itc-text-logo-white.png'}  alt="" />
           
          </div>
        </nav>
      </div>


    </>
  );
}

export default SideMenuAdmin;
