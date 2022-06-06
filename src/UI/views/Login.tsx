import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { authenticateResponse } from "../../types/userInfo";
import { useHistory } from "react-router-dom";
import FullPageLoader from "../components/FullPageLoader";
import { Redirect } from "react-router-dom";
import { getLocalStorage } from "../../Services/utils/localStorageHelper";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../../State/rootReducer';
import {getloginRequest} from "../../State/login";
import {RequestClearRequest} from "../../State/newApp";

const Login = () => {
	let userAuth = getLocalStorage("user", authenticateResponse);
	const history = useHistory();
	let dispatch = useDispatch();
	const loginstate = useSelector<RootState,RootState["login"]>(state => state.login);

	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [isFieldEmpty, setIsFieldEmpty] = useState(false);
	const [wrongCredintials, setWrongCredintials] = useState(false);



	useEffect(() => {
		document.body.classList.add("sb-sidenav-toggled");
		return () => {
			document.body.classList.remove("sb-sidenav-toggled");
		}
	}, []);

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch(getloginRequest({username,password}));
	    dispatch(RequestClearRequest());

	
		

		/*if (username.trim() === "" || password.trim() === "") {
			setIsFieldEmpty(true);
			return;
		}
		setLoading(true);
	
		let loginRes: AuthenticateResponse = await login(username, password);
		console.log("loginRes", loginRes);
		

		if (!loginRes.hasError) {
			loginRes.isLoggedIn = true;
			localStorage.setItem("user", JSON.stringify(loginRes));
			setLoading(false);
		}
		else if(loginRes.hasError && loginRes.status < 500 && loginRes.status > 299) {
			setWrongCredintials(true);
			setLoading(false);
		}*/
	}

	const handleNewUser = (e:SyntheticEvent)=>
	{
		e.preventDefault();
		history.push("/register");
	}
	return (
		<Layout>
			{!userAuth.isLoggedIn &&
				<main className="login-bg">
					<div className="container" style={{ marginBottom: '80px' }}>
						{/* Outer Row */}
						<div className="row justify-content-center">
							<div className="col-xl-10 col-lg-12 col-md-9">
								<div className="card o-hidden border-1 shadow my-5 animate__animated animate__backInDown " style={{ border: '1px solid rgb(189, 189, 189)' }}>
									<div className="card-header bg-dark">
										<div className="text-center">
										
											<h1 className=" text-gray-900 mb-1 shorooq gold" style={{ fontSize: '28px' }}>تسجيل دخول لخدمات
                            البوابة الالكترونية</h1>
										</div>
									</div>
									<div className="card-body p-0 ">
										{/* Nested Row within Card Body */}
										<div className="row">
											<div className="col-lg-8 p-5 text-center">
												<h1 className=" text-gray-900 mb-4 gold" style={{ fontSize: '16px', lineHeight: '30px' }}>ادخل اسم المستخدم وكلمة السر
                                  للدخول الى خدمات البوابة اﻹلكترونية</h1>
												{wrongCredintials &&
													<div className="alert alert-danger" role="alert">
														اسم المتسخدم / كلمة المرور غير صحيحة!
												</div>
												}
												{isFieldEmpty &&
													<div className="alert alert-danger" role="alert">
														مطلوب اسم المستخدم / كلمة المرور!
												</div>
												}
												<form className="user" onSubmit={handleSubmit}>
													<div className="form-group">
														<input value={username} type="email" className="form-control form-control-user"
															onChange={e => setUsername(e.target.value)}
															id="exampleInputEmail" aria-describedby="emailHelp" placeholder="ادخل اسم المستخدم" />
													</div>
													<div className="form-group">
														<input value={password} type="password" className="form-control form-control-user"
															onChange={e => setPassword(e.target.value)}
															id="exampleInputPassword" placeholder="ادخل كلمة السر " />
													</div>
													<div className="row justify-content-between">
														<button className="btn btn-primary btn-user  shorooq " style={{ fontSize: '22px' }}> تسجيل الدخول الى النظام  </button>
														<button  className="btn btn-info btn-user shorooq " style={{ fontSize: '22px' }} onClick={handleNewUser}> تسجيل مستخدم جديد </button>
													</div>
													{loginstate.hasError &&
													<div className="alert alert-danger" role="alert">
														يوجد خطا فى كلمه واسم المرور
												</div>
												}
												</form>
											</div>
											<div className="col-lg-4 d-none d-lg-block text-center my-auto" style={{ backgroundColor: 'transparent' }}>
												<img className="img-fluid" src={process.env.PUBLIC_URL + 'img/kwtman.png'} alt="" width="80%" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			}
			{userAuth.isLoggedIn &&
				<Redirect
					to={{
						pathname: "/newApp",
					}}
				/>
			}
			
		</Layout>
	);
};

export default Login;