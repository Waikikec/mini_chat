import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Mini Chat</span>
      <div className='user'>
        <img
          src='https://images.pexels.com/photos/13304393/pexels-photo-13304393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <span>Martin</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
