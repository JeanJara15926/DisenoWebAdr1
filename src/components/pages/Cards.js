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
                        label='Arquitecta'
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
                        label='Arquitecto'
                        path='/services'
                        />
                        <CardItem
                        src="images/Pro4.png"
                        text="Emiliano Santiago"
                        label='Arquitecto'
                        path='/services'
                        />
                                                                                                                                                                 
                    </ul>
                    <ul className='cards__items'>                        
                        <CardItem
                        src="images/Pro5.png"
                        text="Mario Roldan"
                        label='Arquitecto'
                        path='/services'
                        /> 
                        <CardItem
                        src="images/Pro6.jpg"
                        text="Josefina Laos"
                        label='Arquitecta'
                        path='/services'
                        />
                        <CardItem
                        src="images/Pro7.jpg"
                        text="Victoria Bustamante"
                        label='Arquitecta'
                        path='/services'
                        />
                        <CardItem
                        src="images/Pro8.jpg"
                        text="Isabel Sanchez Rodrigues"
                        label='Arquitecta'
                        path='/services'
                        />                        
                    </ul>   
                </div>                
                    <CardItem
                    src="images/Pro9.jpg"
                    text="Catalina Duarte"
                    label='Arquitecta'
                    path='/services'
                    />   
                                          
            </div>
        </div>
    )
}

export default Cards
