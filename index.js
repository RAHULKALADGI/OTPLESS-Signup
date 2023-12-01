//So this is the function i am using for displaying a popup after successfull authentication.
//So this function will display entire details of user on screen as alert and as well as in console.

function otpless(otplessUser) {
    console.log(JSON.stringify(otplessUser))
    let name = otplessUser["email"]["name"];
    let email = otplessUser["email"]["email"];
    let number = otplessUser["waNumber"];
alert(`User Details :- 
Name = ${name}
Email = ${email}
Number = +${number}`);
}
//NOTE==> Here i have just taken name, email, number from the main user object and displaying them on screen as alert and rest all details i am printing in console