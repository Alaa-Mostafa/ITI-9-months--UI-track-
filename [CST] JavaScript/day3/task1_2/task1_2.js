/*
    Write a script that ask the user to
        • Enter the value of a circle’s radius in order to calculate its area as shown in fig.
        • Enter another value to calculate its square root and alert the result as shown in fig.
        • Enter an angle to calculate its cos value then display the output as shown in Fig.
*/

// • Enter the value of a circle’s radius in order to calculate its area as shown in fig.
var radius = prompt("What's the value of your circle's radius?");
var circle_area = Math.PI * radius * radius;

alert("Your circle's area = " + circle_area.toString());


// • Enter another value to calculate its square root and alert the result as shown in fig.
var num = prompt("What's the value you want to calculate its square root?");
var num_square_root = Math.sqrt(num);

alert("Square root of " + num.toString() + " is " + num_square_root.toString());


// • Enter an angle to calculate its cos value then display the output as shown in Fig.
var angle_degree = prompt("What's the angle you want to calculate its cos value?");
angle_degree = parseFloat(angle_degree);

var angle_rad = angle_degree * Math.PI / 180;    // convert from degree to rad
var angle_cos = Math.cos(angle_rad);

console.log("%c cos " + angle_degree + "° is " + angle_cos.toFixed(4) + "", "font-size:20pt;");