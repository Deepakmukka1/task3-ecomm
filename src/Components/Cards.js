import React from 'react'
import {faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card=(props)=>{

    const style={

        padding:'5px',
        fontWeight:'bold',
        backgroundColor:'#2ecc71',
        border:'1px solid white',
        borderRadius:'5px',
        outline:'none',
        cursor:'pointer',
        fontSize:'16px',
    

    }
 
    return(<div className="cards">

        <img src={props.images} className="imgs" alt="image"/>
        <h3>{props.name}</h3>
        <h4>₹{props.price}</h4>
        <br/>
        <button style={style} onClick={props.clicked}>
        <FontAwesomeIcon icon={faCartPlus} style={{marginRight:'6px'}}/> 
            Buy
        </button> 
         </div>
         );


}

export default Card;