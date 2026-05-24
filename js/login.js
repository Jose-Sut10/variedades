const btnLogin = document.querySelector('[data-formLogin]');

btnLogin.addEventListener("submit", function(e) {
    e.preventDefault();

    const usuarioCorrecto = "admin";
    const passwordCorrecta = "12345";

    const user = document.querySelector('[data-user]').value;
    const password = document.querySelector('[data-password]').value;

    if(user === usuarioCorrecto && password === passwordCorrecta) {
        window.location.href = "./html/home.html";   
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});