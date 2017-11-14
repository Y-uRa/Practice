var my_email = "-name@dom.zo";

function Regx(email){
	if(email && /^[a-z]+[a-z0-9-.]*@[a-z]+\.[a-z]+$/.test(str) && email.length() <= 100){
		return true;
	}
	return false;
}

//phone
    var phone='+380955542364';
function PhoneCheck(){
if(/[+](\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,14}(\s*)?$/.test(phone)){
    	console.log("phone number is correct");
    }else{
    	console.log("phone number is incorrect");
    }
}
PhoneCheck();



// Kaplich Validate

	// NAME

//		/^[a-zA-Zа-яА-Я\-\ 0-9]{1,50}$/

//		/^[a-zа-я\-\ 0-9]{1,50}$/i

	// PHONE

//		/^\+380[0-9]{9}$/

	// EMAIL

//		/^([a-z]+([0-9\-]+([a-z\-]+)*)*(\.[0-9a-z\-]+)*)\@[0-9a-zа-я\-]{2,63}\.[a-zа-я]{2,63}$/i

	// Description

//		/^[a-zA-Zа-яА-Я\-\ \,\.\!\?0-9]{2,500}$/

//		/^[a-zа-я\-\ \,\.\!\?0-9]{2,500}$/i