
var user_name, age, gender, color, visits_counter = 1, cookies = [];

function open_welcome_page()
{
    save_data();        // store entered data in variables
   
    window.location = "./profile.html";
}

// =================================================================================
// Stores data entered in form into variables, then set them in cookies

function save_data()
{
    user_name = document.querySelector('input[name="userName"]').value;
    age = document.querySelector('input[name="age"]').value;
    gender = document.querySelector('input[name="gender"]:checked').value;
    color = document.querySelector('select[name="color"]').value;

    set_cookies();
}

// =================================================================================

function set_cookies()
{
    let expire_date = new Date();
    expire_date.setMonth(expire_date.getMonth() + 1);

    setCookie("name", [user_name, expire_date.toUTCString()]);
    setCookie("age", [age.toString(), expire_date.toUTCString()]);
    setCookie("gender", [gender, expire_date.toUTCString()]);
    setCookie("color", [color, expire_date.toUTCString()]);
    setCookie("visits", [visits_counter.toString(), expire_date.toUTCString()]);
}

// =================================================================================

function view_profile()
{
    cookies = allCookieList();
    user_name = getCookie("name");
    gender = getCookie("gender");
    color = getCookie("color");

    visits_counter = parseInt(getCookie("visits"));

    set_profile_picture();
    write_welcome_message();

    visits_counter += 1;
    let expire_date = new Date();
    expire_date.setMonth(expire_date.getMonth() + 1);
    
    setCookie("visits", [visits_counter.toString(), expire_date.toUTCString()]);
}

// =================================================================================

function set_profile_picture()
{
    var profile_picture = window.document.images[0];

    if(gender == 'female')
    {
        profile_picture.src = "../images/2.jpg";
        profile_picture.width = "200";
    }

    else
    {
        profile_picture.src = "../images/1.jpg";
        profile_picture.height = "200";
    }
}

// =================================================================================

function write_welcome_message()
{
    let welcoming_header = window.document.querySelector("h2");

    let name_writing_string =  "<span style=color:"+ color +";>"+ user_name + "</span>";
    let visits_writing_string = "<span style=color:"+ color +";>"+ visits_counter + "</span>";
    welcoming_header.innerHTML = "Welcome " +  name_writing_string + 
                                 ", <br/> &nbsp;&nbsp;&nbsp;&nbsp; you have visited this site " + visits_writing_string + 
                                 " times!";
}