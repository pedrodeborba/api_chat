const salaModel = require('../models/salaModel');

exports.get=async()=>{
    return await salaModel.listarSalas();
}

exports.get=async(req,res)=>{
    return{"status":"ok", "controller":"Sala"}
}

exports.get=async()=>{
    let salaModel = require('../models/salaModel');
    return salaModel.listarSalas();
}