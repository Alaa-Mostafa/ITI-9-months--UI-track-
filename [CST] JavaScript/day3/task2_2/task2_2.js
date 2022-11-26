/*
    2.1.2. Write a script that shows a “typing message” appearing in a new child window. 
    The new window should close after few seconds of displaying your message.
*/

var child_window, timer_id, str;

str = prompt("Enter your string");

function open_child_window()
{
    child_window = open("child_window.html", "", "width=500,height=500");
    child_window.focus();

    start_timer();
}

//----------------------------------------------------------------------------

function start_timer()
{
    var char_index = 0;

    function write_string_char_by_char()
    {
        if(char_index < str.length)
        {
            // child_window.document.write(str[char_index]);
            child_window.document.write(str.charAt(char_index));

            char_index += 1;
        }

        if(char_index == str.length)
        {
            clearInterval(timer_id);
            setTimeout(close_child_window ,3000);
        }
    }

    timer_id = setInterval(write_string_char_by_char, 200);
}

//----------------------------------------------------------------------------

function close_child_window()
{
    child_window.close();
}
//Hello! My name is Alaa. I'm 23 years old. I love listenning to Amr Diab and playing Yugioh!


