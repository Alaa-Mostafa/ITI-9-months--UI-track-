
var image_number;
var clicked_images = [];

var my_images = document.images;
var number_of_images = my_images.length;

// setting eventhandlers for all images
for(var i = 0; i < number_of_images; i++)
{
    my_images[i].id = "img_" + (i+1).toString();
    my_images[i].onclick = function(){ check_solution(this); };
}

// --------------------------------------------------------

// ========================================= generate board indicies randomly

var hidden_images = [];      // holds randomly generated number in range from 1 - 6 repeated twice for the board
var finished_generated_numbers = [];    // a number is "finished" if it was generated twice

var hidden_image_idx=0, finished_num_index=0;

do
{
    let random_number = Math.floor((Math.random() * 6) + 1);

    // check if the number is finished, and if it already took place on board
    let search_generated_numbers = finished_generated_numbers.includes(random_number);
    let search_hidden_images = hidden_images.includes(random_number);

    // appeared once (took place on board once) and not finished yet
    if(search_hidden_images && !search_generated_numbers)
    {
        hidden_images[hidden_image_idx] = random_number;    // add it on board
        finished_generated_numbers[finished_num_index] = random_number; // set it as finished

        finished_num_index += 1;
        hidden_image_idx += 1; 
    }

    else if(!search_hidden_images)  // didn't appear before
    {
        hidden_images[hidden_image_idx] = random_number;
        hidden_image_idx += 1;
    }

}while(hidden_image_idx < number_of_images);    // stop when we fill array with number of images needed

// -------------------------------------------------------------

// ========================================= check clicked images and solution

function rehide_wrong_choices()  // freeze board for a while then rehide wrong choices
{
    my_images[clicked_images[0]].src = my_images[clicked_images[0]].src;
    my_images[clicked_images[1]].src= my_images[clicked_images[1]].src;

    clearInterval(timer_id);

    my_images[clicked_images[0]].src = "../Images/Moon.gif";
    my_images[clicked_images[1]].src = "../Images/Moon.gif";
}

// ---------------------------------------------------------------

var idx = 0, timer_id, numbers_of_matched_moves = 0, score = 0;
function check_solution(clicked_image)
{
    if(clicked_images.length == 2)  // reset everything if array is full
    {
        clicked_images = [];
        idx = 0;
    }

    let clicked_index = clicked_image.id.split("_")[1];
    clicked_index = parseInt(clicked_index) - 1;
  
    if(!clicked_images.includes(clicked_index))     // not flipped in previous click
    {
        my_images[clicked_index].src = "../Images/" + hidden_images[clicked_index].toString() + ".gif";
        clicked_images[idx] = clicked_index;
        idx += 1;
    }

    if(clicked_images.length == 2)      // two images are flipped
    {
        let first_image = my_images[clicked_images[0]].src;
        let second_image = my_images[clicked_images[1]].src;

        if(first_image != second_image)
        {
            timer_id = setInterval(rehide_wrong_choices, 1000);
            score -= 5;     // score decreases by 5 if choices are not matched
        }

        else if (first_image == second_image && numbers_of_matched_moves < number_of_images/2)
        {
            numbers_of_matched_moves += 1;
            score += 10;    // score increases by 10 if choices are not matched
        }

    }

    if(numbers_of_matched_moves == number_of_images/2)
    {
        if(score < 0)
            score = 0;

        var congratulating_header =  document.querySelector("h2");
        congratulating_header.innerHTML = "Congratulations! &nbsp; YOU WON!" + "<br/> your score = " + score.toString();
    }
}
