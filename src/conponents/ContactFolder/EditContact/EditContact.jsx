import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import  { ContactContext } from '../Context/ContextProvaider';

const EditContact = () => {
    const params = useParams()
    const { getContactToEdit, contactToEdit, saveEditedContact } = useContext(ContactContext)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [img, setImg] = useState('')
    const navigate = useNavigate()

    useEffect(()=> {
        if(contactToEdit){
            setName(contactToEdit.name)
            setPhone(contactToEdit.phone)
            setEmail(contactToEdit.email)
            setImg(contactToEdit.img)
        }
    }, [contactToEdit])
    console.log()
    useEffect(()=>{
        getContactToEdit(params.id)
    }, [])
    function handleSubmit(event){
        event.preventDefault()
        if( !name.trim() || !phone.trim() || !email.trim() || !img.trim()){
            alert('Необходимо  заполнить все поля')
            return
        }
        let editedContact = {
            ...contactToEdit,
            name: name,
            phone: phone,
            email: email,
            img: img
        }
        saveEditedContact(editedContact)
        navigate('/main')
    }
    if(!contactToEdit){
        return <h2>Loading...</h2>
    }
    return (
        <div>
        <Form onSubmit={handleSubmit} >
            <Form.Floating className='mt-2'>
             <Form.Control 
             onChange={(e) => setName(e.target.value)}
             value={name}
             type='text'
             id='inpCustom'
             />
             <label htmlFor="inpCustom">Enter your Name:</label>
            </Form.Floating>
            <Form.Floating className='mt-2'>
             <Form.Control 
             onChange={(e) => setPhone(e.target.value)}
             value={phone}
             type='number'
             id='inpCustom'
             />
             <label htmlFor="inpCustom">Enter your Phone Number:</label>
            </Form.Floating>
            <Form.Floating className='mt-2'>
             <Form.Control 
             onChange={(e) => setEmail(e.target.value)}
             value={email}
             type='email'
             id='inpCustom'
             />
             <label htmlFor="inpCustom">Enter your Email:</label>
            </Form.Floating>
            <Form.Floating className='mt-2'>
             <Form.Control 
             onChange={(e) => setImg(e.target.value)}
             value={img}
             type='text'
             id='inpCustom'
             />
             <label htmlFor="inpCustom">Enter your Photo:</label>
            </Form.Floating>
             <Button type="submit">
                Save Contact
            </Button>
        </Form>
       </div>
    );
};

export default EditContact;