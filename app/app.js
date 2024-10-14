// import { changePage, checkLogin } from "../model/model.js";
import { changePage, checkLogin, register, addToCart, loadPostContent } from "../model/model.js";

function route() {
  let hashTag = window.location.hash || "#";
  let pageID = hashTag.replace("#", "");
  console.log("Routing to:", pageID);
  if (pageID === "readMore"){
    return;
  }
  changePage(pageID);
  
}

function initSite() {
  $(window).on("hashchange", route);
  route();
 
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
  $(document).on("click", "#logoutButton", function (event) {
    event.preventDefault();
    console.log("logout");
    window.location.hash = "confirmation";
  });

  $(document).on("click", ".button", function (event) {
    event.preventDefault();
    const bookElement = $(this).closest(".book");
    const cover = bookElement.find("img").attr("src");
    const title = bookElement.find("h1").text();
    const price = bookElement.find("h4").text();
    const description = bookElement.find("p").text();

    const cartItem = {
      cover,
      title,
      price,
      description,
    };
    addToCart(cartItem);

    console.log("in cart maybe?", cartItem);
    window.location.hash = "cart";
  });

  $(document).on("click", ".readMoreButton", function(event) {
    event.preventDefault();
    const postId = $(this).data("post");
    loadPostContent(postId);
});

});
