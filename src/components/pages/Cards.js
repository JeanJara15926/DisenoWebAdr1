import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Profesores calificados Internacionales</h1>
            <div className='cards__container'>                
                <div className='cards__wrapper'>                    
                    <ul className='cards__items'>
                        <CardItem
                        src="images/Pro1.jpeg"
                        text="Sara Salazar"
                        label='Aruiqtecta'
                        path='/services'
                        /> 
                        <CardItem
                        src="images/Pro2.jpg"
                        text="Adrián Schwartz"
                        label='fotografo'
                        path='/services'
                        />
                        <CardItem
                        src="images/Pro3.jpg"
                        text="Emiliano Santiago"
                        label='Aruiqtecto'
                        path='/services'
                        />                                                                                                                  
                    </ul>               
                </div>                              
            </div>
        </div>
    )
}

export default Cards
