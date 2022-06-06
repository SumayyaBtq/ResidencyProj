import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
 import auth from "../../auth/auth";



const Home = () => {

	// const user = useContext(UserInfoContext);
	const history = useHistory();
	// console.log("Home ~ user", user);
	
	return (
		<>
			<h1>Home Page</h1>
			 {true && <h3>logged in</h3>}
			<button
				className="btn btn-danger"
				onClick={() => {
					auth.logout(() => {
						history.push("/login");
					});
				}}>
				Logout
			</button>
		</>
	);
};

export default Home;
