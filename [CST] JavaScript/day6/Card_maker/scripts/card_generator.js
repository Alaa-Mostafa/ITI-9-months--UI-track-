
var click= new Event("click");
var generate_button = document.querySelector("button");
generate_button.addEventListener("click", generate_card);


function generate_card()
{
    let card_image_name = document.querySelector('input[id="img_radio"]:checked').value;
    let message = document.getElementById("message").innerText;

    display_card(card_image_name);
}

function display_card(card_image_name)
{
    var img1 = document.createElement("img");

    img1.src = card_image_name;
    document.body.appendChild(img1);
}

