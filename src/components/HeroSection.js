import React from 'react'
import '../App.css'
import {Button} from './Navbar/Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>            
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>      
            <p>WHAT ARE YOU WAITING FOR?</p>
            <div className="hero-btns">
                <Button 
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
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
