import React from 'react';
import Login from './login'; 
import {Input, Div} from './StyledComponents';
import propTypes from 'prop-types';
class Registeration extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={data:{flag:true, userName:"", password:"", carName:"", carNumber:""},details:[]};
		this.setUserName = this.setUserName.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.setCarName = this.setCarName.bind(this);
		this.setCarNumber = this.setCarNumber.bind(this);
		this.submitRegister = this.submitRegister.bind(this);
	}

	submitRegister(){
		if(this.state.flag)
		{
			//setFlag(!flag); 
		}
		console.log("==sr=name="+this.state.userName+"=pwd="+this.state.password);
		console.log("==sr=name="+this.state.carName+"=pwd="+this.state.carNumber);
var obj = {userName:this.state.userName, password:this.state.password, carName: this.state.carName, carNumber:this.state.carNumber};
		this.state.details.push(obj);
		localStorage.setItem('regDetails',JSON.stringify(this.state.details));
		//localStorage.setItem('no_available_space', no_available_space);
		document.getElementById("regForm").reset();
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
			<div style={{backgroundColor:'green'}}>
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
			<Login/>
	</Div>)
	}
}
Registeration.propTypes={
  	userName:propTypes.string.isRequired,
  	pasword:propTypes.string.isRequired,
  	carName:propTypes.string.isRequired,
  	carNumber:propTypes.string.isRequired
}	
export default Registeration;