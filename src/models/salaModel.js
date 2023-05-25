const db = require("./db");
function listarSalas(){
    return db.findAll("salas");
}
module.exports = {listarSalas};


function listarSalas(){
    return [
        {
            "id":{
                "$oid": "no321y7890fhjio123h80"
            },

            "nome": "Guerreiros da infoCimol",
            "tipo": "publica"
        },
        
        {
            "id":{
                "$oid": "no321y7890fhjio123h90"
            },

            "nome": "Só os confirmados da INFO",
            "tipo": "privada",
            "chave": "at8q4haw"
        },

        {
            "id":{
                "$oid": "no321y7890fhjio123h100"
            },

            "nome": "Guerreiros da INFO",
            "tipo": "publica"
        }
    ];

}
