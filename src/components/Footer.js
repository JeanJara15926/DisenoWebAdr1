import React from 'react'
import { Button } from './Navbar/Button'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footers() {
    return (
        <div className='footer-container'>
            <section 
            className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals.
                </p>
                <p className='footer-subscription-text'>
                    you can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                    </form>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h3>About Us</h3>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h3>Contact Us</h3>
                        <Link to='/sign-up'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>                        
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h3>Videos</h3>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h3>Social Media</h3>
                        <Link to="//www.instagram.com" target="_blank">Instagram</Link>
                        <Link to="//www.facebook.com/" target="_blank" >Facebook</Link>
                        <Link to="//www.youtube.com" target="_blank">Youtube</Link>
                        <Link to="//twitter.com/login" target="_blank">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            FUTURE <i className='fab fa-typo3'></i>
                        </Link>
                    </div>
                    <small className="website-rights">FUTURE 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="//www.facebook.com/" target="_blank" 
                        arial-label='Facebook'>
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link className="social-icon-link instagram" to="//www.instagram.com" target="_blank" 
                        arial-label='Instagram'>
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link className="social-icon-link youtube" to="//www.youtube.com" target="_blank" 
                        arial-label='Youtube'>
                            <i className="fab fa-youtube"/>
                        </Link>
                        <Link className="social-icon-link twitter" to="//twitter.com/login" target="_blank" 
                        arial-label='Twitter'>
                            <i className="fab fa-twitter"/>
                        </Link>
                        <Link className="social-icon-link linkedin" to="/" target="_blank" 
                        arial-label='Linkedin'>
                            <i className="fab fa-linkedin"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footers
