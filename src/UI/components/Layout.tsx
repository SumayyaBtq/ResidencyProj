import React, { FC } from 'react'
import SideMenu from "./SideMenu";
import AuthHeader from "./AuthHeader";
import Header from './Header';
import FullPageLoader from './FullPageLoader';
import { getLocalStorage } from '../../Services/utils/localStorageHelper';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../State/rootReducer";
import { authenticateResponse } from '../../types/userInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/js/all';


const Layout: FC = ({ children }) => {
    const LookUpState = useSelector<RootState,RootState["lookUp"]>(state => state.lookUp);
    const userData = useSelector<RootState,RootState["login"]>(state => state.login);

    const {IsLoading} = LookUpState;


    const userAuth = getLocalStorage("user", authenticateResponse);

    return (
        <>
         <Header />
            <div id="layoutSidenav">
                <SideMenu />
                <div id="layoutSidenav_content">              
                    {userData.isLoggedIn && 
                    <AuthHeader loggedIn={userAuth.isLoggedIn} 
                    fullName={ userData?.userInfo?.employeeName!=undefined?userData?.userInfo?.employeeName:""}
                    civilId = { userData?.userInfo?.civilId!=undefined?userData?.userInfo?.civilId:""} />}
                    {children}
                </div>
            </div>
            { IsLoading && <FullPageLoader />}
            <ToastContainer position="top-left" rtl={true}/>
        </>
    )
}

export default Layout;
