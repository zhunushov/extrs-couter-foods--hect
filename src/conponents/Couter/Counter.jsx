import React, { useState } from 'react';
import '../../index.css'
const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className='count'>
           <h1>увеличивается {count} раз</h1>
           <button className='btn' onClick={increment}>+</button>
           <button className='btn' onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;