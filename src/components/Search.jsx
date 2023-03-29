import React from "react";

const Search=()=>{
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find a user"/>
            </div>

            <div className="userChat">
                <img src="https://images.pexels.com/photos/15007333/pexels-photo-15007333.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />

                <div className="userChatInfo">
                    <span>Kev</span>
                </div>
            </div>
        </div>
    );
}

export default Search;