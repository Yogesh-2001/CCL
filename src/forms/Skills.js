import { Button, TextField } from "@material-ui/core";
import React, { useState,useContext, useEffect } from "react";
import { db } from "../firebase.js";
import { collection,setDoc,doc,getDoc } from "firebase/firestore";
import { Context } from "../usercontext.js";
const Skills = () => {
  const currUserId = useContext(Context)
    const [skills,setSkills] = useState([
        {title:"",rating:''},

    ]);
    
    const handleChangeInput=(e,index)=>{
            const values = [...skills];
            values[index][e.target.name] = e.target.value;
            setSkills(values)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        await setDoc(doc(db,'users',currUserId),{
          skills:skills
        },{merge:true}).then((snapshot)=>{
          console.log(snapshot);
          alert('Data Submitted')
        }).catch((err)=>{
          alert(err)
        })
    }

    useEffect(()=>{
      const getUser = async (id) => {
        const noteSnapshot = await getDoc(doc(db, 'users', id));
        if (noteSnapshot.data().skills.exists()) {
          setSkills(noteSnapshot.data().skills);
        } else {
            console.log("Note doesn't exist");
        }
    };
    getUser(currUserId);
    },[])
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
     {
         skills.map((skill,index)=>(
             <div key={index} className='col-12 skill-box d-flex align-items-center flex-wrap'>
             <h4>{index+1}</h4>
            
             <TextField 
                 id="standard-basic"
                 label="Skill Title"
                 name="title"
                 
                 className="me-5 ms-md-3 col-12 col-md-5"
                 required
                 
                 value={skill.title}
                 onChange={e=>handleChangeInput(e,index)}
             />
             <TextField 
                 id="standard-basic"
                 label="Rating(0-10)"
                 type='number'
                 name="rating"
                 className='col-12 col-md-4 my-3'
                 required
                 value={skill.rating}
                 InputProps={{inputProps:{min:0,max:10}}}
                 onChange={e=>handleChangeInput(e,index)}
             />
             
             </div>
         ))
     }
     <Button color='secondary' variant="contained" className="me-3" onClick={()=>setSkills([...skills,{title:"",rating:""}])}>Add Skill</Button>
      <Button type="submit" color='primary' variant="contained">Submit</Button>
    </form>
   
  );
};

export default Skills;
