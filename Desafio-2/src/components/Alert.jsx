import React from "react";
import "../assets/css/Alert.css"

function Alert(props) {


    return(

    <div className="error" style={{backgroundColor: props.color}} >
        <p>{props.mensaje}</p>
    </div>
    )
    
}

export default Alert;