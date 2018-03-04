var letters = /^[A-Za-z]+$/;
var number = /^[0-9]+$/;
function ValidateForm() {
		var errorMessages = "<ul>"; 
		var valid = true;

		var first = myContact.first.value;
		var last = myContact.last.value;
		var email = myContact.email.value;
		var phone = myContact.phone.value;
		var username = myContact.username.value;

		var address = myContact.address.value;
		var city = myContact.city.value;
		var country = myContact.country.value;
		var zipcode = myContact.zipcode.value;
		
		
		//NOT CHECKING LENGTH AT ALL BECAUSE HTML ALREADY DID IT
		if ((Empty(first)) || !checkLetter(first)) {
			errorMessages += "<li>First name is required and only accept letters.</li>";
			valid = false;
		}
		
		if ((Empty(last)) || !checkLetter(last)) {
			errorMessages += "<li>Last name is required and only accept letters.</li>";
			valid = false;
		}

		if ((Empty(email)) || (!validateEmail(email))) {
			errorMessages += "<li>Email is invalid.</li>";
			valid = false;	
		}

		if ((Empty(phone)) || (!checkNumber(phone))) {
			errorMessages += "<li>Phone is required and only accept numbers.</li>";
			valid = false;	
		}
		if (Empty(username)) {
			errorMessages += "<li>Username is required.</li>";
			valid = false;
		}
		if (Empty(password)) {
			errorMessages += "<li>Password is required.</li>";
			valid = false;
		}

		if (Empty(address)) {
			errorMessages += "<li>Address is required.</li>";
			valid = false;
		}
		if (Empty(city)) {
			errorMessages += "<li>City is required.</li>";
			valid = false;
		}
		if (Empty(country)) {
			errorMessages += "<li>Country is required.</li>";
			valid = false;
		}
		else if (country === "United States") {
			if (Empty(zipcode)) {
			errorMessages += "<li>Zipcode is required for USA residents.</li>";
			valid = false;
		}
		}
		

		errorMessages += "</ul>";
		document.getElementById("errorMessages").innerHTML = errorMessages;
		// Make sure you return all the boolean variables that are checking each field
		return (valid);
	}
function validateEmail(item) {
    
   	var atpos = item.indexOf("@");
    var dotpos = item.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=item.length) {
       	
        return false;
    }
    return true;
}
function Empty(item) {
	return (item === null || item ==="");
}
function checkLetter(item) {
	return (item.match(letters));
}
function checkNumber(item) {
	return (item.match(number));
}
