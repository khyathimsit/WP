function check()
{
    if(document.getElementById('details').value == '') 
    {      
        alert("Enter the comment!");
        return false;       
    }
    else {
        return true;
    }
    passwordvalidation();
}

function passwordvalidation() {
	var password1 = "1234";
	// var password2 = form1.psw.value;
	// console.log(password2);
	if(document.getElementById('psw').value !== password1) {
    	alert("Wrong Key!");
    	return true;
    }
    else {
        return false;
    }
}
