import React, { useState } from 'react'; 
import MemoryCard from './memoryCard';
import UserPrompt from './userPrompts'
import mountain from '../images/mountain.jpg';
import tree from '../images/tree.jpg';
import pavilion from '../images/pavilion.jpg';
import lanterns from '../images/lanterns.jpg';
import cornell from '../images/cornell.jpg';
import victory from '../images/victory_bear.jpg'
import '../../App.css';

export default function AllCards () {

    const [imgList, setImgList] = useState({
        'guessingPic': [mountain, tree, pavilion, lanterns, tree, mountain, pavilion, lanterns],
        'defaultPic' : cornell,
        'winPic' : victory
    });
    const [numFlip, setNumFlip] = useState(0);
    const [flippedImgs, setFlippedImgs] = useState([]);
    const [victoryIndex, setVictoryIndex] = useState([]);
    const [totalVictory, setTotalVictory] = useState(false);

    const generateAllCards = () => {
        return(
            imgList.guessingPic.map((img, index) => (
                (victoryIndex.includes(index)) ?
                        (<figure>
                            <img src={imgList.winPic} alt={index} key={index} width="200" height="200"/>
                        </figure>) :
                        (<MemoryCard numFlip = {numFlip} 
                            alt = {index} 
                            flippedImgs = {flippedImgs}   
                            updateFlippedImgs = {(input) => setFlippedImgs(input)}
                            updateNumFlip = {(input) => setNumFlip(input)} 
                            imgURL = {img} 
                            otherURL={imgList}/>)
                    )
                )
        )
    }
 
    const compareImgs = () => {
            if (numFlip === 2 && flippedImgs.length !== 0) {
                if (flippedImgs[0].imgURL === flippedImgs[1].imgURL) {
                    console.log("AMAZING PAIRED IMGS")
                    setVictoryIndex(victoryIndex.concat([flippedImgs[0].alt,flippedImgs[1].alt]))
                    setFlippedImgs([]);
                    setNumFlip(0);
                }
            console.log(flippedImgs)
            console.log(victoryIndex)
            }
            };

    const isVictory = () => {
        if (totalVictory === false && victoryIndex.length === imgList.guessingPic.length) {
            setTotalVictory(true);
        }
    }

    isVictory();
    compareImgs();

    return (
        <div>
            <div className ="gallery">
                    {generateAllCards()}
            </div>
            <UserPrompt className='userPrompt' numFlip = {numFlip} victory={totalVictory}/>
        </div>
    )
} 