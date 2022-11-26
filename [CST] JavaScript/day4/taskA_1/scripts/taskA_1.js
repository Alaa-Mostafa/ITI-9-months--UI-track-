
//------------------------------------ detect if browser is chrome

/*var chromeAgent = navigator.userAgent.toString().match("Chrome");
document.write(chromeAgent);

if(chromeAgent == -1) //not found
    alert("We recommend using chrome browser!");*/


//------------------------------------ getting url to get data

var url_str = location.toString();

var query_string_index = url_str.search("name=");
var query_string = url_str.substring(query_string_index, url_str.length);


//------------------------------------  replace special characters in the middle

query_string = query_string.replace("%40", "@");

// ex: 7 Mohamed AlAshry St., Faisal, Giza, Egypt
for(var i = 0; i < query_string.length; i++)
{
    if(query_string[i] == "+")
        query_string = query_string.replace(query_string[i], " ");

    else if(query_string.substring(i, i+3) == "%2C")
        query_string = query_string.replace("%2C", ",");
}

//------------------------------------  split and show data
var data = query_string.split("&");

var value = data[0].split("=");
alert("Welcome " + value[1] + "!");

document.write("Name: " + value[1] + "</br>");

var value = data[1].split("=");
document.write("Email: " + value[1] + "</br>");

var value = data[2].split("=");
document.write("Password: " + value[1] + "</br>");

var value = data[3].split("=");
document.write("Job title: " + value[1] + "</br>");

var value = data[4].split("=");
document.write("Mobile: " + value[1] + "</br>");

var value = data[5].split("=");
document.write("Gender: " + value[1] + "</br>");

var value = data[6].split("=");
document.write("Address: " + value[1] + "</br>");