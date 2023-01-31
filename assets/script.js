function init() {
  gapi.load("auth2", function () {
    gapi.auth2.init({
      client_id:
        "863597852993-tpj5ckb05tsqle4fcl8t9m761h5ld6uo.apps.googleusercontent.com",
      scope: "profile email",
      fetch_basic_profile: true,
      prompt: "select_account",
      ux_mode: "redirect",
      hosted_domain: "example.com",
    });
  });
}

init();

$(document).ready(function () {
  var button = document.querySelector(".g-signin2");
  button.addEventListener("click", function () {
    gapi.signin2.render("g-signin2", {
      scope: "https://www.googleapis.com/auth/plus.login",
      onsuccess: onSignIn,
    });
  });
});

function onSignIn(googleUser) {
  // Get the Google login details
  var profile = googleUser.getBasicProfile();
  var email = profile.getEmail();
  var name = profile.getName();

  // Store the user's credentials in a cookie or local storage
  document.cookie = "email=" + email;
  document.cookie = "name=" + name;

  // Update the UI to show the user is signed in
  document.getElementById("user-name").innerHTML = name;
  document.getElementById("sign-in-button").style.display = "none";
  document.getElementById("sign-out-button").style.display = "block";
}

onSignIn();

//A JavaScript function that handles the sign-in event of a user using the Google Sign-In API. When a user successfully signs in, the Google Sign-In API returns a googleUser object, which contains information about the user, such as their ID, name, email address, and profile picture. Using the googleUser object to retrieve the user's basic profile information, and then logging the user's ID, name, image URL, and email to the console. However, the comment 'Do not send to your backend!
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}
