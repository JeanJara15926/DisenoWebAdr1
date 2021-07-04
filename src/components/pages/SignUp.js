import React from 'react';
import validate from './Form/validateInfo';
import useForm from './Form/useForm';
import Footer from '../Footer';
import '../HeroSection.css';
import './Form/Form.css';


const SignUp = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );
    return (
        <render>          
          <div className='hero-container'>            
            <video src="/videos/video-1.mp4" autoPlay loop muted />                    
          </div>                 
          <div className='form-content-right'>          
            <form onSubmit={handleSubmit} className='form' noValidate>
              <h1>
                Get started with us today! Create your account by filling out the
                information below.
              </h1>
              <div className='form-inputs'>
                <label className='form-label'>Username</label>
                <input
                  className='form-input'
                  type='text'
                  name='username'
                  placeholder='Enter your username'
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
              </div>
              <div className='form-inputs'>
                <label className='form-label'>Email</label>
                <input
                  className='form-input'
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className='form-inputs'>
                <label className='form-label'>Password</label>
                <input
                  className='form-input'
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div className='form-inputs'>
                <label className='form-label'>Confirm Password</label>
                <input
                  className='form-input'
                  type='password'
                  name='password2'
                  placeholder='Confirm your password'
                  value={values.password2}
                  onChange={handleChange}
                />
                {errors.password2 && <p>{errors.password2}</p>}
              </div>
              {/*******************button a submit************************ */}
              <button className='form-input-btn' type='button'>
                Sign up
              </button>
              <span className='form-input-login'>
                Already have an account? Login <a href='#'>here</a>
              </span>
            </form>
          </div>
          <Footer/>
        </render>
      );
  };  
  export default SignUp;