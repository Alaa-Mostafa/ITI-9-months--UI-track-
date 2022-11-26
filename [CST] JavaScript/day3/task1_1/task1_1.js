/*
    1.1. Fill an array (5 numerical values) from the user, 
    Sort it in descending and ascending orders then display the output as shown in Fig.
*/

var arr = [5];

for(var i = 0; i < 5; i++)
    arr[i] = prompt("[1.1] Enter element number " + (i+1));

var arr_str = arr.join(" , ");

var arr_ascending = arr.sort(function(a,b) {return a-b});
arr_ascending = arr_ascending.join(" , ")

var arr_descending = arr.sort(function(a,b) {return b-a});
arr_descending = arr_descending.join(" , ");

console.log("%cSorting", "font-size:30pt;");
console.log("%s %s", "%c You've entered the values of ","font-size:20pt; color:red;", "%c" + arr_str, "font-size:20pt;");
console.log("%s %s", "%c Your values after being sorted descending ","font-size:20pt; color:red;", "%c" + arr_descending, "font-size:20pt;");
console.log("%s %s", "%c Your values after being sorted ascending ","font-size:20pt; color:red;", "%c" + arr_ascending, "font-size:20pt;");