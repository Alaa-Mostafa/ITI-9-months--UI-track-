
var timer_id, i = 0;

// wait for 2 seconds and the look on the page changes!

timer_id = setInterval(freeze, 1000);

function freeze()
{
    i += 1;
    console.log("here");
    if(i == 2)
    {
        clearInterval(timer_id);
        console.log("done");
        change_nodes();
    }
}

// ====================================================

function change_nodes()
{
    let original_img = document.images[0];
    let cloned_img = original_img.cloneNode(true);

    let parent_div = original_img.parentElement;
    let navigation_div = document.querySelector("ul").parentNode;

    let cloned_img_div = parent_div.cloneNode(false);
    cloned_img_div.appendChild(cloned_img);

    navigation_div.insertAdjacentElement('afterend', cloned_img_div);  // setting cloned_img div after navigation menu
 
    parent_div.style.textAlign = "right";
    cloned_img_div.style.textAlign = "left";

    original_img.width = 200;
    cloned_img.width = 200;

    let list = document.querySelector("ul");
    list.style.listStyleType = "circle";
}