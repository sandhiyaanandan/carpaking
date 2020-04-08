import React from 'react';
import Login from './Login'; 
import {Input, Div} from './StyledComponents';
class Registeration extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={data:{flag:true, userName:"", password:"", carName:"", carNumber:""},details:[]};
		this.isError=false;
		this.setUserName = this.setUserName.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.setCarName = this.setCarName.bind(this);
		this.setCarNumber = this.setCarNumber.bind(this);
		this.submitRegister = this.submitRegister.bind(this);
	}

	submitRegister(){
		this.validateUserName();
		this.valiadtePassword();
		this.validateCarNumber();
		console.log("==sr=name="+this.state.userName+"=pwd="+this.state.password);
		console.log("==sr=name="+this.state.carName+"=pwd="+this.state.carNumber);
		var obj = {userName:this.state.userName, password:this.state.password, carName: this.state.carName, carNumber:this.state.carNumber};
		this.state.details.push(obj);
		localStorage.setItem('regDetails',JSON.stringify(this.state.details));
		//localStorage.setItem('no_available_space', no_available_space);
		document.getElementById("regForm").reset();
	}

	validateUserName()
	 {	
	 	const uName = this.state.userName;
	 	if(uName === "") {
	 		alert("Didn't enter a username");
			this.isError=true; 
		} else if (uName.length < 5 && uName.length > 15 ) {
			this.isError=true; 
			alert("Enter user name length from 5 to 15");
		} else {
			this.isError=false; 
		}
	}

	 valiadtePassword()
	 {
	 	const pwd = this.state.password;
	 	if(pwd === "") {
			this.isError=true; 
			alert("Didn't enter a password");
		} else if (pwd.length < 5 && pwd.length > 15 ) {
			alert("Enter password length from 5 to 15");
			this.isError=true; 
		} else {
			this.isError=false; 
		}
	}

	setUserName(e){
		this.setState({userName:e.target.value});
	}
	setPassword = (e) => {
		this.setState({password:e.target.value});
	}
	setCarName = (e) => {
		this.setState({carName:e.target.value});
	}
	setCarNumber = (e) => {
		this.setState({carNumber:e.target.value});
	}
	render()
	{
		return(<Div>
			<div style={{backgroundColor:'green',marginTop:'-55px'}}>
				<div className="loginBox" style={{backgroundColor:'blue', border: '10px solid blue'}}>
					<h2 className="pageHeader">Register</h2>
					<form id="regForm">
						<Input type="text" style={{marginTop:'10%'}} onChange={this.setUserName} placeholder="Enter User Name"/>
						<Input type="password" style={{marginTop:'10%'}} onChange={this.setPassword} placeholder="Enter Password"/>
						<Input type="text" style={{marginTop:'10%'}} onChange={this.setCarName} placeholder="Enter Carname"/>
						<Input type="text" style={{marginTop:'10%'}} onChange={this.setCarNumber} placeholder="Enter CarNumber"/>
						<Input type="button" className="submitButton" style={{marginTop:'20%'}} value="Register" onClick={this.submitRegister}/>
					</form>
				</div>
			</div>
	</Div>)
	}
}

export default Registeration;