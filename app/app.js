// import { changePage, checkLogin } from "../model/model.js";
import { changePage, checkLogin, register } from "../model/model.js";


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
function bind(){
    $("#loginButton").on("click", function(){
        const email = $("#loginEmail").val();
        const password = $("#loginPassword").val();
        checkLogin(email, password);
        // console.log(email);
    });
    $("#signupButton").on("click", function(){
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const email = $("#signupEmail").val();
        const password = $("#signupPassword").val();
        //if there is a better way to do this i dont want to know
        register(firstName, lastName, email, password);
    console.log(firstName)
    });
}
 
$(document).ready(function () {
    initSite();
    $(document).on("click", "#loginButton, #signupButton", bind)
});