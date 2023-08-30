import React, {useState} from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import {auth} from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then(auth => {
        navigate('/');
      })
      .catch(error => alert(error.message));
  }

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      // it successfully created a new user with email and password
      if (auth) {
        navigate('/');
      }
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
    <Link to='/'>
        <img 
        className='login_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt=''/>
    </Link>

    <div className='login_container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button type='submit' 
          onClick={signIn}
          className='login_signInButton'>
            Sign In
          </button>
        </form>
        
        <p>
          By signing-in you agree to Amazon's signing
          conditions of Use & Sale. Please see our 
          Privacy Notice, our Cookies Notice and 
          and our Interest-Based Ads Notice.
        </p>

        <button 
        onClick={register}
        className='login_registerButton'>
            Create your Amazon account
        </button>
    </div>
    </div>
  )
}

export default Login;