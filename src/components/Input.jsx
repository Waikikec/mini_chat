import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { db, storage } from '../firebase';

import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Attach from '../img/attach.png';
import Img from '../img/img.png';

const Input = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (image) {
      const storageRef = ref(storage, uuid);

      await uploadBytesResumable(storageRef, image).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                image: downloadURL,
              }),
            });
          } catch (err) {}
        });
      });
    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId + '.date']: serverTimestamp(),
    });

    await updateDoc(doc(db, 'userChats', data.user.uid), {
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId + '.date']: serverTimestamp(),
    });

    setText('');
    setImage(null);
  };

  return (
    <div className='input'>
      <input
        type='text'
        placeholder='Type something...'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className='send'>
        <img src={Attach} alt='' />
        <input
          type='file'
          style={{ display: 'none' }}
          id='file'
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor='file'>
          <img src={Img} alt='' />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
