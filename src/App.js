import React from 'react';
import Registeration from './Registeration';
import Parking from './Parking';
import Login from './Login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

function App() {
  var obj = {logg:true, reg:false, park:false};
  const loggi = () =>
  {
    console.log("====loggi====");
    document.activeElement.style.display="none";  ///make this as none when loading component
  }

  return (
    <div>
    	<h1 className="header">Car Parking</h1>
      <Router>
       <div>
       		<ul>{obj.logg && <li><Link to="/Login" onClick={loggi}>Login</Link></li>}
        	{obj.reg && <li><Link to="/Registeration" onClick={loggi}>Registeration</Link></li>}
        	{obj.park && <li><Link to="/Parking" onClick={loggi}>Parking</Link></li>}</ul>
        	<Switch>
          		<Route path='/Login' component={Login}></Route>
          		<Route path='/Registeration' component={Registeration}></Route>
          		<Route path='/Parking' component={Parking}></Route>
        	</Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

