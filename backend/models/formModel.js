const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const vaccinationFormSchema =new Schema({
    fName:{
        type:String,
        max:25,
        required:true
    },
    mName:{
        type:String,
     },
    sName:{
        type:String,
    },
    aadharNo:{
        type:String,
        minLength:5,
        maxLength:5,
        required:true
    },
    dob:{
        type:Date,
    },
    address:{
        type:String,
        maxLength:500
    },
    city:{
        type:String
    },
    email:{
        type:String
    },
    mobNo:{
        type:Number
    },
    vaccinationCenter:{
        type:String,
        required:true
    },
    vaccinationGroup:{
        type:String,
        required:true
    },
    vaccineName:{
        type:String,
        required:true
    },
    vaccineTimeSlot:{
        type:String
    },
    hardCpofCertificate:{
        type:String
    }
});

const VaccinationForm = mongoose.model("Vaccinationform",vaccinationFormSchema);

module.exports = VaccinationForm;

