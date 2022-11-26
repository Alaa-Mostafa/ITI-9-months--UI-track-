
var image_number, timerId;

function get_image_number()
{
    // image src = http://127.0.0.1:5500/taskA2_1/Images/1.jpg

    var image_src_string = document.images[0].src.split("/");
    var image_name = image_src_string[image_src_string.length-1]    // 1.jpg

    var image_num = parseInt(image_name[0]);        // 1

    return image_num;
}

// =========================================== Next ===========================================

// • Next goes to next pic and stops when reaching last image
function next()
{
      image_number = get_image_number();
      if(image_number < 6)
      {
        image_number += 1;
          document.images[0].src = "../Images/"+image_number.toString()+".jpg";
      }
}

// ========================================= Previous =========================================

// • Previous goes back to previous image and stops when reaching first image
function previous()
{
    image_number = get_image_number();
    if(image_number > 1)
    {
        image_number -= 1;
        document.images[0].src = "../Images/"+image_number.toString()+".jpg";
    }
}

// ========================================= SlideShow ========================================

// • Slideshow will circulate, i.e. when reach last image is should continue displaying staring from first image
function SlideShow()
{
    image_number = get_image_number();

    function show_next()
    {
        if(image_number == 6)
            image_number = 0;   // to add 1 in next step and show first image correctly

        image_number += 1;
        document.images[0].src = "../Images/"+image_number.toString()+".jpg";
    }

    timerId = setInterval(show_next, 2000);
}

// =========================================== Stop ===========================================

// • Stop will stop slideshow behavior.
function stop()
{
    clearInterval(timerId);
}