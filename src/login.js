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
		this.submitUserDetails = this.submitUserDetails.bind(this);
		this.updateLoginName = this.updateLoginName.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.goToRegistertaion = this.goToRegistertaion.bind(this);
	}	
	verifyLoginDetails = (personDetails) =>
	{	
		if(personDetails.userName === this.state.userName && personDetails.password === this.state.password)
		{
			localStorage.setItem("currentUser", JSON.stringify(personDetails));
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
		if(!this.status.isLogin){
			alert("Invalid username or password");
			const loginElem = document.getElementById("loginForm");
			if( loginElem !== 'undefined' && loginElem !== null) {
				loginElem.reset();
				return false;
			}
		} else {
			alert("Login SUCCESS");
			return true;
		}	
	}

	submitUserDetails(e) {
		this.status.isLogin = false; //by default isLogin false..
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
			<div style={{backgroundColor:'red', height: '370px'}} data-test="login">
				<div className="loginBox">
					<h2 className="pageHeader">Login</h2>
					<form id="loginForm">
						<Input type="text" id="name" onChange={this.updateLoginName} placeholder="Enter Login Name"/>
						<Input id="password" type="password" onChange={this.updatePassword} placeholder="Enter Password"/>
						<Input type="button" className="submitButton" value="submit" onClick={this.submitUserDetails}/>
					</form>
				</div>
				<p style={{color:'white'}}>New User? <span style={{textDecoration: 'underline'}} onClick={this.goToRegistertaion}>Registeration</span></p>
			</div>
		</Div>)
	}
}
export default Login;
