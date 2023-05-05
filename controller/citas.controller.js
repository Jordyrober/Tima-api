const Citas=require("../models/cita.models");


function createCitas(req, res){
    const citas = new Citas(req.body);

    citas.save((error, citasStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(citasStored)
        }
    })
}
    

    function getCitas(req, res){
        Citas.find((error, citasStored)=>{
            if(error){
                res.status(500).send({msg: "No hay datos que consultar"})
            }else{
                res.status(200).send(citasStored)
            }
        })
    }

   function deleteCitas(req, res){
    const {id}= req.params;

    Citas.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg: "Error al eliminar la cita"})
        }else{
            res.status(200).send({msg: "Cita eliminada"})
        }
    })
   }

   async function getCitas(req, res){
    console.log("Obtener las citas")
   }

   module.exports={
    createCitas,
    getCitas,
    deleteCitas
   }
    
