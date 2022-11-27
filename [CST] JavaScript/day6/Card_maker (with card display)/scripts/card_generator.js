
var click= new Event("click");
var generate_button = document.querySelector("button");
generate_button.addEventListener("click", generate_card);

function generate_card()
{
    let card_image_name = document.querySelector('input[id="img_radio"]:checked').value;
    let message = document.getElementById("message").value;
   
    display_card(card_image_name, message);
}

function display_card(card_image_name, message)
{ 
    console.log(card_image_name);
    let win = window.open("",  "_blank", "width=350, height=450");

    // -------------------------------------------------- image

    var img = new Image(300,400);
    img.src = card_image_name;

    const card_image = win.document.createElement("img");
    win.document.body.appendChild(card_image);

    card_image.src = img.src;
    card_image.width = 300;
    card_image.height = 300;

    // -------------------------------------------------- message

    const card_message = win.document.createElement("p");
    win.document.body.appendChild(card_message);

    card_message.innerText = message;

    // -------------------------------------------------- message

    const close_button = win.document.createElement("button");
    win.document.body.appendChild(close_button);

    close_button.innerText = "Close Preview";
    close_button.onclick = function() { win.close(); };

    // -------------------------------------------------- style

    win.document.body.style.textAlign = "center";
    win.document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    win.document.body.style.color = 'rgb(71, 185, 141)';
}