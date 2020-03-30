import React, {useState} from 'react';
import Parking from './Parking';
import Registeration from './registeration';
import { BrowserRouter as Router, Route, Link,Switch, withRouter} from 'react-router-dom';
import {Input, Div} from './StyledComponents';
import PropTypes from 'prop-types';
import './App.css';

class Login extends React.Component
{	
	constructor(props)
	{
		super(props);
		this.state={flag:true, userName:"", password:""};
		this.loginUserDetails = this.loginUserDetails.bind(this);
		this.updateLoginName = this.updateLoginName.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}
	 loginUserDetails(e) {
		if( this.state.flag ) {
			this.setState({flag:!this.state.flag}); 
		}	
	}

	 updateLoginName(e){
		this.setState({userName:e.target.value});
	}

	 updatePassword(e){
		this.setState({password:e.target.value});
	}
	render()
	{
		return(<Div>
			<h1 className="header">Car Parking</h1>
			<div style={{backgroundColor:'red'}}>
				<div className="loginBox">
					<h2 className="loginHeader">Login</h2>
					<Input type="text" onChange={this.updateLoginName} placeholder="Enter Login Name"/>
					<Input type="password" onChange={this.updatePassword} placeholder="Enter Password"/>
					<Input type="button" className="submitButton" value="submit" onClick={this.loginUserDetails}/>
				</div>
			</div>
		<div className="content">
			<p style={{color:'white',marginTop:'0%',paddingTop:'2%'}}>New User? </p>
			<Router>
       				<ul><li><Link to="/registeration" style={{color:'white'}}>Register Here</Link></li></ul> 
       				<Switch>
        		  		<Route exact path='/registeration' component={withRouter(Registeration)}></Route>
       				</Switch>
 			</Router>
 		</div>
	</Div>)
	}
}
Login.propTypes={
  		flag:PropTypes.bool,
  		userName:PropTypes.string.isRequired,
  		password:PropTypes.string.isRequired
	}	
export default Login;