import React, { useState } from 'react'

import "../scss/login.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from './JS/userSlice/userSlice';
import logino  from "../assets/images/login.png";
import Navbar from './Navbar';
import loginimg from "../assets/images/loginimg.png";
import { Icon } from '@iconify/react';

const Login = ({ping ,setPing}) => {
	const user = useSelector(state => state.user.user)
	const isAuth = localStorage.getItem("token")
	const [login, setLogin] = useState({
		
		email:"",
		password:""
	  })
	const dispatch = useDispatch()
	let navigate = useNavigate();
	return (

       <>
	   
		<div className="wrapper">
		<div className="retour">
		<Link className='link-h' to="/"> < Icon className='link-i' icon="mdi:home-circle" color="red" width="50" height="50" /></Link>
	   </div>
				<form  onSubmit={(e)=> e.preventDefault()} className="form-signin">
				<div className="loginimg">
				<img src={loginimg} alt="" />
				</div>	
				<h2 className="form-signin-heading"> تسجيل الدخول</h2>
				<input onChange={(e)=> setLogin({...login,email:e.target.value}) } type="text" className="form-control"  placeholder="البريد الإلكتروني" />
				<input onChange={(e)=> setLogin({...login,password:e.target.value}) } type="password" className="form-control"  placeholder="كلمة العبور"  />
               <Link to="/">
				<button className="btn-primary"
				 onClick={()=>{dispatch(userLogin(login))
					setPing(!ping)
					setTimeout(() => {
						if(user?.isAdmin === true){
							navigate("/")
						}
							
						
					}, 500);

				 } }>تسجيل الدخول</button></Link>
				<Link to="/register" className='register' >اشتراك</Link>
			</form>
			<div className="image-login">
				<img src={logino} alt="login" />
			</div>
		</div>
		</>
	)
}

export default Login