import React from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./UI/views/Home";
import Login from "./UI/views/Login";
import PersonalInfo from "./UI/views/PersonalInfo";
import PassportInfo from "./UI/views/PassportInfo";
import Register from "./UI/views/Register";
import ProtectedRoute from "./UI/components/ProtectedRoute";
import ProtectedRouteAdmin from "./UI/components/ProtectedRouteAdmin";
import NotFound from "./UI/views/NotFound";
import Footer from "./UI/components/Footer";
import NewRequest from "./UI/views/NewRequest";
import TestRBwithRHF from "./UI/views/TestRBwithRHF";
import NewApp from "./UI/views/NewApp";
import ManageRequests from "./UI/views/ManageRequests";
import FileAttachments from "./UI/views/FileAttachments";
import Agreament from "./UI/views/Agreament";
import Profile from "./UI/views/Profile";
import ChangePassword from "./UI/views/ChangePassword";
import Result from "./UI/views/Result";
////// Admin Imports 
import InwardApplication from "./UI/views/Admin/InwardApplication";
import NewAppAdmin   from "./UI/views/Admin/NewApp";
import PersonalInfoAdmin from "./UI/views/Admin/PersonalInfo";
import PassportInfoAdmin from "./UI/views/Admin/PassportInfo";
import AppTypesSettings from "./UI/views/Admin/AppTypesSettings";




function App() {

	return (
		<Router>

			
					<Switch>
	                /////// Public Routing 
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/TestRBwithRHF" component={TestRBwithRHF} />
					////// Client Route 
      					<ProtectedRoute exact path="/" component={NewApp} />
						<ProtectedRoute exact path="/newApp" component={NewApp} />
						<ProtectedRoute exact path="/personalInfo" component={PersonalInfo} />
						<ProtectedRoute exact path="/passportInfo" component={PassportInfo} />
						<ProtectedRoute exact path="/newRequest" component={NewRequest} />
						<ProtectedRoute exact path="/managerequests" component={ManageRequests} />
						<ProtectedRoute exact path="/fileAttachements" component={FileAttachments} />
						<ProtectedRoute exact path="/Agreament" component={Agreament} />
						<ProtectedRoute exact path="/result" component={Result} />
						<ProtectedRoute exact path="/profile" component={Profile} />
						<ProtectedRoute exact path="/changePassword" component={ChangePassword} />
						
						
                    /////admin routing 						
						<ProtectedRoute exact path="/admin/personalInfo" component={PersonalInfoAdmin} />
						<ProtectedRoute exact path="/admin/passportInfo" component={PassportInfoAdmin} />
						<ProtectedRoute exact path="/admin/newApp" component={NewAppAdmin} />
						<ProtectedRoute exact path="/admin/InwardApplication" component={InwardApplication} />
						<ProtectedRoute exact path="/admin/appTypesSettings" component={AppTypesSettings} />

						{/* <Route exact path="/notfound" component={NotFound} />
						<Redirect to="/notfound" /> */}
					</Switch>
				
				<Footer />

		</Router>
	);
}

export default App;
