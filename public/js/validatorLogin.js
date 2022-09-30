

window.addEventListener("load",function(){
const form = document.querySelector('form.create-form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
let errores = [];
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
    if (fieldValue.length === 0){
        field.classList.add('invalid')
        field.nextElementSibling.innerText =('Debes ingresar tú contraseña') 
    } else if (fieldValue.length > 8){
        field.classList.remove('invalid')
        field.nextElementSibling.innerText =('')
    }
};

email.addEventListener('blur',validatorEmail)
password.addEventListener('blur',validatorPassword)
});

