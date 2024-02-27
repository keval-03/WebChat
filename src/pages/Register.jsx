import React, { useState } from "react";
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth,storage,db} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";   
import { useNavigate,Link } from "react-router-dom";

const Register=()=>{
    const [err,setErr]=useState(false);
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{  

        e.preventDefault();

        const username=e.target[0].value;
        const email=e.target[1].value;
        const password=e.target[2].value;
        const file=e.target[3].files[0];

        // console.log(`${username} ${email} ${password} ${file}`);

        try{
            const res= await createUserWithEmailAndPassword(auth, email, password);
            
            const storageRef = ref(storage, `${username}`);

            const uploadTask = uploadBytesResumable(storageRef, file);
            
            uploadTask.on('state_changed',(snapshot)=> {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        }
                    },
                    (error) => {
                        // Handle unsuccessful uploads
                        setErr(true);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                            await updateProfile(res.user,{
                                displayName:username,
                                photoURL: downloadURL
                            });
                            await setDoc(doc(db,"users",res.user.uid),{
                                uid: res.user.uid,
                                username,
                                email,
                                photoURL:downloadURL    
                            });

                            await setDoc(doc(db,"userChats",res.user.uid),{});
                            navigate("/");

                        });
                    }
            );
        }
        catch(error){
            console.log(error)
            setErr(true);
        }
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Web Chat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="diplay name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display: "none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>add a display pic</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Something went Wrong!!</span>}
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register;