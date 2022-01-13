import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../Context/ContextProvaider';


const AddContact = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [img, setImg] = useState('')
    const navigate = useNavigate()
    const {addContact} = useContext(ContactContext)

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handlePhone = (event) => {
        setPhone(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleImg = (event) => {
        setImg(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
      if( !name.trim() || !phone.trim() || !email.trim() || !img.trim()){
          alert('Необходимо заполният все поля')
          return 
      }
      const newContact = {
          name: name,
          phone: phone,
          email: email, 
          img: img
      }
      addContact(newContact)
      setName('')
      setPhone('')
      setEmail('')
      setImg('')
      navigate('/main')
    }
    return (
        <div>
         <Form onSubmit={handleSubmit} >
             <Form.Floating className='mt-2'>
              <Form.Control 
              onChange={handleName}
              value={name}
              type='text'
              id='inpCustom'
              />
              <label htmlFor="inpCustom">Enter your Name:</label>
             </Form.Floating>
             <Form.Floating className='mt-2'>
              <Form.Control 
              onChange={handlePhone}
              value={phone}
              type='number'
              id='inpCustom'
              />
              <label htmlFor="inpCustom">Enter your Phone Number:</label>
             </Form.Floating>
             <Form.Floating className='mt-2'>
              <Form.Control 
              onChange={handleEmail}
              value={email}
              type='email'
              id='inpCustom'
              />
              <label htmlFor="inpCustom">Enter your Email:</label>
             </Form.Floating>
             <Form.Floating className='mt-2'>
              <Form.Control 
              onChange={handleImg}
              value={img}
              type='text'
              id='inpCustom'
              />
              <label htmlFor="inpCustom">Enter your Photo:</label>
             </Form.Floating>
              <Button type="submit">
                 Sava Contact
             </Button>
         </Form>
        </div>
    );
};

export default AddContact;