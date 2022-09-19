import React, { useContext } from 'react';
import Add from '../img/add.png';
import Cam from '../img/cam.png';
import More from '../img/more.png';
import Input from './Input';
import Messages from './Messages';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
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
