	export function validateUserOrCarName(ucName)
	 {	
	 	let isError = false;
	 	const regUnameEx = /^(?=.*[A-Z])(?=.*[a-z])\w{5,10}$/;
	 	if(ucName === "") {
	 		alert("Didn't enter a username/CarName");
			isError=true; 
		} else if (!(regUnameEx.test(ucName))) {
			alert("Enter Username/CarName length atleast 5 and max 10.At least\n"+
			 "one lowercase and one uppercase letter");
			isError=true; 
		} else {
			isError=false; 
		}
		return isError;
	}

	export function valiadtePassword(pwd)
	 {
	 	let isError = false;
	 	 /* at least one number, one lowercase and one uppercase letter
    	 at least six characters that are letters */
    	const regPwdEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)\w{6,12}$/;
	 	if(pwd === "") {
			isError=true; 
			alert("Didn't enter a password");
		} else if ( !(regPwdEx.test(pwd))) {
			alert("Enter password length atleast 6 and max 12.At least one number,\n"+
			 "one lowercase and one uppercase letter");
			isError=true; 
		} else {
			isError=false; 
		}
		console.log("----vupwd---"+isError);
	}

	export function validatePasswordMatching(password, confirmPwd)
	{
		if( password !== confirmPwd )
		{
			return false;
       	} else {
       		return true;
       	}
	}
	
	export function validateCarNumber(carNumber)
	{
		/*car number should contain 10 chars:
			1. 1-2 chars --> letters (caps)
			2. 3-4 chars --> numbers 
			3. 5-6 chars --> letters ( caps)
			4. 7-10 chars --> letters
		*/
		const pattern = /[A-Z]{2}\/[0-9]{2}\/[A-Z]{2}\/\d{4}$/i;
 		const result = pattern.test(carNumber); 
 		return result;
	}	