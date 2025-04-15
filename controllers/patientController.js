const patient=require('../models/patients');
const createPatient = async(req,res)=>{
    try{
const(name)=req.body;
const patient=await patient.create(req.body)
    }
    catch(error){
        console(error.message)
    }
}