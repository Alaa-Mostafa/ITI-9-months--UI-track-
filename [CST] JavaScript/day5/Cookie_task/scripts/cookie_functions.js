
var cookies_list = [];

// • Retrieves a cookie value based on a cookie name.
function getCookie(cookieName)
{
    let cookie_value;

    for(let i = 0; i < cookies_list.length; i++)
    {
        if(cookies_list[i][0] == cookieName)
            cookie_value = cookies_list[i][1];
    }

    return cookie_value;
}

// -----------------------------------------------------------------------------------------
// • Sets a cookie based on a cookie name, cookie value, and expiration date.

function setCookie(cookieName,cookieValue)
{
    document.cookie = cookieName  + "="  + cookieValue[0] + ";expires=" + cookieValue[1];
}

// -----------------------------------------------------------------------------------------
// • Deletes a cookie based on a cookie name.

function deleteCookie(cookieName)
{
    let new_date = new Date(); 
    document.cookie= cookieName + "=;expires=" + new_date.toUTCString();
}

// -----------------------------------------------------------------------------------------
// • Check whether a cookie exists or not

 function hasCookie(cookieName)
 {
    let found = false;

    for(let i = 0; i < cookies_list.length; i++)
    {
        if(cookies_list[0] == cookieName)
            found = true;
    }

    return found;
 }

// -----------------------------------------------------------------------------------------
// • Returns a list of all stored cookies

function allCookieList()
{
    let cookie_string = document.cookie;  // cookie_string = name=alaa; age=23; gender=female; color=green

    if(cookie_string != "")
    {
        cookie_string = cookie_string.split(";");  // ['name=alaa', ' age=23', ' gender=female', ' color=green']

        for(let i = 0; i < cookie_string.length; i++)
        {
            cookie_parts = cookie_string[i];      // ' age=23'

            cookie_parts = cookie_parts.replace(" ","");    // 'age=23'
            cookie_parts = cookie_parts.split("=");         // ['age', '23']

            cookies_list[i] = cookie_parts;
        }
    }

    return cookies_list;
}