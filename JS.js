var my_email = "-name@dom.zo";

function Regx(email){
	if(email && /^[a-z]+[a-z0-9-.]*@[a-z]+\.[a-z]+$/.test(str) && email.length() <= 100){
		return true;
	}
	return false;
}