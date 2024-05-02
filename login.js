'use strict'



export async function validarLogin(){

    let email = document.getElementById('email')
    let password = document.getElementById('password')


    if (email == 'carlos@gmail.com' && password == '1234') {
        window.location.href = "./dashboard.html";
    }
}

