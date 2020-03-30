import React, {useState} from 'react';
import Login from './login';
function Parking()
{
	const TOTAL_AVAILABLE_SPACE = 25;
	let parkingBox = [];
	let no_available_space = TOTAL_AVAILABLE_SPACE;
	const [selected, setSelected] = useState(true);
	const isParkingSelected=() => {
		let isCarParked = document.activeElement.style;
		if(isCarParked.backgroundColor === "" || isCarParked.backgroundColor === "white") {
			isCarParked.backgroundColor = "yellow";
			if( no_available_space > 0 ) no_available_space--;
		} else {
			isCarParked.backgroundColor = "white";
			if( no_available_space >= 0 ) no_available_space++;
		}
		localStorage.setItem('no_available_space', no_available_space);
	}
	for( let space = 0; space < TOTAL_AVAILABLE_SPACE; space++)
	{
		if( space % 5 == 0 )
			parkingBox.push(<br/>);
		parkingBox.push(<input type="button" className="box" onClick={isParkingSelected}/>);
	}
	return(<div style={{backgroundColor:'red'}}>
		<h1 className="pageHeader" style={{color:'white'}}>Parking Area</h1>
		<div className="parkingArea" >
			{parkingBox}
		</div>
		<Login/>
	</div>)	
}
export default Parking;