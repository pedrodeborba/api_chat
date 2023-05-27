const { Timestamp } = require("mongodb");
const db = require("./db");

let listarSalas = async ()=>{
		let salas= await db.findAll("salas");
		return salas;
};

let buscarSala = async (idsala)=>{
	return db.findOne("salas",idsala);
}

let atualizarMensagens=async (sala)=>{
	return await db.updateOne("salas", sala,{_id:sala._id});
}

let buscarMensagens = async (idsala, timestamp)=>{
		let sala = await buscarSala(idsala);
		if(sala.msgs){
			let msgs=[];
			sala.msgs.forEach((msg)=>{
				if(msg.timestamp >= timestamp){
					msgs.push(msg);
				}
			});
			return msgs;
		}
		return [];
}

let criarSala = async (nome, tipo, chave)=>{
    if(tipo == "privada"){
        return await db.insertOne("salas", {"nome": nome, "tipo": tipo, "chave": chave});
    }else{
        return await db.insertOne("salas", {"nome": nome, "tipo": tipo});
    }
}
module.exports = {listarSalas, buscarSala, atualizarMensagens, buscarMensagens, criarSala};