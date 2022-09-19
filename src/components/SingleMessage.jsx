import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const SingleMessage = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img
          src={
            'https://images.pexels.com/photos/13304393/pexels-photo-13304393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt=''
        />
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img
          src='https://images.pexels.com/photos/13304393/pexels-photo-13304393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>
    </div>
  );
};

export default SingleMessage;
