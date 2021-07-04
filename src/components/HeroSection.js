import React from 'react'
import '../App.css'
import {Button} from './Navbar/Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>            
            <video src="/videos/VidIntro2.mp4" autoPlay loop muted />
            <h1> D&A Future</h1>      
            <p>Diseño y arquitectura del futuro</p>
            <div className="hero-btns">
                {/*<Button 
                className='btns' 
                ButtonStyle='btn--outline'
                ButtonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button 
                className='btns' 
                ButtonStyle='btn--primary'
                ButtonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>*/}
            </div>
        </div>
    )
}

export default HeroSection
