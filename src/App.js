import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import validator from 'validator'

function App() {
  const [formData, updateFormData] = useState({});
  const [aadharNumber, setAadharNumber] = useState(null)
  const [mobNo, setMobNo] = useState(null)
  const [dob, setDob] = useState(null);
  const [vaccineName, setVaccineName] = useState(null)
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData();

    for (let i = 0; i < event.target.length; i++) {
      console.log(event.target[i].name, " : ", event.target[i].value);
      formData.append(event.target[i].name, event.target[i].value);
    }

    axios({
      method: "post",
      url: "http://localhost:4000/vaccination-form",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((fd) => {
      console.log(fd);
    });
  }
  return (
    <div className="App">
      <div className="form-div ">
        <div >
          <h1 className="frm-hdn">Vaccination Form</h1>

          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="fName"
              maxLength="25"
              className="form-group form-control "
              required
              
            />
            <label>Middle Name</label>
            <input
              type="text"
              placeholder="Middle Name"
              name="mName"
              className="form-group form-control "
              maxLength="25"
              
            />
            <label>Surname Name</label>
            <input
              type="text"
              placeholder="Surname Name"
              name="sName"
              className="form-group form-control"
              maxLength="25"
            />
            <label>Aadhar Card Number</label>
            <input
              type="number"
              name="aadharNo"
              placeholder="Aadhar Card Number"
              className="form-group form-control"
              value={aadharNumber}
                onChange={(event) => {
                        if(event.target.value.length==13) return false;   
                        setAadharNumber(event?.target.value);      
                    }
                }
            />
            <label>Date of Birth</label>
            <DatePicker
              selected={dob}
              onChange={(date) => {
                setDob(date);
              }}
              className="form-group form-control"
              placeholderText="Select your dob"
            />
            <label>Address</label>
            <textarea
              name="address"
              id=""
              cols="5"
              rows="2"
              className="form-group form-control"
              maxLength="500"
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="city"
              className="form-group form-control"
            />
            <label>Email Address</label>
            <input
              type="mail"
              name="email"
              placeholder="Email"
              className="form-group form-control"
              onChange={(e) => validateEmail(e)}></input> <br />
              <span style={{fontWeight: 'bold', color: 'black',}}>{emailError}</span> <br />

          
            <label>Mobile Phone Number</label>
            <input
              type="number"
              name="mobNo"
              placeholder="Mobile"
              className="form-group form-control "
              value={mobNo}
                onChange={(event) => {
                        if(event.target.value.length==11) return false;   
                        setMobNo(event?.target.value);      
                    }
                }
            />
            <label>Vaccination Centre</label>
            <select
              name="vaccinationCenter"
              id=""
              className="form-group form-control"
              required
            >
              <option value="">select</option>
              <option value="Centre A">Centre A</option>
              <option value="Centre B">Centre B</option>
              <option value="Centre C">Centre C</option>
            </select>
            <label>Vaccination Group</label>
            <select
              name="vaccinationGroup"
              id=""
              className="form-group form-control"
              required
            >
              <option value="">select</option>
              <option value="18+">18+</option>
              <option value="Senior">Senior</option>
              <option value="Booster">Booster</option>
            </select>

            <label htmlFor="">Vaccine Name</label> <br />
            <div >
              <label >Covisheild</label>
              <input type="radio"
               className="radio-btn"
               checked={vaccineName=="Covisheild"}  
               value="Covisheild"
               onChange={(e) =>{setVaccineName(e.target.value)}}
               required
               />
              <label >Covaxin</label>
              <input type="radio"
              className="radio-btn"
              checked={vaccineName=="Covaxin"}  
               value="Covaxin"
               onChange={(e) =>{setVaccineName(e.target.value)}}
               />
              <label >Sputnik</label>
              <input type="radio" 
              className="radio-btn"
              checked={vaccineName=="Sputnik"}  
               value="Sputnik"
               onChange={(e) =>{setVaccineName(e.target.value)}}
              />
            </div>

            <label htmlFor="">Vaccination Time Slot</label>
            <select
              name="vaccineTimeSlot"
              id=""
              className="form-group form-control"
            >
              <option value="">select</option>
              <option value="10-11">10-11</option>
              <option value="11-12">11-12</option>
              <option value="12-1">12-1</option>
              <option value="1-2">1-2</option>
              <option value="2-3">2-3</option>
            </select>
            <label htmlFor="">Hard Copy of Certificate</label>
            <select
              name="hardCpofCertificate"
              id=""
              className="form-group form-control"
            >
              <option value="">select</option>
              <option value="">Yes</option>
              <option value="">No</option>
            </select>
            <hr />
            <select name="" id="" className="form-group form-control">
              <option value="">select</option>
              <option value="">Laminate Full Page Print</option>
              <option value="">Smart Card</option>
            </select>
            <input type="submit" className="btn btn-primary sbt-btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
