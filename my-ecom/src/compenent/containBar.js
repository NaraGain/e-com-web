import React from "react";
import "./containBar.css";

function ContainerBar (props,data){
    return <div className="container">
        <div className="header">
        {props.name}
        </div>

 {props.data}
    </div>
}

export default ContainerBar;