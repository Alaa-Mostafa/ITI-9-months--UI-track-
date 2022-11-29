
var timer_id, max_left = 350, icon1_left = 0, icon2_left = max_left, top_icon_bottom = 0, max_bottom = 350;

var moving_forward = true;

var move_stop_btn = document.getElementById("move_stop_btn")
move_stop_btn.onclick = go;

var reset_btn = document.getElementById("reset_btn");

reset_btn.addEventListener("click",function(){reset();});

var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var top_btn = document.getElementById("top");

var icon1_info_h3 = document.getElementById("icon1_info");
var icon2_info_h3 = document.getElementById("icon2_info");


icon1_info_h3.innerText = "<img src=\"icon1.gif\" style=\"left "+  icon1_left + "px\">";
icon2_info_h3.innerText = "<img src=\"icon2.gif\" style=\"left "+  icon2_left + "px\">";

// ====================================================================

function move_icons()
{
    move_icon1();
    move_icon2();
    move_top();

    icon1_info_h3.innerText = "<img src=\"icon1.gif\" style=\"left "+  icon1_left + "px\">";
    icon2_info_h3.innerText = "<img src=\"icon2.gif\" style=\"left "+  icon2_left + "px\">";
}

// ====================================================================

function move_icon1()
{
    if (moving_forward)
    {
        if(icon1_left >= max_left)
        {
            icon1_left -= 10;
            moving_forward = false;
        }
            
        else
            icon1_left += 10;
    }

    else
    {
        if(icon1_left == 0)
        {
            icon1_left += 10;
            moving_forward = true;
        }
            
        else
            icon1_left -= 10;
    }
   
    icon1.style.left = icon1_left.toString() + "px";
}

// ====================================================================

function move_icon2()
{
    if (moving_forward)
    {
        if(icon2_left == 0)
        {
            icon2_left += 10;
            moving_forward = false;
        }
            
        else
            icon2_left -= 10;
    }

    else
    {
        if(icon1_left >= max_left)
        {
            icon2_left -= 10;
            moving_forward = true;
        }
            
        else
            icon2_left += 10;
    }
   
    icon2.style.left = icon2_left.toString() + "px";
}

// ====================================================================

function move_top()
{
    if (moving_forward)
    {
        if(top_icon_bottom >= max_bottom)
        {
            top_icon_bottom -= 10;
            moving_forward = false;
        }
            
        else
            top_icon_bottom += 10;
    }

    else
    {
        if(top_icon_bottom == 0)
        {
            top_icon_bottom += 10;
            moving_forward = true;
        }
            
        else
            top_icon_bottom -= 10;
    }

    top_btn.style.bottom = top_icon_bottom.toString() + "px";
}

// ====================================================================

function go()
{
    move_stop_btn.innerText = "stop";
    move_stop_btn.onclick = stop;

    timer_id = setInterval(move_icons, 100);
}

// ====================================================================

function stop()
{
    move_stop_btn.innerText = "go";
    move_stop_btn.onclick = go;

    clearInterval(timer_id);
}

// ====================================================================

function reset()
{
    icon1_left = 0;
    icon2_left = max_left; 
    top_icon_bottom = 0;

    icon1.style.left = icon1_left.toString() + "px";
    icon2.style.left = icon2_left.toString() + "px";
    top_btn.style.bottom = top_icon_bottom.toString() + "px";
}