import React, { useState } from 'react'; 
import "../../App.css";

export default function MemoryCard ({alt, numFlip, imgURL, otherURL, updateNumFlip, updateFlippedImgs, flippedImgs}) {
    const [currentPic, setCurrentPic] = useState(otherURL.defaultPic);

    const flipForward = () => {
        setCurrentPic(imgURL);
        updateNumFlip(numFlip + 1);
    }

    const flipBack = () => {
        setCurrentPic(otherURL.defaultPic);
        updateNumFlip(numFlip - 1);
    }
    
    const juggleImage = () => {
        if (numFlip < 2 && currentPic === otherURL.defaultPic) {
            flipForward(); 
            updateFlippedImgs(flippedImgs.concat([{'imgURL': imgURL,
            'alt' : alt}]))
        } else if (currentPic !== otherURL.defaultPic) {
            flipBack();
            updateFlippedImgs(flippedImgs.filter(img => img.alt !== alt))
        }
    }

    return(
        <figure>
                <img src={currentPic} alt={alt} key={alt} onClick={juggleImage} className="gallery_image"/>
        </figure>
        
    )
    }