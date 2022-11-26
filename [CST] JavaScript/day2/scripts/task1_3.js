/*
    1.3 Build your own function that takes a single string argument 
    and returns the largest word in the string. 

    If there are two or more words that are the same length, 
    return the first word from the string with that length.

    e.g. if Input is: "this is a javascript string demo"
    Output will be: javascript
*/

function get_longest_word(str)
{
    var longest_word = "";
    var split_str = str.split(" ");

    for(var index in split_str)
    {
        if(split_str[index].length > longest_word.length)
            longest_word = split_str[index];
    }

    return longest_word;
}

var str = prompt("[1.3] Please enter string");
var str_longest_word = get_longest_word(str);

document.write(str_longest_word);