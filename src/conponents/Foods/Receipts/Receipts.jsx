import React, { useState } from 'react';
import '../../../index.css';
import Ingredients from '../Ingredients/Ingredients';

const Receipts = () => {
    const [meal, setMeal] = useState({
        id: '',
    })
    const handleChenge = (event) => {
        setMeal({
            ...meal,
            id:  event.target.id,
        })
    }      
    return (
           <>
            <div className='menu'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmI4De_awC539RY_j8TB7MVAwn9ViXW5KWWg&usqp=CAU" alt="" />
            <p>Манты</p>
            <input
             placeholder='Курдак из говядины' 
             type="radio" 
             id='manty'
             name='contact'
             onChange={handleChenge}/>
            <br/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeeKS0NbbhStOxcg7X0ol-UMk7ryRGbPFvg&usqp=CAU" alt="" />
            <p>Лагман</p>
            <input
            placeholder='Лагман' 
            type="radio"
            id='lagman'
            name='contact'
            onChange={handleChenge}/>
             <br/>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXACAPR-wAGp1ire__0SLfrocabVHLKXbxg&usqp=CAU" alt="" />
            <p>Куурдак из говядины</p>
            <input
            placeholder='Курдак из говядины' 
            type="radio"
            id='kuurdak'
            name='contact'
            onChange={handleChenge} />
            </div>
            <div className='in'> 
            <Ingredients  meal={meal}/>
            </div>
            </>
    );
};
export default Receipts;