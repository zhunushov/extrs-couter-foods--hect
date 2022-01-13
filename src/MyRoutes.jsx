import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './conponents/Couter/Counter';
import Receipts from './conponents/Foods/Receipts/Receipts';
import Ingredients from './conponents/Foods/Ingredients/Ingredients';
import Password from './conponents/MyEmail/Password/Password';
import AddContact from './conponents/ContactFolder/AddContact/AddContact';
import ContextProvaider from './conponents/ContactFolder/Context/ContextProvaider';
import MainPages from './conponents/ContactFolder/MainPages/MainPages';
import MyNavbar from './conponents/MyNavbar';
import EditContact from './conponents/ContactFolder/EditContact/EditContact';
const MyRoutes = () => {
    return (
          <ContextProvaider>
           <BrowserRouter>
             <MyNavbar/>
            <Routes>
                <Route  path='/count' element={<Counter/>}/>
                <Route  path='/menu'  element={<Receipts/>}/>
                <Route  path='/ing'  element={<Ingredients/>}/>
                <Route  path='/pas' element={<Password/>}/>
                <Route  path='/add' element={<AddContact/>}/>
                <Route  path='/main' element={<MainPages/>}/>
                <Route path="/edit/:name/:id" element={<EditContact/>}/>
            </Routes>
           </BrowserRouter>
          </ContextProvaider>

    );
};
export default MyRoutes;