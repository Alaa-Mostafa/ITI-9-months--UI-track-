
/*
    Prevent context menu from being displayed by preventing from mouse right click from its action. 
    Note: context menu is the menu displayed when mouse right button is clicked
*/

document.addEventListener("contextmenu", function() {
    event.preventDefault();
});
