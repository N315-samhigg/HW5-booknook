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

