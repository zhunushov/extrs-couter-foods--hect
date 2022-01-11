import React from 'react';
import { Button } from 'react-bootstrap';

const MyForm = ({form, setForm, setShow}) => {
    const submit = (event) => {
        event.preventDefault()
        if(checkPassword() || checkForm()){
            return
        }
        setShow(false)
    }

    const update = (event) => {
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }
    
    function checkForm(){
        if(!form.email.trim() || !form.password.trim() || !form.enterPassword.trim()){
            alert('Необходимо заполнить все поля')
            return true
        } else{
            return false
        }
    }

    function checkPassword(){
        if(form.password !== form.enterPassword){
            alert ('Пароли несовпадают')
            return  true
        } else {
            return false
        }
    }
    return (
        <div>
            <form onSubmit={submit}>
                <label className='m-3'>
                    Email Address:
                    <br/>
                    <input type="email"
                    value={form.email}
                    onChange={update}
                    name='email'
                    />
                </label>
                <br/>
                <label className='m-3'>
                    Password
                    <br/>
                    <input type="password" 
                    value={form.password}
                    onChange={update}
                    name='password'
                    />
                </label>
                <br/>
                <label className='m-3'>           
                    Password confirmation
                    <br/>
                    <input type="password" 
                    value={form.enterPassword}
                    onChange={update}
                    name='enterPassword'
                    />
                </label>
                <br/>
                <Button 
                    type='submit'
                    className='btn m-3'
                    variant='outline-primary'
                    >
                        Войти
                </Button>   
            </form>
        </div>
    );
};

export default MyForm