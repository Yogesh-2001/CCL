import React, { useState,useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { Button } from "@material-ui/core";
import { db } from "../firebase.js";
import { collection,setDoc,doc,getDoc } from "firebase/firestore";
import { Context } from "../usercontext.js";


const Educational = () => {
  const currUserId = useContext(Context)
  const years = ['present',2023,2022, 2021, 2020, 2019, 2018, 2017, 2016];

  const [educations, setEducations] = useState([
    { college: "", degree: "", startYear: "2020", endYear: "2022"},
  ]);

  const handleChangeInput = (e, index) => {
    const values = [...educations];
    values[index][e.target.name] = e.target.value;
    setEducations(values);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await setDoc(doc(db,'users',currUserId),{
      educationDetails:educations
    },{merge:true}).then((snapshot)=>{
      console.log(snapshot);
      alert('Data Submitted')
    }).catch((err)=>{
      alert(err)
    })
  };
 
  useEffect(()=>{
    const getUser = async (id) => {
      const noteSnapshot = await getDoc(doc(db, 'users', id));
      if (noteSnapshot.data().educationDetails.exists()) {
        setEducations(noteSnapshot.data().educationDetails);
      } else {
          console.log("Note doesn't exist");
      }
  };
  getUser(currUserId);
  },[])
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      {
        educations && educations.map((education, index) => (
        <div key={index} className="skill-box">
        <h4 style={{margin:'0px'}}>{index + 1}</h4>
        <TextField id="standard-basic" name='college' value={education.college} onChange={(e) => handleChangeInput(e, index)} label="College/School" required fullWidth/>
      <TextField id="standard-basic" name="degree" value={education.degree} onChange={(e) => handleChangeInput(e, index)} label="Degree/Stream" required fullWidth className="my-3" />
      <section className="d-flex flex-wrap">
        <div>
          <InputLabel id="demo-simple-select-label">Start Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{ width: "300px", marginRight: "50px",marginBottom:'15px' }}
            name='startYear'
            value={education.startYear}
            onChange={(e) => handleChangeInput(e, index)}
          >
            {years.map((year) => {
              return <MenuItem value={`${year}`}>{year}</MenuItem>;
            })}
          </Select>
        </div>
        <div>
          <InputLabel id="demo-simple-select-label">End Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{ width: "300px" }}
            name='endYear'
            value={education.endYear}
            onChange={(e) => handleChangeInput(e, index)}
          >
            {years.map((year) => {
              return <MenuItem value={`${year}`}>{year}</MenuItem>;
            })}
          </Select>
        </div>
      </section>
        </div>
        ))
      }
      <Button
        color="secondary"
        variant="contained"
        className="me-3"
        onClick={() => setEducations([...educations, { college: "", degree: "", startYear: "2020", endYear: "2022"}])}
      >
        Add Education
      </Button>
      <Button color="primary" variant="contained" type='submit'>
          Add
      </Button>
    </form>
  );
};

export default Educational;




