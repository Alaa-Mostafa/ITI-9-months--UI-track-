
// Alert ASCII Code of any key pressed and detect whether it is alt key or ctrl key or shift key

document.onkeydown=function(){
    
    if(event.altKey)
        alert("you pressed alt key");

    else if(event.ctrlKey)
        alert("you pressed ctrl key");
    
    else if(event.shiftKey)
        alert("you pressed shift key");
}