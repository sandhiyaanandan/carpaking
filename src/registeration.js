import React from 'react';
import {Input, Div} from './StyledComponents';
import {validateUserOrCarName, valiadtePassword, validateCarNumber, validatePasswordMatching} from './utils';
class Registeration extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={userName:"", password:"", carName:"", carNumber:"", confirmPwd:"",parkingPos:-1};
		this.isError=false;
		this.setValue = this.setValue.bind(this);
		this.submitRegister = this.submitRegister.bind(this);
		this.setName = this.setName.bind(this);
	}

	submitRegister(){
		let custDetails = [];
		const {userName, password, confirmPwd, carName, carNumber} = this.state;
		const isUnameErr = validateUserOrCarName(userName);
		const isPwdErr = (valiadtePassword(password) && validatePasswordMatching(password, confirmPwd));
		const isCarNumErr = validateCarNumber(carNumber);
		const isCarNameErr = validateUserOrCarName(carName);

		if(!(isUnameErr || isPwdErr || isCarNumErr || isCarNameErr)) {
			let obj = {userName: userName, password: password, carName: carName, carNumber: carNumber, parkingPos:-1};

			var regiteredDetails = localStorage.getItem("regDetails");
			if(regiteredDetails !== null) {
				 custDetails = JSON.parse(regiteredDetails); 
				if (custDetails.length > 0 )
				{
					custDetails.push(obj);
				}
			} else {
				custDetails.push(obj);
			}

			localStorage.setItem('regDetails',JSON.stringify(custDetails));
			alert("Registeration SUCCESS..Please Login to Continue");
			this.props.history.push("/Login");
		} else {
			alert("Registeration FAILED..Try Again");
			document.getElementById("regForm").reset();
		}	
	}
	
	setValue(e){
    	this.setState({[e.target.name]:e.target.value});
  	}
  
  setName(e){
  	this.setState({userName:e.target.value});
  }
	render()
	{
		return(<Div>
			<div style={{backgroundColor:'green'}}>
				<div className="loginBox" style={{backgroundColor:'blue', border: '10px solid blue'}}>
					<h2 className="pageHeader">Register</h2>
					<form id="regForm" style={{marginTop:'10%'}}>
						<div onChange={this.setValue}>
						<Input type="text"  onChange={this.setName} name = "userName" placeholder="Enter User Name"/>
						<Input type="password" name="password" placeholder="Enter Password"/>
						<Input type="password" name="confirmPwd" placeholder="Enter Confirm Password"/>
						<Input type="text" name="carName"  placeholder="Enter Carname"/>
						<Input type="text" name="carNumber" placeholder="Enter CarNumber"/>
						</div>
						<Input type="button" className="submitButton" style={{marginTop:'20%'}} value="Register" onClick={this.submitRegister}/>
					</form>
				</div>
			</div>
	</Div>)
	}
}
export default Registeration;