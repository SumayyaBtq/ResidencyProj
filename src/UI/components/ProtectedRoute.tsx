import React from "react";
import { Redirect, Route } from "react-router-dom";

import { getLocalStorage } from "../../Services/utils/localStorageHelper"

import { authenticateResponse } from "../../types/userInfo";
import Layout from "../components/Layout";

const ProtectedRoute: React.ComponentType<any> = ({ component: Component, ...rest }) => {
	
	const userAuth = getLocalStorage("user", authenticateResponse);
	return (
		<Route
			{...rest}
			render={(props) => {
				console.log("props", props);
				if (userAuth.isLoggedIn===true) {
					return <Layout><Component {...props} /></Layout>;
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

export default ProtectedRoute;