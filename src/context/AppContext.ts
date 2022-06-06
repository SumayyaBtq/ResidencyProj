import { userInfo, UserInfo } from './../types/userInfo';
import React from "react";


type userContextType = {
    user: UserInfo,
    setUser: (value:UserInfo) => void
}

const UserContext = React.createContext({} as userContextType);
export default UserContext;
