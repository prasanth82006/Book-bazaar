import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import { Send, Loader2 } from 'lucide-react';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const socket = useRef(null);
  const messagesEndRef = useRef(null);
  const { state } = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userId = token ? JSON.parse(atob(token.split('.')[1])).userId : null;

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    socket.current = io('https://book-bazzar-backend.onrender.com', { auth: { token } });
    if (state?.bookId) {
      socket.current.emit('joinRoom', { bookId: state.bookId, userId });
      axios
        .get(`https://book-bazzar-backend.onrender.com/api/books/messages/${state.bookId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => setMessages(response.data))
        .catch(error => console.error('Error fetching messages:', error));
    }
    socket.current.on('receiveMessage', (msg) => {
      setMessages((prev) => {
        const exists = prev.some(m => m._id === msg._id || (!m._id && m.timestamp === msg.timestamp && m.message === msg.message));
        return exists ? prev : [...prev, msg];
      });
    });
    socket.current.on('exchangeRequest', (data) => {
      setMessages((prev) => [...prev, { ...data, message: `Exchange request for ${data.bookTitle} from ${data.requesterUsername}` }]);
    });
    return () => {
      socket.current?.disconnect();
      socket.current = null;
    };
  }, [state?.bookId, navigate, token, userId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !state?.bookId || !state?.recipientId) return;
    setIsLoading(true);
    const messageData = {
      bookId: state.bookId,
      userId,
      message: newMessage,
      recipientId: state.recipientId,
    };
    socket.current.emit('sendMessage', messageData);
    setNewMessage('');
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      {state?.bookId ? (
        <div className="bg-white shadow-lg rounded-lg p-4 h-[500px] flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Chat for {state.bookTitle}</h3>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.senderId === userId ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] p-3 rounded-lg ${msg.senderId === userId ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {msg.message}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t p-4 flex items-center gap-2">
            <textarea
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              rows="2"
            />
            <button
              className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400"
              onClick={handleSendMessage}
              disabled={isLoading || !newMessage.trim()}
            >
              {isLoading ? <Loader2 className="animate-spin" size={24} /> : <Send size={24} />}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Select a book to start a conversation</p>
        </div>
      )}
    </div>
  );
};


export default Messages;
