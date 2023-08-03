import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Chats from "../components/Chats";
import input from "../components/input";
import Message from "../components/Message";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home;