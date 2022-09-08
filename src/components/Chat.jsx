import React from 'react';
import Add from '../img/add.png';
import Cam from '../img/cam.png';
import More from '../img/more.png';

import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Martin</span>
        <div className='chatIcons'>
          <img src={Cam} alt='camera' />
          <img src={Add} alt='add' />
          <img src={More} alt='more' />
        </div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  );
};

export default Chat;
