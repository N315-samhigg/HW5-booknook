export function changePage(pageName) {
    console.log(pageName);
    if (pageName != "") {
        $.get("pages/" + pageName + ".html", (data) =>{
            $("#app").html(data);
        }).fail((error) => {
            console.log("error " + error);
        });
    } else {
        $.get("pages/home.html", (data) =>{
            $("#app").html(data);
        }).fail((error) => {
            console.log("error " + error);
        });
    }
}
export function checkLogin(email, password){
    if (!email || !password){
        alert("Bestie you gotta fill out both to log in");//change before submit too tired thing professional (might add the fancy popups later too)
        return;
        
    }
   console.log(email);
}
export function register(firstName, lastName, email, password){
    if (!firstName || !lastName || !email || !password){
        alert("Fill out all the fields");
        return;
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

