/*
    1.2. Write a script to determine whether the entered string is palindrome or not. 
     Request the string to be entered via prompt,
     ask the user whether to consider case sensitivity of the entered string or not via confirm, 
     handle both cases in your script

    i.e. RADAR NOON MOOM are palindrome. 
    Note: raDaR is not a palindrome if user requested considering case of entered string, 
    it will be palindrome if user requested ignoring case sensitivity.
 */

var str = prompt("[1.2] Please enter string");
var consider_case_senstive = confirm("Consider letter case?");

var is_palindrome = true;

// if letter case is ignored, turn them all to lower to compare later
if(!consider_case_senstive)
    str = str.toLowerCase();

//check if the string is palindrome
for(var i = 0; i < str.length; i++)
{
    if(i < str.length-i)
    {
        if(str[i] != str[str.length-1-i])
            is_palindrome = false;
    }
}

document.write(is_palindrome);