import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Lama chat</span>
            <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RzmCAKhjBMu6GN8LHxNLTw8Vt347xfIXWA&usqp=CAU" alt="" />
                <span>John</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar;