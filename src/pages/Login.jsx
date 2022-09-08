import React from 'react';

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Mini Chat</span>
        <span className='title'>Login</span>
        <form action=''>
          <input type='email' placeholder='email' name='email' />
          <input type='password' placeholder='password' name='password' />
          <button>Sign In</button>
        </form>
        <p>You don't have an acount? Register</p>
      </div>
    </div>
  );
};

export default Login;
