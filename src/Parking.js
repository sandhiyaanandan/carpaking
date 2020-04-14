import React from 'react';
import {TOTAL_AVAILABLE_SPACE} from './constants';
import {useHistory } from "react-router-dom";
function Parking()
{
	let parkingBox = [];
	let no_available_space = TOTAL_AVAILABLE_SPACE;
	const history = useHistory();
	var flag = false;

	const isParkingSelected = (e) => {
		let alertMsg="";
		var cUsrDetails =null;
		let isCarParked = document.activeElement.style;
		var curUser = localStorage.getItem("currentUser");
		if(curUser !== null) {
			cUsrDetails = JSON.parse(curUser); 
		}
		if(isCarParked.backgroundColor === "" || isCarParked.backgroundColor === "white") {
			isCarParked.backgroundColor = "yellow";
			if(cUsrDetails.length > 0) {
				cUsrDetails.parkingPos =  e.target.value;
			}
			if( no_available_space > 0 ) {
				alertMsg = "Car IN";
			} no_available_space--;
		} else {
			//Get carnumber from user and check in local storage...if available change color to white
			var userCarNumber  = prompt("Please enter your carNumber");
			if ( cUsrDetails.carNumber === userCarNumber )
			{
				cUsrDetails.parkingPos = -1;
				alertMsg = "Car OUT";
				isCarParked.backgroundColor = "white";
				if( no_available_space >= 0 ) {
					no_available_space++;
				}
			} else {
				alertMsg = "Try again. Please provide registered carNumber";
				history.push("/Login");
			}
		}
		alert(alertMsg);
		var regiteredDetails = localStorage.getItem("regDetails");
		let custDetails =[];
		if(regiteredDetails !== null) {
			 custDetails = JSON.parse(regiteredDetails); 
			if (custDetails.length > 0 )
			{
				custDetails.push(cUsrDetails);
			} else {
				custDetails.push(cUsrDetails);
			}
		}

		localStorage.setItem('regDetails', JSON.stringify(custDetails));
		localStorage.setItem('no_available_space', no_available_space);
	}
	
	const allUser = localStorage.getItem("regDetails");
	if(allUser !== null) {
		var cDetails = JSON.parse(allUser); 
		if (cDetails.length > 0 )
		{
			flag = true; 
		} else {
			 flag = false;
		}
	}
	for( let pos = 0; pos < TOTAL_AVAILABLE_SPACE; pos++)
	{
		if( pos % 5 === 0 )
			parkingBox.push(<br/>);
		if((flag)&& (cDetails.find((detail) => {return detail.parkingPos === pos;})))
		{
			parkingBox.push(<input type="button" style={{backgroundColor:'yellow'}} value={pos} className="box" onClick={isParkingSelected}/>);
		}
		else {
			parkingBox.push(<input type="button" value={pos} className="box" onClick={isParkingSelected}/>);
		}
	}

	return(<div style={{backgroundColor:'red'}}>
		<h1 className="pageHeader" style={{color:'white'}}>Parking Area</h1>
		<div className="parkingArea" >
			{parkingBox}
		</div>
	</div>)	
}
export default Parking;