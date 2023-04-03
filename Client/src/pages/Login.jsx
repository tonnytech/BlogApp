import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input  type="text" placeholder='Enter your name' />
            <input  type="password" placeholder='Enter your password' />
            <button> Submit </button>
            <p>This is an error!</p>
            <span>Don't you have an account? <Link to='/register'> Register</Link> </span>
        </form>
    </div>
  )
}

export default Login