/*
    1.1. Write a script that accepts a string from user through prompt and 
    count the number of a specific character that the user will define in another prompt. 
    Ask the user whether to consider difference between letter cases or not 
    then display the number of letter appearance.
*/

var count = 0;

var str = prompt("[1.1] Please enter string");
var char_search = prompt("Enter a character to search");
var consider_case_senstive = confirm("Consider letter case?");

// if letter case is ignored, turn them all to lower to compare later
if(!consider_case_senstive)
{
    str = str.toLowerCase();
    char_search = char_search.toLowerCase();
}

// searching for character
for(var i = 0; i < str.length; i++)
{
    if(str[i] == char_search)
        count += 1;
}

document.write(count);