import React from "react";
import "../Modal/style.css";
import X from "../LogInForms/close.png";

function Close(props) {
    return (
        <button className="close" onClick={props.onClick}><img src={X}></img></button>
    );
}

export default Close;