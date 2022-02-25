const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

require('./db/connection');
const VaccinationForm= require('./models/formModel')

app.post('/vaccination-form', async (req, res) => {
    var {
        fName,
        mName,
        lName,
        aadharNo,
        dob,
        address,
        city,
        email,
        mobNo,
        vaccinationCenter,
        vaccinationGroup,
        vaccineName,
        vaccineTimeSlot,
        hardCpofCertificate
    } = req.body;

    const user = new VaccinationForm({
        fName:fname,
        mName:mName,
        lName:lName,
        aadharNo:aadharNo,
        dob:dob,
        address:address,
        city:city,
        email:email,
        mobNo:mobNo,
        vaccinationCenter:vaccinationCenter,
        vaccinationGroup:vaccinationGroup,
        vaccineName:vaccineName,
        vaccineTimeSlot:vaccineTimeSlot,
        hardCpofCertificate:hardCpofCertificate,
        
     });


    user.save().then(() =>{
     console.log('Details saved successfully tp db');
    res.status(200).send('Details saved successully')
    }).catch((e) =>{ console.log('Did not saved due to error' + e) ;
    res.status(502).send('Details not saved successully')    
})

    
})

app.listen(4000, () => {console.log("server is up and running");})
