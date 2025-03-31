import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

axios.defaults.baseURL = 'http://localhost:8000';

const ChatPage = () => {

  const fetchChats = async () => {
      const data = await axios.get('/api/chat');
      console.log(data);
  }

  useEffect(()=>{
    fetchChats();
  },[]);

  return (
    <div>
      ChatPage
    </div>  
  )

};

export default ChatPage;
