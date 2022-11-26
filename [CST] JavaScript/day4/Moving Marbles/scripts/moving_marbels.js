
var image_number, timerId;

var my_images = document.images;
var number_of_images = my_images.length;

// --------------------------------------------------------------------------------------
/*  
    Allow the user to stop the animation by placing the cursor on any marble. 
    The animation will restart again once the user remove the cursor from that marble.
*/

// setting eventhandlers for all images

for(var i = 0; i < number_of_images; i++)
{
    my_images[i].onmouseover = stop_animation;
    my_images[i].onmouseleave = apply_animation;
}

// --------------------------------------------------------------------------------------
// Create an animation on the page that makes an orange marble move to the next location in the line every second.

var colored_image_index = 0;
apply_animation();

function apply_animation()
{
    function move_marbels()
    {
        var next_image_index;
        
        // check next image to color
        if(colored_image_index == number_of_images-1)
            next_image_index = 0;
        else
            next_image_index = colored_image_index + 1;
    
        // swap image sources
        var temp = my_images[colored_image_index].src;
        my_images[colored_image_index].src = my_images[next_image_index].src;
        my_images[next_image_index].src = temp;
    
        colored_image_index = next_image_index;
    }
    
    timerId = setInterval(move_marbels, 1000);
}

// --------------------------------------------------------------------------------------

function stop_animation()
{
    clearInterval(timerId);
}