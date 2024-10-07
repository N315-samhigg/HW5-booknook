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

export function checkLogin() {
    var login = false;

    if (!login) {
        if( confirm("You are not logged in! Log in?") ) {
            var username = prompt("Type your username.");
            var password = prompt("Type your password.");
            login = true;
        } else {
            return;
        }

        changePage("driver");
    } else {
        $("#loginBtn").innerHTML = "Logged In";
    }
}