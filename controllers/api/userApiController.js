const db = require("../../database/models");
const path = require('path');
const fs = require('fs');

let controller = {
    /* 
        ○ Deberá devolver un objeto literal con la siguiente estructura:
        ■ count → cantidad total de usuarios en la base.
        ■ users → array con la colección de usuarios, cada uno con:
        ● id
        ● name
        ● email
        ● detail → URL para obtener el detalle. 
    */
    getAll:(req, res) => {
        db.User.findAll().then((user) => {
            let data = {count:0 , users: []};
            data.count = user.length;

            user.forEach(element => {
                let user = {id: 0,name:"", email:"", detail:""};
                user.id = element.id;
                user.name = element.firstname + " - " + element.lastname;
                user.email = element.email;
                user.detail = `http://localhost:3000/api/users/${element.id}`;
                data.users.push(user);                
            });

            res.send({ data });
        })
    },
    /* 
        ● api/users/:id
        ○ Deberá devolver un objeto literal con la siguiente estructura:
        ■ Una propiedad por cada campo en base.
        ■ Una URL para la imagen de perfil (para mostrar la imagen).
        ■ Sin información sensible (ej: password y categoría).
        Entregable: URL funcionales devolviendo datos de usuarios en formato JSON.
    */
    getById:(req, res) => {
        db.User.findByPk(req.params.id).then((user) => {
            let json = {id: 0, firstname:"", lastname: "", email:"", avatar:""};

            json.id = user.id;
            json.firstname = user.firstname;
            json.lastname = user.lastname;
            json.email = user.email;
            json.avatar = `http://localhost:3000/api/users/avatar/${user.id}`;  

            res.send({ json });
        })
    },
    getAvatarById:(req, res) =>{
        db.User.findByPk(req.params.id).then((user) => {
            let path = `C:\\Users\\Francisco\\OneDrive\\Documentos\\Digital House\\MegaTec\\grupo_2_MegaTec\\public\\images\\user\\${user.image}`
            res.sendFile(path);
        })
    }
};

module.exports = controller;
