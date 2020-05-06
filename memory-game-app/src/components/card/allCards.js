import React, { useState, useEffect } from 'react'; 
import MemoryCard from './memoryCard';
import UserPrompt from './userPrompts'
import mountain from '../images/mountain.jpg';
import tree from '../images/tree.jpg';
import pavilion from '../images/pavilion.jpg';
import lanterns from '../images/lanterns.jpg';
import cornell from '../images/cornell.jpg';
import '../../App.css';

export default function AllCards () {

    const [imgList, setImgList] = useState([
        mountain, mountain, tree, tree, pavilion, pavilion, lanterns, lanterns]);
    const [numFlip, setNumFlip] = useState(0);
    const [flippedImgs, setFlippedImgs] = useState([]);
    const [init, setInit] = useState(1);
    const [dbimglist, setdbImgList] = useState([]);
    const timeout = setTimeout(() => setInit(0), 3000);

    useEffect(() => {
        var i;
        for (i = 0; i < dbimgList.length; i++){
            const ram = Math.floor(Math.random() * dbimgList.length);
            var temp = dbimgList[i];
            dbimgList[i] = dbimgList[ram];
            dbimgList[ram] = temp;
        }
    }, [])

    const generateAllCards = () => {
        return(
            dbimgList.map((img, index) =>(
                (init) ? 
                    (<figure>
                        <img src={img.url} width='200' height='200'></img>
                    </figure>) :
                    (<MemoryCard 
                        numFlip = {numFlip} 
                        updateFlippedImgs = {(input) => setFlippedImgs(input)}
                        updateNumFlip = {(input) => setNumFlip(input)} 
                        imgURL = {img.url} 
                        alt={index} 
                        defaultPic={cornell}/>)
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