import React, { useState } from 'react'; 
import MemoryCard from './memoryCard';
import mountain from '../images/mountain.jpg';
import tree from '../images/tree.jpg';
import pavilion from '../images/pavilion.jpg';
import lanterns from '../images/lanterns.jpg';
import '../../App.css';

export default function AllCards () {

    const [imgList, setImgList] = useState([mountain, tree, pavilion, lanterns]);

    const generateAllCards = () => {
        return(
            imgList.map((img, index) =>
            <MemoryCard imgURL = {img} alt={index}/>
            )
        )
    }

    return (
        <div className='cardContainer'>
            {generateAllCards()}
        </div>
    )
} 