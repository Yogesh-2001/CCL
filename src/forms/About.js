import React, { useState,useContext, useEffect } from 'react'
import { Button,TextField } from "@material-ui/core";
import { db } from "../firebase.js";
import { collection,setDoc,doc,getDoc } from "firebase/firestore";
import { Context } from "../usercontext.js";
const About = () => {
  const currUserId = useContext(Context)
  const [about,setAbout] = useState("")
  const handleSubmit=async(e)=>{
    e.preventDefault()
    await setDoc(doc(db,'users',currUserId),{
      about:about
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
      if (noteSnapshot.exists()) {
        setAbout(noteSnapshot.data().about);
      } else {
          console.log("Note doesn't exist");
      }
  };
  getUser(currUserId);
  },[])
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="filled-multiline-flexible"
          label="Introduce Yourself (min:300 words)"
          multiline
          minRows={4}
          variant="outlined"
          value={about}
          onChange={(e)=>setAbout(e.target.value)}
          required
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit" className="my-3">
          Add
        </Button>
      </form>
  )
}

export default About