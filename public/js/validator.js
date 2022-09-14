window.addEventListener("load", function() {
    let formulario = document.querySelector("form.myForm");
    let name = document.querySelector("#name");
    let lastName = document.querySelector ("#lastname");
    let email = document.querySelector ("#email");
    let password = document.querySelector ("#pasword");
    let avatar = document.querySelector ("#avatar");
    
    formulario.addEventListener("submit", function(e){
    let errores = []
    //Validation name
    if (name.value == ""){
        errores.push('Ingresa tú nombre');
    } else if (name.value.length < 2){
        errores.push("El nombre debe tener al menos 2 caracteres")
    };
    //Validation Lastname
    if (lastName.value == ""){
        errores.push('Ingresa tú apellido');
    } else if (lastName.value.length < 2){
        errores.push("El apellido debe tener al menos 2 caracteres")
    };
    //Validation email
    if (email.value == ""){
        errores.push('Ingresa tú email');
    };
    //Validation password
    if (password.value == ""){
        errores.push('Ingresa una contraseña');
    } else if (password.value.length < 8){
        errores.push("La contrseña debe tener al menos 8 caracteres")
    }else if (password.matches(/[A-z]/)){
        errores.push('La contraseña debe tener al menos una letra mayuscula')
    };

    if ( errores.length>0 ){
        e.preventDefault();

        let ulErrores = document.querySelector('div.errores ul')
        console.log(ulErrores)
        for(i=0; i<e.length; i++){
            ulErrores.innerHTML += "<li>" + errores[i] + "<li>"
        }
 }
    })
});