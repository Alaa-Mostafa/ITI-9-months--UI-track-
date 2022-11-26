/*
    2.1.3. Create a parent a window that opens a scrollable advertising child window.
*/

var child_window, timer_id;

function open_child_window()
{
    child_window = open("child_window.html", "", "width=500,height=400");
    child_window.focus();

    start_timer();
}

//----------------------------------------------------------------------------

function start_timer()
{
    var char_index = 0;

    function scroll_window()
    {
        child_window.scrollBy(0, 20);
    }

    timer_id = setInterval(scroll_window, 100);
}