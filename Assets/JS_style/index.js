var checkBox = document.getElementById("darkmode");
var htmlPage = document.getElementById("htmlPage");
var profileBtn = document.getElementById("navBtn profile");

function darkMode() {
    if (checkBox.checked == true) 
    {
        console.log("Now dark");
        htmlPage.classList.toggle('dark');
        document.cookie = "mode=dark"
    }

    else if (checkBox.checked == false) 
    {
        console.log("Back to light!")
        htmlPage.classList.toggle('dark');
        document.cookie = "mode=light"
    }
}

function loaded() {
    if (document.cookie.includes('mode=dark')) {
        htmlPage.classList.add('dark');
        checkBox.checked = true;
    } else if (document.cookie.includes('mode=light')) {
        htmlPage.classList.remove('dark');
        checkBox.checked = false;
    }
}