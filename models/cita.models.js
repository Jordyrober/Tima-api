const mongoose = require ("mongoose");

const Citas = mongoose.Schema({
    nombre:{type:String},
    apellidoPat:{type:String},
    apellidoMat:{type:String},
    matricula:{type:String, unique: true},
    modeloVeh:{type:String},
    modAño:{type:Number},
    telefono:{type:Number},
    correo:{type: String},
    fecha:{type:Date},
    created_at: {type: Date}
})

module.exports=mongoose.model("Citas", Citas);