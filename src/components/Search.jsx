import React from "react";
import Chats from "./Chats";

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="fine a user"/>
            </div>
            <Chats />
            <Chats />
            <Chats />
        </div>
    )
}

export default Search;