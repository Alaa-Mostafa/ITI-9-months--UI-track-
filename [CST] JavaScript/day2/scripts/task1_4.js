/*
    1.4 Write a script that reads from the user his info; 
            validates and displays it with a welcoming message in console.

        Use coloring format according to user’s choice. 
        The user has to choose either red, green or blue color, take his choice via prompt.
*/

var finish_loop = false;

// ================================================== username
do
{
    var user_name = prompt("Enter your name");
    var user_name_reg = /^[a-z]+$/ig;

    if(!user_name_reg.test(user_name))
        alert("Invalid username (it should be characters only)");
    else
        finish_loop = true;

}while(finish_loop == false);


// ==================================================  phone number
finish_loop = false;

do
{
    var phone_number = prompt("Enter your phone number");
    var phone_number_reg = /^[0-9]{8}$/;

    if(!phone_number_reg.test(phone_number))
        alert("Invalid phone number (it should be numbers only with 8 digits)");
    else
        finish_loop = true;

}while(finish_loop == false);


// ==================================================  mobile number
finish_loop = false;

do
{
    var mobile_number = prompt("Enter your mobile number");
    var mobile_number_reg = /^[0-9]{11}$/;
    var mobile_number_reg_start = /^010|011|012/;

    if((mobile_number_reg.test(mobile_number) && mobile_number_reg_start.test(mobile_number)) == false)
        alert("Invalid mobile number");
    else
        finish_loop = true;

}while(finish_loop == false);


// ==================================================  email
finish_loop = false;

do
{
    var email = prompt("Enter your email");
    var email_reg = /[a-z]?[0-9]?@[a-z]+.[a-z]+/i;

    //alaa99@gmail.com      alaa.m.mostafa.kamel@gmail.com  alaaloli99@yahoo.com  alaa2017170076@cis.asu.edu.eg

    if(!email_reg.test(email))
        alert("Invalid email");
    else
    {
        finish_loop = true;
        email = email.toLowerCase();  // incase the user entered capital letters in mail
    }
       

}while(finish_loop == false);

// ==================================================  coloring
var color_choice = prompt("Choose color [1-red 2-green 3-blue]");
var color;

switch (parseInt(color_choice))
{
    case 1:
        color = "red";
        break;
    
    case 2:
        color = "green";
        break;

    case 3:
        color = "blue";
        break;
}

console.log("%cEntering user info", "font-size:30pt;");

// console.log("two strings", "string one (label)", string 1 styling, "string 2", string 2 styling)
// first string with styling: "%c Welcome dear guest ", "font-size:20pt; color:"+color+";"
// second string with styling: "%c" + user_name, "font-size:20pt;"
console.log("%s %s", "%c Welcome dear guest ","font-size:20pt; color:"+color+";", "%c" + user_name, "font-size:20pt;");

console.log("%s %s", "%c Your telephone number is ","font-size:20pt; color:"+color+";", "%c" + phone_number, "font-size:20pt;");
console.log("%s %s", "%c Your mobile number is ","font-size:20pt; color:"+color+";", "%c" + mobile_number, "font-size:20pt;");
console.log("%s %s", "%c Your email address is ","font-size:20pt; color:"+color+";", "%c" + email, "font-size:20pt;");