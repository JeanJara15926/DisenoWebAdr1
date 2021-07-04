import React from 'react'
import '../App.css'
import {Button} from './Navbar/Button'
import './HeroSection.css'

function HeroSection2() {
    return (
        <div className='hero-container'>                     
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1> Cursos </h1>            
        </div>
    )
}

export default HeroSection2