window.addEventListener('load',(e) => {

    const name = document.querySelector('#name');
    const description = document.querySelector('#description');
    const image = document.querySelector('#image');


    const validatorName = function(e) {
        const field = e.target;
        const fieldValue = e.target.value;
            if (fieldValue.length === 0){
                field.classList.add('invalid')
                field.nextElementSibling.innerText =('Debes ingresar tú nombre')
            } else if (fieldValue.length < 4){
                field.classList.add('invalid')
                field.nextElementSibling.innerText =('El nombre debe tener al menos 5 carácteres')
            } else if (fieldValue.length > 5){
                field.classList.remove('invalid')
                field.nextElementSibling.innerText =('')
            }
    };

    
    const validatorDescripton = function(e) {
        const field = e.target;
        const fieldValue = e.target.value;
            if (fieldValue.length === 0){
                field.classList.add('invalid')
                field.nextElementSibling.innerText =('Debes ingresar la descripción del producto')
                // field.parentElement.insertAdjacentHTML('afterend',`<div> Debes Ingresar la descripcion </div>`)
            }else if (fieldValue.length < 20){
                field.classList.add('invalid')
                field.nextElementSibling.innerText =('La descripción  debe tener al menos 20 carácteres')
            }else if (fieldValue.length > 20){
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

    name.addEventListener('blur', validatorName);
    description.addEventListener('blur', validatorDescripton);
    image.addEventListener('blur', validatorImage)



})

