import React from "react";
import Messages from "./Mesages";
import Input from "./Input"
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"

const Chats=()=>{
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Kev</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>

            <Messages />
            <Input />
        </div>
    );
}

export default Chats;