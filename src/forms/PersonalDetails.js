import React, { useState ,useContext, useEffect} from "react";
import { Button,TextField } from "@material-ui/core";
import { db } from "../firebase.js";
import { collection,setDoc,doc ,getDoc} from "firebase/firestore";
import { Context } from "../usercontext.js";
import {storage} from '../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const PersonalDetails = () => {
  const currUserId = useContext(Context)
  const [progress,setProgress] = useState(0);
  const [details,setDetails] = useState({
    fullName:'',
    designation:'',
    email:'',
    phone:'',
    linkdinUrl:'',
    profileUrl:''
  })

  useEffect(()=>{
    const getUser = async (id) => {
      const noteSnapshot = await getDoc(doc(db, 'users', id));
      if (noteSnapshot.exists()) {
        setDetails(noteSnapshot.data());
      } else {
          console.log("Note doesn't exist");
      }
  };
  getUser(currUserId);
  },[])

  const handleSubmit=async(e)=>{
    e.preventDefault()
    
    await setDoc(doc(db,'users',currUserId),{
      fullName:details.fullName,
      designation:details.designation,
      email:details.email,
      phone:details.phone,
      linkdinUrl:details.linkdinUrl,
      profileUrl:details.profileUrl
    },{merge:true} ).then((snapshot)=>{
      console.log(snapshot);
      alert('Data Submitted')
    }).catch((err)=>{
      alert(err)
    })
  }

 

  const uploadFile=(file)=>{
    if(!file) return
    const storageRef = ref(storage,`/images/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef,file)
    uploadTask.on('state_changed',(snapshot)=>{
      const prog = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)

      setProgress(prog)
    },(err)=>{
      console.log(err);
    },()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
        console.log(url);
        setDetails({...details,profileUrl:url})
      })
    })
    
  }

  const handleImgSubmit =(e)=>{
    const file = e.target.files[0]
    console.log(file);
    uploadFile(file)
  }
  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="standard-basic" value={details.fullName} onChange={(e)=>setDetails({...details,fullName:e.target.value})} label="Full Name" required fullWidth />
        <TextField id="standard-basic" value={details.designation} onChange={(e)=>setDetails({...details,designation:e.target.value})} label="Designation" required fullWidth/>
        <TextField id="standard-basic" type={"email"} value={details.email} onChange={(e)=>setDetails({...details,email:e.target.value})} label="E-mail" required fullWidth/>
        <TextField
          id="standard-basic"
          type="number"
          label="Phone No"
          required
          fullWidth
          value={details.phone}
          onChange={(e)=>setDetails({...details,phone:e.target.value})}
        />
        <input id="standard-basic"
         className="mt-3"
         required
         type={"file"}
         onChange={handleImgSubmit}
         name='profileImg'
          />
           <div className="progress my-2">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: Number(`${progress}`) + "%",
                            }}
                            aria-valuenow={Number(`${progress}`)}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {Number(`${progress}`) + "%"}
                          </div>
                        </div>
          {/* {progress===100 & progress===0?"":<h4>uploaded {progress && progress} %</h4>} */}
        <TextField
          id="standard-basic"
          type="url"
          label="linkedIn Url"
          required
          fullWidth
          onChange={(e)=>setDetails({...details,linkdinUrl:e.target.value})}
          value={details.linkdinUrl}
        />
        <Button variant="contained" color="primary" type="submit" className="my-3">
          Add
        </Button>
      </form>
    </>
  );
};

export default PersonalDetails;
