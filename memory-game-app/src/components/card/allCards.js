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

    const numImg = 4;
    const [imgList, setImgList] = useState([]);
    // const [imgList, setImgList] = useState([mountain, tree, pavilion, lanterns]);
    const [numFlip, setNumFlip] = useState(0);
    const [flippedImgs, setFlippedImgs] = useState([]);
    const [dbimgList, setdbImgList] = useState([
        {
            "name" : '',
            "url" : '',
            "id" : ''
        }
    ]);
    
    useEffect(() => {
        fetch('http://localhost:8080/post')
                .then(res => res.json())
                .then(data => setdbImgList(data));
    }, [])

    // function generateImgList(num){
    //         fetchDBImage();
    //     console.log(dbimgList);
        // var i;
        // for (i = 0; i < num; i++){
            // const len = dbimgList.length;
            // const ram = Math.floor(Math.random() * len);
            // imgList[i] = (dbimgList[i].url);
    //     }
    // }

    // useEffect((num) => {
    //     var i;
    //     for (i = 0; i < num; i++){
    //         const ram = Math.floor(Math.random() * dbimgList.length);
    //         setImgList(dbimgList[ram].url);
    //     }
    // })

    console.log(dbimgList.url);

    const generateAllCards = () => {
        // generateImgList(numImg);
        return(
            dbimgList.map((img, index) =>(
                <MemoryCard numFlip = {numFlip} updateFlippedImgs = {(input) => setFlippedImgs(input)}
                    updateNumFlip = {(input) => setNumFlip(input)} imgURL = {img.url} alt={index} defaultPic={cornell}/>
                )
            )
        )
    }

    return (
        <div>
            <div className='cardContainer'>
                {generateAllCards()}
            </div>
            <UserPrompt className='userPrompt' numFlip = {numFlip}/>
        </div>
    )
} 