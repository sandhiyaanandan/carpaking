import React from 'react';
import {Input, Div} from './StyledComponents';
import {validateUserOrCarName, valiadtePassword, validateCarNumber, validatePasswordMatching} from './utils';
class Registeration extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={userName:"", password:"", carName:"", carNumber:"", confirmPwd:"",details:[]};
		this.isError=false;
		this.setValue = this.setValue.bind(this);
		this.submitRegister = this.submitRegister.bind(this);
	}

	submitRegister(){
		const {userName, password, confirmPwd, carName, carNumber, details} = this.state;
		const isUnameErr = validateUserOrCarName(userName);
		const isPwdErr = (valiadtePassword(password) && validatePasswordMatching(password, confirmPwd));
		const isCarNumErr = validateCarNumber(carNumber);
		const isCarNameErr = validateUserOrCarName(carName);
		console.log("--isUnameErr--"+isUnameErr);
		console.log("==isCarNameErr=="+isCarNameErr);

		if(!(isUnameErr || isPwdErr || isCarNumErr || isCarNameErr)) {
			console.log("==sr=name="+this.state.userName+"=pwd="+password);
			console.log("==sr=name="+this.state.carName+"=pwd="+carNumber);
			let obj = {userName: userName, password: password, carName: carName, carNumber: carNumber};
			details.push(obj);
			localStorage.setItem('regDetails',JSON.stringify(details));
			alert("Registeration SUCCESS..Please Login to Continue");
			this.props.history.push("/Login");
		} else {
			alert("Registeration FAILED..Try Again");
			document.getElementById("regForm").reset();
		}	
	}
	
	setValue(e){
    	console.log("---name--"+e.target.name+"--val--"+e.target.value);
    	this.setState({[e.target.name]:e.target.value});
  	}
  
	render()
	{
		return(<Div>
			<div style={{backgroundColor:'green'}}>
				<div className="loginBox" style={{backgroundColor:'blue', border: '10px solid blue'}}>
					<h2 className="pageHeader">Register</h2>
					<form id="regForm" style={{marginTop:'10%'}}>
						<div onChange={this.setValue}>
						<Input type="text" name="userName" placeholder="Enter User Name"/>
						<Input type="password"  name="password" placeholder="Enter Password"/>
						<Input type="password" name="confirmPwd" placeholder="Enter Confirm Password"/>
						<Input type="text" name="carName" onChange={this.setCarName} placeholder="Enter Carname"/>
						<Input type="text" name="carNumber" onChange={this.setCarNumber} placeholder="Enter CarNumber"/>
						</div>
						<Input type="button" className="submitButton" style={{marginTop:'20%'}} value="Register" onClick={this.submitRegister}/>
					</form>
				</div>
			</div>
	</Div>)
	}
}
export default Registeration;