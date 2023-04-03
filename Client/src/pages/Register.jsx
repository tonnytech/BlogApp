import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input  required type="text" placeholder='Enter your name' />
            <input  required type="email" placeholder='Enter your name' />
            <input  required type="password" placeholder='Enter your password' />
            <button> Register </button>
            <p>This is an error!</p>
            <span>Do you have an account? <Link to='/login'>Login</Link></span>
        </form>
    </div>
  )
}

export default Register;