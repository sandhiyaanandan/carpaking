import React from 'react';
//import Registeration from './registeration';
import {Input, Div} from './StyledComponents';
import './App.css';
import {TOTAL_AVAILABLE_SPACE} from './constants';

class Login extends React.Component
{	
	constructor(props)
	{
		super(props);
    	this.state={userName:"", password:""};
    	this.status={isError:false, isLogin: true, isParkingSpaceAvail:false};
		this.loginUserDetails = this.loginUserDetails.bind(this);
		this.updateLoginName = this.updateLoginName.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}	

	
	isLoginStatus()
	{
		this.validateUserName();
		this.valiadtePassword();
		console.log("----this.isError---"+this.isError);
		if(!this.status.isError)
		{
			var regiteredDetails = localStorage.getItem("regDetails");
			if(regiteredDetails !== null) {
				var custDetails = JSON.parse(regiteredDetails); 
				if (custDetails.length > 0 )
				{
					if(!((custDetails.find(custDetails => custDetails.userName === this.state.userName))&&(custDetails.find(custDetails => custDetails.password === this.state.password))))
					{
						//this.setState({loginStatus:false});
						this.status.isLogin = false;
					} else {
						localStorage.setItem("currentUserCarNumber", custDetails.carNumber);
					}
				}
			}
			this.status.isError=false; // set error to default value false
		} else {
			this.status.login = false;
			//this.setState({loginStatus:false});
		}
		console.log("-----loginStatus----"+this.state.loginStatus);
		if(!this.status.isLogin){
			alert("Invalid username or password");
			document.getElementById("loginForm").reset();
			return false;
		} else {
			return true;
		}	
	}

	loginUserDetails(e) {
		if(this.isLoginStatus())
		 {
			var spaceAvailable = localStorage.getItem('no_available_space');
			if( (spaceAvailable >=0 ) && (spaceAvailable <= TOTAL_AVAILABLE_SPACE)) 
			{
				//parking can be opened when space is available
				//this.setState({isParkingSpaceAvail:true});
				this.status.isParkingSpaceAvail = true;
			} else {
				alert("Sorry..Parking is full");
				//this.setState({isParkingSpaceAvail:false});
				this.status.isParkingSpaceAvail = false;
			}
		}
	}

	 validateUserName()
	 {	
	 	const uName = this.state.userName;
	 	const regUnameEx = /^(?=.*[A-Z])(?=.*[a-z])\w{5,10}$/;
	 	if(uName === "") {
	 		alert("Didn't enter a username");
			this.status.isError=true; 
		} else if (!(regUnameEx.test(uName))) {
			alert("Enter Username length atleast 5 and max 10.At least\n"+
			 "one lowercase and one uppercase letter");
			this.status.isError=true; 
		} else {
			this.status.isError=false; 
		}
	}

	 valiadtePassword()
	 {
	 	const pwd = this.state.password;
	 	 /* at least one number, one lowercase and one uppercase letter
    	 at least six characters that are letters, numbers or the underscore */
    	const regPwdEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)\w{6,12}$/;
	 	if(pwd === "") {
			this.status.isError=true; 
			alert("Didn't enter a password");
		} else if ( !(regPwdEx.test(pwd))) {
			alert("Enter password length atleast 6 and max 12.At least one number,\n"+
			 "one lowercase and one uppercase letter");
			this.status.isError=true; 
		} else {
			this.status.isError=false; 
		}
	}
	updateLoginName(e)
	{
		this.setState({userName:e.target.value});
	}
	updatePassword(e)
	{
		this.setState({password:e.target.value});
	}
	render()
	{
		return(<Div>
			<div style={{backgroundColor:'red', marginTop:'-79px', height: '384px'}}>
				<div className="loginBox">
					<h2 className="pageHeader">Login</h2>
					<form id="loginForm">
						<Input type="text" onChange={this.updateLoginName} placeholder="Enter Login Name" required/>
						<Input type="password" onChange={this.updatePassword} placeholder="Enter Password" required/>
						<Input type="button" className="submitButton" value="submit" onClick={this.loginUserDetails}/>
					</form>
				</div>
			</div>
		</Div>)
	}
}
export default Login;
