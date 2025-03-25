var checkBox = document.getElementById("darkmode");
var htmlPage = document.getElementById("htmlPage");
var profileBtn = document.querySelector("a#navBtn.profilebtn");
var userIcon = document.getElementById("profileImage");

var pageTitle = document.getElementById("pageTitle");

var accountBox = document.querySelector("html#htmlPage div.box");
var profileBox = document.getElementById("loginBox");
var logoutBTN = document.querySelector("a#navBtn.logoutBTN");

function darkMode() {
  if (checkBox.checked == true) {
    console.log("Now dark");
    htmlPage.classList.toggle("dark");
    document.cookie = "mode=dark";
  } else if (checkBox.checked == false) {
    console.log("Back to light!");
    htmlPage.classList.toggle("dark");
    document.cookie = "mode=light";
  }
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function logout() {
  document.cookie = "loggedIn=false";
  document.cookie = "username=";
  document.cookie = "password=";

  location.reload();
}

function loaded() {
  if (document.cookie.includes("mode=dark")) {
    htmlPage.classList.add("dark");
    checkBox.checked = true;
  } else if (document.cookie.includes("mode=light")) {
    htmlPage.classList.remove("dark");
    checkBox.checked = false;
  }

  if (document.URL.includes("profils.html")) {
    if (document.cookie.includes("loggedIn=true")) {
      var profileName = document.getElementById("profileName");
      profileName.innerHTML = getCookie("username");

      var profileAboutYou = document.getElementById("profileAboutYou");
      accountBox.classList.toggle("hidden");
      console.log("[ Box not hidden ]");
    } else if (!document.cookie.includes("loggedIn=true")) {
      profileBox.classList.toggle("hidden");
      console.log("[ Box hidden] ");
      logoutBTN.classList.toggle("hidden");
    }
  } else {
    if (!document.cookie.includes("loggedIn=true")) {
      profileBtn.textContent = "Ieiet";
      userIcon.classList.add("loggedOut");

      console.log(getCookie("username"));
      console.log(getCookie("password"));
    } else if (document.cookie.includes("loggedIn=true")) {
      profileBtn.textContent = "Profils";
      userIcon.classList.remove("loggedOut");
    }
  }

  console.log("Page has loaded.");
  console.log(
    `CURRENT COOKIE STATUS: \n\nVisual mode (appearance): ${getCookie(
      "mode"
    )}\nLogin status: ${getCookie("loggedIn") || "no cookie for this yet :("}`
  );
}