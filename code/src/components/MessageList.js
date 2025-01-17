/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import LikeBtn from './LikeBtn';
import './messageList.css';

// the component that sets every message posted to the database in a list
const MessageList = ({ loading, setLoading, messageList, setNewLike }) => {
  return (
    <section className="message-container">
      {messageList.map((thought) => (
        <div key={thought._id} className="message-box">
          <p className="message">{thought.message}</p>
          <div className="likes-and-time">
            <LikeBtn
              setNewLike={setNewLike}
              thought={thought}
              loading={loading}
              setLoading={setLoading} />
            <p className="timestamp">Posted <ReactTimeAgo date={thought.createdAt} locale="en-US" timeStyle="round-minute" /></p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default MessageList;