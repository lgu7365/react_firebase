import React from "react";

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RzmCAKhjBMu6GN8LHxNLTw8Vt347xfIXWA&usqp=CAU" alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RzmCAKhjBMu6GN8LHxNLTw8Vt347xfIXWA&usqp=CAU" alt="" /> 
            </div>
        </div>
    )
}

export default Message;