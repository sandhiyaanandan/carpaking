import React from 'react';
import Registeration from './registeration';
import Parking from './parking';
import Login from './login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div data-test='Parking-Header'>
    	<h1 className="header">Car Parking</h1>
      <Router>
       <div>	
        	<Switch>
              <Route exact path="/" component={Login}/>
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