import React from 'react';
import {TOTAL_AVAILABLE_SPACE} from './constants';
import Login from './Login';
function Parking()
{
	let parkingBox = [];
	let no_available_space = TOTAL_AVAILABLE_SPACE;
	
	const isParkingSelected=() => {
		let isCarParked = document.activeElement.style;
		if(isCarParked.backgroundColor === "" || isCarParked.backgroundColor === "white") {
			isCarParked.backgroundColor = "yellow";
			if( no_available_space > 0 ) {
			} no_available_space--;
		} else {
			//Get carnumber from user and check in local storage...if available change color to white
			var regCarNumber = localStorage.getItem("currentUserCarNumber");
			var userCarNumber  = prompt("Please enter your carNumber");
			if ( regCarNumber === userCarNumber )
			{
				alert("Thank you for using Car Parking..");
				isCarParked.backgroundColor = "white";
				if( no_available_space >= 0 ) {
					no_available_space++;
				}
			} else {
				alert("Try again. Please provide registered carNumber");
				//this.props.history.push("/Login");
				document.history.push("/Login");
			}
		}
		localStorage.setItem('no_available_space', no_available_space);
		document.history.push("/Login");
	}
	
	for( let parkingSpace = 0; parkingSpace < TOTAL_AVAILABLE_SPACE; parkingSpace++)
	{
		if( parkingSpace % 5 === 0 )
			parkingBox.push(<br/>);
		parkingBox.push(<input type="button" className="box" onClick={isParkingSelected}/>);
	}

	return(<div style={{backgroundColor:'red'}}>
		<h1 className="pageHeader" style={{color:'white'}}>Parking Area</h1>
		<div className="parkingArea" >
			{parkingBox}
		</div>
	</div>)	
}
export default Parking;