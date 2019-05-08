import React from "react";
import "../Modal/style.css";

function Close(props) {
    return (
        <button className="close" onClick={props.onClick}><i class="fas fa-times"></i></button>
    );
}

export default Close;