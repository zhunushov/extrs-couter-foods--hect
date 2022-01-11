import React from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
    return (
        <div>
             <Link to='/count'>
            <button>Counter</button>
             </Link>
             <Link to='/menu'>
            <button>Menu</button>
             </Link>
            <Link to='/pas'>
            <button>Регистрация</button>
            </Link>
        </div>
    );
};

export default Main;