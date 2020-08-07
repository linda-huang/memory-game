import React, { useState, useEffect } from 'react'; 
import MemoryCard from './memoryCard';
import UserPrompt from './userPrompts'
import cornell from '../images/cornell.jpg';
import victory from '../images/victory_bear.jpg'
import '../../App.css';

export default function AllCards () {

    const [numFlip, setNumFlip] = useState(0);
    const [flippedImgs, setFlippedImgs] = useState([]);
    const [init, setInit] = useState(1);
    const [dataAcquired, setDataAcquired] = useState(0);
    const timeout = setTimeout(() => setInit(0), 3000);

    const [victoryIndex, setVictoryIndex] = useState([]);
    const [totalVictory, setTotalVictory] = useState(false);

    const [dbimgList, setdbImgList] = useState([
        {
            'name' : '',
            "url" : "",
            "id" : ""
        }
    ]);

    useEffect(() => {
        fetch('http://localhost:8080/post')
                .then(res => res.json())
                .then(data => {
                    randomization(data);
                });
    }, [])

    function randomization(data){
            var tempImgList = [];
            var i;
            for (i = 0; i < data.length; i++){
                tempImgList[i] = data[i];
            }
            for (i = 0; i < data.length; i++){
                const ram = Math.floor(Math.random() * data.length);
                var temp = tempImgList[i];
                tempImgList[i] = tempImgList[ram];
                tempImgList[ram] = temp;
            }
            setdbImgList(tempImgList);
    }

    const generateAllCards = () => {
        return(
            dbimgList.map((img, index) =>(
                (init) ? 
                    (<figure>
                        <img src={img.url} width='200' height='200'></img>
                    </figure>) :
                    ((victoryIndex.includes(index)) ?
                        (<figure>
                            <img src={victory} alt={index} key={index} width="200" height="200"/>
                        </figure>) :
                    (<MemoryCard 
                        numFlip = {numFlip} 
                        flippedImgs = {flippedImgs}
                        updateFlippedImgs = {(input) => setFlippedImgs(input)}
                        updateNumFlip = {(input) => setNumFlip(input)} 
                        imgURL = {img.url}
                        alt={index} 
                        defaultPic={cornell}/>))
                )
            )
        )
    }
 
    const compareImgs = () => {
            if (numFlip === 2 && flippedImgs.length !== 0) {
                if (flippedImgs[0].imgURL === flippedImgs[1].imgURL) {
                    setVictoryIndex(victoryIndex.concat([flippedImgs[0].alt,flippedImgs[1].alt]))
                    setFlippedImgs([]);
                    setNumFlip(0);
                }
            }
            };

    const isVictory = () => {
        if (totalVictory === false && victoryIndex.length === dbimgList.length) {
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