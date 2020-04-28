import React, { useState } from 'react'; 
import "../../App.css";

export default function memoryCard ({imgURL, alt}) {
    console.log("I am entering loop");
    return(
        <div className='card'>
            <img src={imgURL} alt={alt} width="200" height="200"/>
        </div>
    )
}