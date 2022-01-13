import React, { useContext, useEffect } from 'react';
import { Button, Card,  } from 'react-bootstrap';
import { ContactContext } from '../Context/ContextProvaider';
import '../../../index.css'
import { Link } from 'react-router-dom';
const MainPages = () => {
    const { contacts, getContact, deleteContact} = useContext(ContactContext)

    useEffect(() => {
        getContact()
    }, [])
    if(!contacts){
        return <h2>Loading...</h2>
    }


    return (
    <>    {
             contacts.length !== 0 ?
            <div style={{display: "flex"}}
            className='m-3'>
            {contacts.map(item=> (
             <Card style={{ width: '18rem', backgroundColor: 'var(--bs-body-color)'}}
             className='btn m-2'
             key={item.id}>
             <Card.Img variant="top"   
             src={item.img} 
             style={{width: '264px',height: '280px', marginTop: "6px"}}
             />
             <Card.Body>
             <h2 className='col'>Name:  {item.name}</h2>
             <h5 className='col'>Number:+{item.phone}</h5>
             <h5 className='col'>Email: {item.email}</h5>
             <Link to={`/edit/${item.name}/${item.id}`}>
             <Button 
               className='action-btn m-2' 
               variant='outline-info'>
               Edit
              </Button>
             </Link>
             <Button
             onClick={() => deleteContact(item.id)} 
             className='action-btn m-2' 
             variant="outline-danger"
             >Delete</Button>
             </Card.Body>
            </Card>
            ))}
        </div>
        : <h1 style={{textAlign: 'center'}}>no contacts</h1>
       }
       </>
    );
};

export default MainPages;