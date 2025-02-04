var checkBox = document.getElementById("darkmode");
var htmlPage = document.getElementById("htmlPage");

function darkMode() {
    if (checkBox.checked == true) 
    {
        console.log("Now dark");
        htmlPage.classList.add('dark');
        document.cookie = "mode=dark"
    }

    else if (checkBox.checked == false) 
    {
        console.log("Back to light!")
        htmlPage.classList.remove('dark');
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