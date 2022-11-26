
var num, sum = 0;

do
{
    num = prompt("Enter number");

    sum += parseInt(num);

} while((num != 0) && (sum < 100));

document.write("sum = " + sum);