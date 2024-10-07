import { changePage, checkLogin } from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    changePage(pageID);
    //console.log("route " + pageID);
}

function initSite() {
    $(window).on("hashchange", route);
    route();
    $("#loginBtn").on("click", function() {checkLogin()});
}
 
$(document).ready(function () {
    initSite();
});