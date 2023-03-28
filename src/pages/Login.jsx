import React from "react";

const Login=()=>{
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Web Chat</span>
                <span className="title">Log In</span>
                <form action="">
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display: "none"}} type="file" id="file"/>
                    
                    <button>Log In</button>
                </form>
                <p>Don't have an account? SignUp</p>
            </div>
        </div>
    );
}

export default Login;