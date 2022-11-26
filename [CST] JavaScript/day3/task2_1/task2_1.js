/*
    2.1.1. Create a parent window that opens a flying child window. 
    Hint: Start by creating a parent window that opens a child window. 
    Child window should always be on top view and moves up and down within boundaries of user screen. 
    Parent window should contain a button that stops child window movement.
*/

var child_window, timer_id;

function open_child_window()
{
    child_window = open("child_window.html", "", "width=200,height=200");
    start_timer();
}

//----------------------------------------------------------------------------

function start_timer()
{
    var y = 0, x = 0, pixels_to_move = 50, increase = true;

    function move_child_window()        // the window moves diagonally (from upper left to lower right)
    {
        if(y == 0 && x == 0)
            increase = true;

        // window.innerHeight-(pixels_to_move*10)  to decrease the time it takes to move from both corners
        // window.innerHeight   alone works, but it takes more time to start moving from both corners

        if(y > window.innerHeight-(pixels_to_move) && x > window.innerWidth-(pixels_to_move))
            increase = false;


        if(increase == false)
        {
            child_window.moveBy(-pixels_to_move*2.5, -pixels_to_move);

            x -= pixels_to_move;
            y -= pixels_to_move; 
        }

        else
        {
            child_window.moveBy(pixels_to_move*2.5, pixels_to_move);

            x += pixels_to_move;
            y += pixels_to_move;
            increase == true; 
        } 
        
        child_window.focus();
    }

    timer_id = setInterval(move_child_window, 100);
}

//----------------------------------------------------------------------------

function stop_timer()
{
    clearInterval(timer_id);
    child_window.focus();
}