

function sendEmail() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('mess').value;

	console.log(name);
	console.log(email);
	console.log(message);
	if (name == '' || email == '' || message =='') {
		console.log("empty input");
	}else{
		Email.send({
		Host: "smtp.gmail.com",
		Username : "exmplee32@gmail.com",
		Password : "k2e0r0f1a",
		To : email,
		From : "exmplee32@gmail.com",
		Subject : "New customer "+name,
		Body : message,
		}).then(
			message => alert("mail sent successfully")
		);
	}
}
