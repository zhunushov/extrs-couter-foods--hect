import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Counter from './conponents/Couter/Counter';
import Receipts from './conponents/Foods/Receipts/Receipts';
import Ingredients from './conponents/Foods/Ingredients/Ingredients';
import Main from './conponents/Main/Main';
import Password from './conponents/MyEmail/Password/Password';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/count' component={Counter}/>
                <Route exact path='/menu'  component={Receipts}/>
                <Route exact path='/ing'  component={Ingredients}/>
                <Route exact path='/pas'  component={Password}/>
            </Switch>
            </BrowserRouter>
        </div>
    );
};
export default Routes;