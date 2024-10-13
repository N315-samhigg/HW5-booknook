export function changePage(pageName) {
    
    console.log(pageName);
    // if (pageName != "") {
    //     $.get("pages/" + pageName + ".html", (data) =>{
    //         $("#app").html(data);
    //     }).fail((error) => {
    //         console.log("error " + error);
    //     });
    // } else {
    //     $.get("pages/home.html", (data) =>{
    //         $("#app").html(data);
    //     }).fail((error) => {
    //         console.log("error " + error);
    //     });
    // }
    if (pageName) {
        $.get("pages/" + pageName + ".html", (data) =>{
            $("#app").html(data);
            if(pageName === "cart"){
                loadCart();
            }
        }).fail((error) => {
            console.log("error " + error);
            alert("error " + error);
        });
    } else {
        $.get("pages/home.html", (data) =>{
            $("#app").html(data);
        }).fail((error) => {
            console.log("error " + error);
            alert("error " + error);
        });
    }
}
export function checkLogin(email, password) {
    if (!email || !password) {
        alert("Please fill out both fields to log in."); //change to fancy alerts from class
        return false; 
    }
    console.log("Login successful for:", email);
    return true; 
}

export function register(firstName, lastName, email, password) {
    if (!firstName || !lastName || !email || !password) {
        alert("Fill out all the fields"); //change to fancy alerts
        return false;
    }
    return true;
}

let cartItems = [];

export function addToCart(item){
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export function loadCartItems(){
    const items = localStorage.getItem("cartItems");
    return items ? JSON.parse(items):[];
}

export function loadCart(){
    console.log("loading?")
    const cartItems = loadCartItems();
    console.log("load items", cartItems)
    const cartContainer = $("#cartItems");

    cartContainer.empty();
    if (cartItems.length === 0){
        cartContainer.html("<p>Cart Empty:(</p>")
        return
    } //dont really need this just messing around with it, if causes issues delete

    cartItems.forEach(item => {
        const cartItemHTML = `
        <div class="cartItem">
        <img src="${item.cover}" alt="Book Cover"/>
        </div>
        <div>
        <h1>${item.title}</h1>
        <p>${item.description}</p>
        <h4>${item.price}</h4>
        </div>`;
        cartContainer.append(cartItemHTML);
    });
}

export function showContent(postId) {
    console.log("show content1", postId);
    $(".readMore > div").hide();
    const content = $(`.${postId}`);
    $(`.${postId}`).show();
    console.log("show content");
}
export function loadPostContent(postId) {
    console.log("Loading content for postId:", postId);
    $.get("pages/readMore.html")
        .done(function(data) {
            $("#app").html(data);
            showContent(postId);
            console.log("Content loaded successfully.");
        })
        .fail(function(error) {
            console.error("Failed to load readMore.html", error);
            alert("Error: " + error.statusText);
        });
}

// export function loadPostContent(postId) {
//     console.log("load post content", postId)
//     $.get("pages/readMore.html", function(data) {
//         $("#app").html(data);
//         showContent(postId);
//         window.location.hash = "readMore";
// console.log("load post content 2", content.length);
// content.show();
//     }).fail((error) => {
//         alert("Error: " + error);
//     });
// }
export function getPostContent(postId){
    switch(postId){
        case "february":
            return
    }
}
// export function checkLogin() {
//     var login = false;

//     if (!login) {
//         if( confirm("You are not logged in! Log in?") ) {
//             var username = prompt("Type your username.");
//             var password = prompt("Type your password.");
//             login = true;
//         } else {
//             return;
//         }

//         changePage("driver");
//     } else {
//         $("#loginBtn").innerHTML = "Logged In";
//     }
// }//?

