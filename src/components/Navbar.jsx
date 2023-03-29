import React from "react";

const Navbar=()=>{
    return (
        <div className="navbar">
            <span className="logo">Web Chat</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/15007333/pexels-photo-15007333.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                <span>Kev</span>
                <button>logout</button>
            </div> 
        </div>
    );
}

export default Navbar;