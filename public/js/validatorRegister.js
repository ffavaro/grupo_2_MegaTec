
window.addEventListener("load", function() {
    let formulario = document.querySelector("form.myForm");
    let nombre = document.querySelector("input#nombre");
    let lastName = document.querySelector ("input#lastname");
    let email = document.querySelector ("input#email");
    let password = document.querySelector ("input#password");
    let avatar = document.querySelector ("input#avatar");
    let inputs = document.querySelectorAll("#form input");
    let ulErrores = document.querySelector('ul#ulerrores');
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/


    const validator = function(e) {
        const field = e.target;
        const fieldValue = e.target.value;
            if (fieldValue.length === 0){
                field.classList.add('invalid')
                field.nextElementSibling.innerText =('Debes ingresar tú nombre')
            }else if (fieldValue.length < 2){
                field.classList.add('invalid')
                field.nextElementSibling.innerText =('El nombre debe tener más de dos carácteres')
            }else if (fieldValue.length > 2){
                field.classList.remove('invalid')
                field.nextElementSibling.innerText =('')
            }
    };
    const validatorLastName= function(e) {
        const field = e.target;
        const fieldValue = e.target.value;
            if (fieldValue.length === 0){
                field.classList.add('invalid')
                field.nextElementSibling.innerText =('Debes ingresar tú apellido')
            }else if (fieldValue.length < 2){
                field.classList.add('invalid')
                field.nextElementSibling.innerText =('El apellido debe tener más de dos carácteres')
            }else if (fieldValue.length > 2){
                field.classList.remove('invalid')
                field.nextElementSibling.innerText =('')
            }
    }
    const validatorEmail = (e) => {
        const field = e.target;
        const fieldValue = e.target.value;
        const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
            if (fieldValue.length === 0){
                field.classList.add('invalid')
                field.nextElementSibling.innerText =('Debes ingresar tú email')
            }else if (fieldValue.trim().length >= 0 && !regex.test(field.value)){
                field.classList.add('invalid')
                field.nextElementSibling.innerText =('Debes ingresar un email válido')
            }else if (fieldValue.length > 2){
                field.classList.remove('invalid')
                field.nextElementSibling.innerText =('')
            }
        
    };

    const validatorPassword = (e) => {
        const field = e.target;
        const fieldValue = e.target.value;
        const regexPassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;
        if (fieldValue.length === 0){
            field.classList.add('invalid')
            field.nextElementSibling.innerText =('Debes ingresar tú contraseña') 
        }else if (fieldValue.trim().length > 0 && !regexPassword.test(field.value)){
            field.classList.add('invalid')
            field.nextElementSibling.innerText =('La contraseña debe contener al menos 8 carácteres entre letrás mayúsculas, minúsculas, un número y un carácter especial')
        } else if (fieldValue.length > 2){
            field.classList.remove('invalid')
            field.nextElementSibling.innerText =('')
        }
    };
    const validatorImage = (e) => {
        const field = e.target;
        const fieldImage = e.target.files[0].name.split(".").pop().toLowerCase();
        const allowedExt = ["jpg", "jpge","png","gif"];
        const regexImage = "^(([a-zA-Z]:)|(\\{2}\w+)\$?)(\\(\w[\w].*))(.jpg|.JPG|.gif|.GIF|.png|.PNG|.jpeg|.JPEG)$" ;
        if (!allowedExt.includes(fieldImage)){
            field.classList.add('invalid')
            field.nextElementSibling.innerText =('Imagen en formato JPG, JPEG, PNG, GIF');
        } else if (allowedExt.includes(fieldImage)){
            field.classList.remove('invalid')
            field.nextElementSibling.innerText =('')
        }
    };
   

        nombre.addEventListener('blur', validator)
        lastName.addEventListener('blur', validatorLastName)
        email.addEventListener('blur',validatorEmail)
        password.addEventListener('blur', validatorPassword)
        avatar.addEventListener('change', validatorImage)
        

});






