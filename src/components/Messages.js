import React, { useEffect, useRef } from 'react';
import moment from 'moment';
import './styles/Messages.css';

function Messages({ messages }) {
  const ulRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, ulRef.current.scrollHeight);
  }, [messages]);

  const chatMessages = messages.map((chat, key) => (
    <li className='messages-li' key={key}>
      <p className='messages-messageText'>
        {chat.sender}: {chat.message}
      </p>
      <p className='messages-timestampText'>
        {moment(chat.timestamp).format('HH:mm:ss')}
      </p>
    </li>
  ));

  return (
    <ul className='messages-ul' ref={ulRef}>
      {chatMessages}
    </ul>
  );
}

export default Messages;
