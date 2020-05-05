import React, { useState } from 'react'; 
import MemoryCard from './memoryCard';
import UserPrompt from './userPrompts'
import mountain from '../images/mountain.jpg';
import tree from '../images/tree.jpg';
import pavilion from '../images/pavilion.jpg';
import lanterns from '../images/lanterns.jpg';
import cornell from '../images/cornell.jpg';
import '../../App.css';

export default function AllCards () {

    const [imgList, setImgList] = useState([mountain, mountain,tree, tree, tree, tree, tree, tree, tree, tree, tree, tree, tree, pavilion, lanterns]);
    const [numFlip, setNumFlip] = useState(0);
    const [flippedImgs, setFlippedImgs] = useState([]);

    const generateAllCards = () => {
        return(
            imgList.map((img, index) =>(
                    <MemoryCard 
                        numFlip = {numFlip} 
                        updateFlippedImgs = {(input) => setFlippedImgs(input)}
                        updateNumFlip = {(input) => setNumFlip(input)} 
                        imgURL = {img} 
                        alt={index} 
                        defaultPic={cornell}/>
                )
            )
        )
    }

    return (
        <div>
            <div className ="gallery">
                    {generateAllCards()}
            </div>
            <UserPrompt className='userPrompt' numFlip = {numFlip}/>
        </div>
    )
} 