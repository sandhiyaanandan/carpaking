import React from 'react';
import Login from './login'; 
import App from './App';
import {Input, Div} from './StyledComponents';
import PropTypes from 'prop-types';
import Parking from './Parking';
import {withRouter} from 'react-router';
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

		//var obj = {userName:this.state.userName, password:this.state.password, carName: this.state.carName, CarNumber:this.state.CarNumber};
		this.state.details.push(this.state.data);
		localStorage.setItem('regDetails',JSON.stringify(this.state.details));
		//localStorage.setItem('no_available_space', no_available_space);

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
						<Input type="text" style={{marginTop:'10%'}} onChange={this.setUserName} placeholder="Enter User Name"/>
						<Input type="password" style={{marginTop:'10%'}} onChange={this.setPassword} placeholder="Enter Password"/>
						<Input type="text" style={{marginTop:'10%'}} onChange={this.setCarName} placeholder="Enter Carname"/>
						<Input type="text" style={{marginTop:'10%'}} onChange={this.setCarNumber} placeholder="Enter CarNumber"/>
						<Input type="button" className="submitButton" style={{marginTop:'20%'}} value="Register" onClick={this.submitRegister}/>
				</div>
			</div>
	</Div>)
	}
}
Registeration.propTypes={
  	userName:PropTypes.string.isRequired,
  	pasword:PropTypes.string.isRequired,
  	carName:PropTypes.string.isRequired,
  	carNumber:PropTypes.string.isRequired
}	
export default withRouter(Registeration);