import React from "react";

const Background = (props) => {
    return (
        <div style = {{backgroundColor: props.backgroundColor, width : "100%" ,height :"100%", position : "absolute"}}>
            Hello background
        </div>
    )
}

export default Background;