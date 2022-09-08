import React from 'react';
import Add from '../img/addAvatar.png';

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Mini Chat</span>
        <span className='title'>Register</span>
        <form action=''>
          <input type='text' placeholder='display name' name='username' />
          <input type='email' placeholder='email' name='email' />
          <input type='password' placeholder='password' name='password' />
          <label htmlFor='file'>
            <img src={Add} alt='' />
            <span>Add an avatar</span>
          </label>
          <input style={{ display: 'none' }} type='file' name='' id='file' />
          <button>Sign Up</button>
        </form>
        <p>You do have an acount? Login</p>
      </div>
    </div>
  );
};

export default Register;
