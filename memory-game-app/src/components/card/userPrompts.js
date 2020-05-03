import React from 'react'; 
import "../../App.css";

export default function userPrompt ({numFlip}) {
    if (numFlip === 0) {
        return (
            <h1>Pick a card!</h1>
        )
    } else if (numFlip === 1) {
        return (
            <h1>Try to match this card!</h1>
        )
    } 
    return (
        <h1>You can't pick any more cards!</h1>
    )
    
}
