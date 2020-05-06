import React, { useState } from 'react'; 
import "../../App.css";

export default function MemoryCard ({numFlip, imgURL, alt, defaultPic, updateNumFlip, updateFlippedImgs}) {
    const [currentPic, setCurrentPic] = useState(defaultPic);
    const [displayInterval, setDisplayInterval] = useState(null);

    const flipForward = () => {
        setCurrentPic(imgURL);
        updateNumFlip(numFlip + 1);
        // setDisplayInterval(setTimeout(() => flipBack(), 2000))
    }

    const flipBack = () => {
        setCurrentPic(defaultPic);
        updateNumFlip(numFlip - 1);
        // setDisplayInterval(clearTimeout(displayInterval))
    }
    
    const juggleImage = () => {
        if (numFlip < 2 && currentPic === defaultPic) {
            flipForward();
        } else if (currentPic !== defaultPic) {
            flipBack();
        }
    }

    return(
        <figure>
                <img src={currentPic} alt={alt} key={alt} onClick={juggleImage} className="gallery_image"/>
        </figure>
        
    )
}