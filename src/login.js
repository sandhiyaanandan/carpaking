import React from 'react';
import Parking from './Parking';
import Registeration from './registeration';
import {Input, Div} from './StyledComponents';
import propTypes from 'prop-types';
import './App.css';
import {TOTAL_AVAILABLE_SPACE} from './constants'

class Login extends React.Component
{	
	constructor(props)
	{
		super(props);
		
    	this.state={flag:true, userName:"", password:"", loginStatus: true, isParkingSpaceAvail:false};
		this.loginUserDetails = this.loginUserDetails.bind(this);
		this.updateLoginName = this.updateLoginName.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}	

	 isUNameFormatValid()
	{

	}

	isPwdFormatValid()
	{

	}

	isLoginStatus()
	{
		var regiteredDetails = localStorage.getItem("regDetails");
		if(regiteredDetails !== null) {
			var custDetails = JSON.parse(regiteredDetails); 
			if (custDetails.length > 0 )
			{
				if(!((custDetails.find(custDetails => custDetails.userName === this.state.userName))&&(custDetails.find(custDetails => custDetails.password === this.state.password)))){
					this.setState({loginStatus:false});
				}
				else {
					localStorage.setItem("currentUserCarNumber", custDetails.carNumber);
				}
			}
		} else {
			this.setState({loginStatus:false});
		}

		if(!this.state.loginStatus){
			alert("Invalid username or password");
		}
	}


	loginUserDetails(e) {
		this.isUNameFormatValid();
		this.isPwdFormatValid();
		this.isLoginStatus();
		
		var spaceAvailable = localStorage.getItem('no_available_space');
		if( (spaceAvailable >=0 ) && (spaceAvailable <= TOTAL_AVAILABLE_SPACE)) {
			//parking can be opened when space is available
			this.setState({isParkingSpaceAvail:true});
		} else {
			alert("Sorry..Parking is full");
			this.setState({isParkingSpaceAvail:false});
		}
		document.getElementById("loginForm").reset();
	}

	 updateLoginName(e){
	 	if(this.isUNameFormatValid){
			this.setState({userName:e.target.value});
	 	}
		else
		{
			//display alert and clear username field
		}

	}

	 updatePassword(e){
	 	if(this.isPwdFormatValid){
	 		this.setState({password:e.target.value});
	 	}else {
	 		//display alert and clear password field
	 		
	 	}
	}
	render()
	{
		return(<Div>
			<h1 className="header">Car Parking</h1>
			<div style={{backgroundColor:'red'}}>
				<div className="loginBox">
					<h2 className="loginHeader">Login</h2>
					<form id="loginForm">
						<Input type="text" onChange={this.updateLoginName} placeholder="Enter Login Name"/>
						<Input type="password" onChange={this.updatePassword} placeholder="Enter Password"/>
						<Input type="button" className="submitButton" value="submit" onClick={this.loginUserDetails}/>
					</form>
				</div>
			</div>
		<div className="content">
			<p style={{color:'white',marginTop:'0%',paddingTop:'2%'}}>New User? </p>
			<Registeration/>
 		</div>
 		{this.state.isParkingSpaceAvail && <Parking/>}
	</Div>)
	}
}
Login.propTypes={
  		flag:propTypes.bool,
  		userName:propTypes.string,
  		password:propTypes.string
	}	
export default Login;