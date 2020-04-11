import React from 'react';
import {Input, Div} from './StyledComponents';
import './App.css';
import {TOTAL_AVAILABLE_SPACE} from './constants';

class Login extends React.Component
{	
	constructor(props)
	{
		super(props);
    	this.state={userName:"", password:""};
    	this.status={isLogin: false};
		this.loginUserDetails = this.loginUserDetails.bind(this);
		this.updateLoginName = this.updateLoginName.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.goToRegistertaion = this.goToRegistertaion.bind(this);
	}	

	verifyLoginDetails = (personDetail) => {
		console.log("===verifyLoginDetails====");
		//const {userName, password} = this.state;
		this.status.isLogin = false; //by default isLogin false..
		if(personDetail.userName === this.state.userName && personDetail.password === this.state.password)
		{
			localStorage.setItem("currentUserCarNumber", personDetail.carNumber);
			this.status.isLogin = true;
		}
	}
	
	isLoginStatus= ()=> {
		var regiteredDetails = localStorage.getItem("regDetails");
		if(regiteredDetails !== null) {
			var custDetails = JSON.parse(regiteredDetails); 
			if (custDetails.length > 0 )
			{
				custDetails.find(this.verifyLoginDetails);
			}
		}
		console.log("-----loginStatus----"+this.status.isLogin);
		if(!this.status.isLogin){
			alert("Invalid username or password");
			document.getElementById("loginForm").reset();
			return false;
		} else {
			alert("Login SUCCESS");
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
				this.props.history.push("/Parking");
			} else {
				alert("Sorry..Parking is full");
				document.getElementById("loginForm").reset();
			}
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
	goToRegistertaion()
	{
		this.props.history.push("/Registeration");
	}
	render()
	{
		return(<Div>
			<div style={{backgroundColor:'red', height: '370px'}}>
				<div className="loginBox">
					<h2 className="pageHeader">Login</h2>
					<form id="loginForm">
						<Input type="text" onChange={this.updateLoginName} placeholder="Enter Login Name"/>
						<Input type="password" onChange={this.updatePassword} placeholder="Enter Password"/>
						<Input type="button" className="submitButton" value="submit" onClick={this.loginUserDetails}/>
					</form>
				</div>
				<p style={{color:'white'}}>New User? <span style={{textDecoration: 'underline'}} onClick={this.goToRegistertaion}>Registeration</span></p>
			</div>
		</Div>)
	}
}
export default Login;
