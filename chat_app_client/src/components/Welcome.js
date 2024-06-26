import React from "react";
import "./myStyle.css";
import logo from "../images/chat.png";

function Welcome()
{
    return(
        <div className="welcome-container">
            <img src={logo} alt="logo" className="welcome-logo"/>
            <p>View ans text directly to peoplr present in the chat rooms.</p>
        </div>
    );
}

export default Welcome;