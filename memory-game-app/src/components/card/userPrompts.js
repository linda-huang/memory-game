import React from 'react'; 
import "../../App.css";

export default function userPrompt ({numFlip, victory}) {
    if (victory === true) {
        return (
            <h1 className='userPrompt'>YOU WON!</h1>
        )

    } else if (numFlip === 0) {
        return (
            <h1 className='userPrompt'>PICK A CARD!</h1>
        )
        
    } else if (numFlip === 1) {
        return (
            <h1 className='userPrompt'>TRY TO MATCH THIS CARD!</h1>
        )
    } 
    return (
        <h1 className='userPrompt'>YOU CAN'T PICK ANY MORE CARDS!</h1>
    )
    
}
