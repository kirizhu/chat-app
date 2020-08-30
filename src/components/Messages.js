import React from 'react';
import moment from 'moment';
import './styles/Messages.css';

class Messages extends React.Component {
  componentDidUpdate() {
    // scroll to bottom
    window.scrollTo(0, this.refs.chat.scrollHeight);
  }

  render() {
    const { messages } = this.props;

    const chatMessages = messages.map((chat, key) => (
      <li className='messages-li' key={key}>
        <p className='messages-timestampText'>
          {moment(chat.timestamp).format('D.M.YYYY HH:mm:ss')}
        </p>

        <p className='messages-messageText'>
          {chat.sender}: {chat.message}
        </p>
      </li>
    ));

    return (
      <ul className='messages-ul' ref='chat'>
        {chatMessages}
      </ul>
    );
  }
}

export default Messages;
