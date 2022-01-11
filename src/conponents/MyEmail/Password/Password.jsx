import React, { useState } from 'react';
import MyForm from '../MyForm/MyForm';
import Welcome from '../Welcome/Welcome';
const Password = () => {

    const [form, setForm] = useState({
        email: '',
        password:'',
        enterPassword:''
    })
    const [show, setShow] = useState(true)
    return (
        <div>
            {show ?
            <MyForm
            form={form}
            setForm={setForm}
            setShow={setShow}
            />:
            <Welcome
            form={form}
            setShow={setShow}
            />
            }
        </div>
    );
};

export default Password;