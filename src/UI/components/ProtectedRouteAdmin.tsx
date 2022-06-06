import React from "react";
import { Redirect, Route } from "react-router-dom";

import { getLocalStorage } from "../../Services/utils/localStorageHelper"

import { authenticateResponse } from "../../types/userInfo";
import LayoutAdmin from "../components/LayoutAdmin";

const ProtectedRouteAdmin: React.ComponentType<any> = ({ component: Component, ...rest }) => {
	
	const userAuth = getLocalStorage("user", authenticateResponse);
	return (
		<Route
			{...rest}
			render={(props) => {
				console.log("props", props);
				if (userAuth.isLoggedIn===true) {
					return <LayoutAdmin><Component {...props} /></LayoutAdmin>;
				}
				else {
					return (<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location },
						}}
					/>);
				}
			}}
		/>
	);
};

export default ProtectedRouteAdmin;