import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <>
         <Navbar bg="dark" variant="dark">
         <Container>
          <Nav className="me-auto">
          <Link to='/main'>
            <Button className='action-btn m-3'>Home</Button>
          </Link>
          <Link to='/count'>
            <Button className='action-btn m-3'>Counter</Button>
          </Link>
          <Link to='/menu'>
          <Button className='action-btn m-3'>Foods</Button>
          </Link>
          <Link to='/main'>
          <Button className='action-btn m-3'>Contact List</Button>
          </Link>
          <Link to='/add'>
          <Button className='action-btn m-3'>Add contact</Button>
          </Link>
         </Nav>
          <Link to='/pas'>
          <Button className='action-btn m-3'>Регистрация</Button>
          </Link>
         </Container>
        </Navbar>
        </>
    )
};

export default MyNavbar;