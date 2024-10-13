// import { changePage, checkLogin } from "../model/model.js";
import { changePage, checkLogin, register, loadCart, addToCart, showContent, loadPostContent } from "../model/model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  changePage(pageID);
  //console.log("route " + pageID);
}

function initSite() {
  $(window).on("hashchange", route);
  route();
  // $("#loginBtn").on("click", function() {checkLogin()});
  // $("#loginButton").on("click", function(){
  //     const email = $("#loginEmail").val();
  //     const password = $("#loginPassword").val();
  //     checkLogin(email, password);
  //     // console.log(email);
  // });
  // $("#signupButton").on("click", function(){
  //     const firstName = $("#firstName").val();
  //     const lastName = $("#lastName").val();
  //     const email = $("#email").val();
  //     const password = $("#password").val();
  //     //if there is a better way to do this i dont want to know
  //     register(firstName, lastName, email, password);
  // console.log(firstName)
  // });
}

$(document).ready(function () {
  initSite();

  $(document).on("click", "#loginButton", function (event) {
    event.preventDefault();
    console.log("login");

    const email = $("#loginEmail").val();
    const password = $("#loginPassword").val();

    console.log("email:", email, "password:", password);

    if (checkLogin(email, password)) {
      console.log("login worked");
      window.location.hash = "confirmation";
    } else {
      console.log("login no work");
    }
  });

  $(document).on("click", "#signupButton", function (event) {
    event.preventDefault();
    console.log("signup");

    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const email = $("#signupEmail").val();
    const password = $("#signupPassword").val();

    if (register(firstName, lastName, email, password)) {
      console.log("signup work");
      window.location.hash = "confirmation";
    } else {
      console.log("signup no work");
    }
  });

  $(document).on("click", ".button", function (event) {
    event.preventDefault();
    const bookElement = $(this).closest(".book");
    const cover = bookElement.find("img").attr("src");
    const price = bookElement.find("h4").text();
    const description = bookElement.find("p").text();

    const cartItem = {
      cover,
      price,
      description,
    };
    addToCart(cartItem);

    console.log("in cart maybe?", cartItem);
    window.location.hash = "cart";
  });
});
