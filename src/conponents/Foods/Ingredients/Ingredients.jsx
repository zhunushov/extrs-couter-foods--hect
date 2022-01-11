import React from 'react';
const Ingredients = (props) => {
        if(props.meal.id === 'manty'){
            return(
            <div>
            <h1>Манты</h1>
            <h4>лук</h4>
            <h4>тесто</h4>
            <h4>мясо</h4>
            <h4>соль</h4>
            <h4>черный перец</h4>
            </div>)
        }if(props.meal.id === 'lagman'){
            return(
            <div>
            <h1>Лагман</h1>
            <h4>лук</h4>
            <h4>тесто</h4>
            <h4>мясо</h4>
            <h4>соль</h4>
            <h4>перец</h4>
           
            </div> )
        }if(props.meal.id === 'kuurdak'){
            return(
            <div> 
            <h1>Куурдак</h1>
            <h4>лук</h4>
            <h4>кортошка</h4>
            <h4>мясо говядины</h4>
            <h4>соль</h4>
            </div>)
        }
        return(<></>)   
}
export default Ingredients;