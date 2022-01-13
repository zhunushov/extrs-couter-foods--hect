import axios from 'axios';
import React, { useReducer, createContext } from 'react';
import { API } from '../../Halpers/Halpers';
export const ContactContext = createContext()

const INIT_STATE = {
    contacts: null,
    contactToEdit: null,
    
}

const reducer = (state, action) => {
    switch(action.type){
        case "GET_CONTACTS":
            return {state, contacts: action.payload};
        case "GET_CONTACT_TO_EDIT":
            return {...state, contactToEdit: action.payload}
        default:
            return state
    }
}
const ContextProvaider = (props) => {
    const  [state, dispatch] = useReducer(reducer, INIT_STATE)
    //! дабавление Create
    async function addContact (newContact) {
      try{
          await axios.post(API, newContact)
          getContact()
      }catch(error){
          console.error(error);
      }
    } 
    // ! Гет запрос GET 
    async function getContact () {
        try{
            let res = await axios.get(API)
            let action = {
                type: "GET_CONTACTS",
                payload: res.data
            }
            dispatch(action)
        }catch(error){
            console.log(error);
        }
    }
    // !Delete удаление
    async function deleteContact(id) {
        try{
           await axios.delete(`${API}/${id}`)
           getContact()
        }catch(error){
            console.log(error);
        }
    }
    // !Edit
    async function getContactToEdit(id){
        try{
            let res = await axios(`${API}/${id}`)
            let action = {
                type: "GET_CONTACT_TO_EDIT",
                payload: res.data 
            }
            dispatch(action)
        }catch(error){
            console.log(error);
        }
    }

    async function saveEditedContact(editedContact) {
        try{
            await axios.patch(`${API}/${editedContact.id}`, editedContact)
            getContact()
        }catch(error){
            console.log(error);
        }
    }

    // !Search
    return (
        <ContactContext.Provider
        value={{
          addContact,
          getContact,
          deleteContact,
          contacts: state.contacts,
          contactToEdit: state.contactToEdit,
          getContactToEdit ,
          saveEditedContact,
        }}>
            
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContextProvaider;