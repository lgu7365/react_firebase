import React from "react";
import Slidebar from "../components/Slidebar";
import Chat from "../components/Chat";
import Chats from "../components/Chats";
import input from "../components/input";
import message from "../components/message";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Slidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home;