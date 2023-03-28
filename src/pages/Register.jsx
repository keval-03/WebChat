import React from "react";
import Add from "../img/addAvatar.png"


const Register=()=>{
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Web Chat</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder="diplay name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display: "none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>add a display pic</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;