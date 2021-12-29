function login(){
    const username = document.getElementById("uname");
    const password = document.getElementById("pw");

    if(username.value === "Jundi2003" && password.value === "12345678"){
        alert("Login Sukses")
        window.location.href = "LoginSukses.html";
    }
    else{
        alert("username atau password anda salah");
        pw.value="";
        uname.focus();
    }
}