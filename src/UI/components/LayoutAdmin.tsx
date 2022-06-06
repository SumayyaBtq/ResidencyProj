import React, { FC } from 'react'
import SideMenuAdmin from "./SideMenuAdmin";
import AuthHeader from "./AuthHeader";
import Header from './Header';
import FullPageLoader from './FullPageLoader';
import { getLocalStorage } from '../../Services/utils/localStorageHelper';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../State/rootReducer";

import { authenticateResponse } from '../../types/userInfo';
import '../../assets/js/all';


const LayoutAdmin: FC = ({ children }) => {
    const LookUpState = useSelector<RootState,RootState["lookUp"]>(state => state.lookUp);
    const userData = useSelector<RootState,RootState["login"]>(state => state.login);
    const {IsLoading} = LookUpState;



    return (
        <>
         <Header />
            <div id="layoutSidenav">
                <SideMenuAdmin />
                <div id="layoutSidenav_content">              
                    {(userData.isLoggedIn&&userData?.userInfo?.isAdmin )&& 
                    <AuthHeader loggedIn={userData.isLoggedIn} 
                    fullName={ userData.userInfo.employeeName}
                    civilId = {userData.userInfo.civilId} />}
                    {children}
                </div>
            </div>
            { IsLoading && <FullPageLoader />}
        </>
    )
}

export default LayoutAdmin;
