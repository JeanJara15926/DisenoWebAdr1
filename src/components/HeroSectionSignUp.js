import React from 'react'
import '../App.css'
import {Button} from './Navbar/Button'
import './HeroSection.css'

function HeroSection3() {
    return (
        <div className='hero-container'>            
            <video src="/videos/Untitled3.mp4" autoPlay loop muted />
            <h1> CERTIFICADOS </h1>
            <p >
            Al ser Premiun en el futuro tendrás acceso total <br/>
            a nuestros servicios con un soporte técnico las<br/>
            24 horas, buscamos potenciar a todos los<br></br> 
            estudiantes y profesionales en el área de diseño <br></br> 
            interior y arquitectura con futuro Premium<br></br> 
            estará mejor preparado para sobrepasar sus <br></br> 
            límites explotar más posibilidades en tu carrera.
            </p>
        </div>
    )
}

export default HeroSection3