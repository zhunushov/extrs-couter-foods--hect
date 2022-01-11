import React from 'react';
import { Button } from 'react-bootstrap';
const Welcome = (props) => {
    return (
        <div>
            <h1>Welcome to {props.form.email}</h1>
                <Button 
                    className='btn m-3'
                    variant='warning'
                    onClick={() => props.setShow(true)}
                    >
                    Выйти
                </Button>   
        </div>
    );
    };

export default  Welcome;