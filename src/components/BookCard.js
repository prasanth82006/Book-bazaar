// import { Heart, User, MapPin, Clock, MessageSquare, ArrowRight, Star } from 'lucide-react';
// import axios from 'axios';

// const BookCard = ({ book }) => {
//   const isAuthenticated = !!localStorage.getItem('token');

//   const handleRequest = async () => {
//     if (!isAuthenticated) {
//       alert('You must be logged in to request a book.');
//       window.location.href = '/login';
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:5000/api/exchanges/request', { bookId: book._id }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       alert('Exchange request sent!');
//     } catch (error) {
//       console.error('Error sending exchange request:', error);
//       alert(error.response?.data?.message || 'Failed to send exchange request.');
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//       <div className="relative">
//         <img
//           src={book.image || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"}
//           alt={book.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute top-2 right-2">
//           <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
//             <Heart size={16} className="text-red-500" />
//           </button>
//         </div>
//         <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-xs">
//           {book.condition}
//         </div>
//       </div>

//       <div className="p-4">
//         <h3 className="font-bold text-gray-800 mb-1 truncate">{book.title}</h3>
//         <p className="text-gray-600 text-sm mb-2">by {book.author}</p>

//         <div className="flex items-center space-x-2 mb-2">
//           <Star size={14} className="text-yellow-400 fill-current" />
//           <span className="text-sm text-gray-600">{book.rating || 0}</span>
//           <span className="text-gray-400">•</span>
//           <span className="text-sm text-purple-600 font-medium capitalize">{book.category}</span>
//         </div>

//         <p className="text-gray-700 text-sm mb-3 line-clamp-2">{book.description}</p>

//         <div className="flex items-center space-x-2 mb-3">
//           <User size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.userId?.username || 'Unknown'}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-3">
//           <MapPin size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.location}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-4">
//           <Clock size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{new Date(book.postedDate).toLocaleDateString()}</span>
//         </div>

//         <div className="flex space-x-2">
//           <button
//             onClick={handleRequest}
//             className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-purple-400"
//             disabled={!isAuthenticated}
//           >
//             <MessageSquare size={16} />
//             <span>Request</span>
//           </button>
//           <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
//             <ArrowRight size={16} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

// import { Heart, User, MapPin, Clock, MessageSquare, ArrowRight, Star } from 'lucide-react';
// import axios from 'axios';

// const BookCard = ({ book }) => {
//   const isAuthenticated = !!localStorage.getItem('token');

//   const handleRequest = async () => {
//     if (!isAuthenticated) {
//       alert('You must be logged in to request a book.');
//       window.location.href = '/login';
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:5000/api/exchanges/request', { bookId: book._id }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       alert('Exchange request sent!');
//     } catch (error) {
//       console.error('Error sending exchange request:', error);
//       alert(error.response?.data?.message || 'Failed to send exchange request.');
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//       <div className="relative">
//         <img
//           src={`http://localhost:5000${book.image || "/uploads/https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"}`}
//           alt={book.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute top-2 right-2">
//           <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
//             <Heart size={16} className="text-red-500" />
//           </button>
//         </div>
//         <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-xs">
//           {book.condition}
//         </div>
//       </div>

//       <div className="p-4">
//         <h3 className="font-bold text-gray-800 mb-1 truncate">{book.title}</h3>
//         <p className="text-gray-600 text-sm mb-2">by {book.author}</p>

//         <div className="flex items-center space-x-2 mb-2">
//           <Star size={14} className="text-yellow-400 fill-current" />
//           <span className="text-sm text-gray-600">{book.rating || 0}</span>
//           <span className="text-gray-400">•</span>
//           <span className="text-sm text-purple-600 font-medium capitalize">{book.category}</span>
//         </div>

//         <p className="text-gray-700 text-sm mb-3 line-clamp-2">{book.description}</p>

//         <div className="flex items-center space-x-2 mb-3">
//           <User size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.userId?.username || 'Unknown'}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-3">
//           <MapPin size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.location}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-4">
//           <Clock size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{new Date(book.postedDate).toLocaleDateString()}</span>
//         </div>

//         <div className="flex space-x-2">
//           <button
//             onClick={handleRequest}
//             className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-purple-400"
//             disabled={!isAuthenticated}
//           >
//             <MessageSquare size={16} />
//             <span>Request</span>
//           </button>
//           <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
//             <ArrowRight size={16} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

// import { useState, useEffect, useRef } from 'react';
// import { Heart, User, MapPin, Clock, MessageSquare, ArrowRight, Star } from 'lucide-react';
// import axios from 'axios';
// import { io } from 'socket.io-client';

// const BookCard = ({ book }) => {
//   const isAuthenticated = !!localStorage.getItem('token');
//   const [showChat, setShowChat] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const socket = useRef();

//   useEffect(() => {
//     if (isAuthenticated && book) {
//       const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId;
//       socket.current = io('http://localhost:5000', {
//         auth: { token: localStorage.getItem('token') }
//       });

//       socket.current.emit('joinRoom', { bookId: book._id, userId });

//       socket.current.on('receiveMessage', (msg) => {
//         setMessages((prev) => [...prev, msg]);
//       });

//       socket.current.on('exchangeRequest', (data) => {
//         alert(`New exchange request for ${book.title} from ${data.requesterId}`);
//         setShowChat(true);
//       });

//       return () => socket.current.disconnect();
//     }
//   }, [isAuthenticated, book]);

//   const handleRequest = async () => {
//     if (!isAuthenticated) {
//       alert('You must be logged in to request a book.');
//       window.location.href = '/login';
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:5000/api/exchanges/request', { bookId: book._id }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       alert('Exchange request sent! Start chatting with the owner.');
//       setShowChat(true);
//     } catch (error) {
//       console.error('Error sending exchange request:', error);
//       alert(error.response?.data?.message || 'Failed to send exchange request.');
//     }
//   };

//   const sendMessage = () => {
//     if (message.trim() && isAuthenticated) {
//       const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId;
//       const recipientId = book.userId._id; // Assuming book.userId contains the owner's ID
//       socket.current.emit('sendMessage', {
//         bookId: book._id,
//         userId,
//         message,
//         recipientId
//       });
//       setMessages((prev) => [...prev, { userId, message, timestamp: new Date() }]);
//       setMessage('');
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//       <div className="relative">
//         <img
//           src={`http://localhost:5000${book.image || "/uploads/https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"}`}
//           alt={book.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute top-2 right-2">
//           <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
//             <Heart size={16} className="text-red-500" />
//           </button>
//         </div>
//         <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-xs">
//           {book.condition}
//         </div>
//       </div>

//       <div className="p-4">
//         <h3 className="font-bold text-gray-800 mb-1 truncate">{book.title}</h3>
//         <p className="text-gray-600 text-sm mb-2">by {book.author}</p>

//         <div className="flex items-center space-x-2 mb-2">
//           <Star size={14} className="text-yellow-400 fill-current" />
//           <span className="text-sm text-gray-600">{book.rating || 0}</span>
//           <span className="text-gray-400">•</span>
//           <span className="text-sm text-purple-600 font-medium capitalize">{book.category}</span>
//         </div>

//         <p className="text-gray-700 text-sm mb-3 line-clamp-2">{book.description}</p>

//         <div className="flex items-center space-x-2 mb-3">
//           <User size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.userId?.username || 'Unknown'}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-3">
//           <MapPin size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.location}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-4">
//           <Clock size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{new Date(book.postedDate).toLocaleDateString()}</span>
//         </div>

//         <div className="flex space-x-2">
//           <button
//             onClick={handleRequest}
//             className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-purple-400"
//             disabled={!isAuthenticated}
//           >
//             <MessageSquare size={16} />
//             <span>Request/Chat</span>
//           </button>
//           <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
//             <ArrowRight size={16} />
//           </button>
//         </div>

//         {showChat && (
//           <div className="mt-4 p-2 border rounded-lg bg-gray-50">
//             <div className="h-24 overflow-y-auto mb-2">
//               {messages.map((msg, index) => (
//                 <div key={index} className={`text-sm ${msg.userId === JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId ? 'text-right' : 'text-left'}`}>
//                   {msg.message} ({new Date(msg.timestamp).toLocaleTimeString()})
//                 </div>
//               ))}
//             </div>
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-1 px-2 py-1 border rounded-lg"
//                 placeholder="Type a message..."
//               />
//               <button
//                 onClick={sendMessage}
//                 className="bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookCard;

// import { useState, useEffect, useRef } from 'react';
// import { Heart, User, MapPin, Clock, MessageSquare, ArrowRight, Star } from 'lucide-react';
// import axios from 'axios';
// import { io } from 'socket.io-client';

// const BookCard = ({ book }) => {
//   const isAuthenticated = !!localStorage.getItem('token');
//   const [showChat, setShowChat] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const socket = useRef();

//   useEffect(() => {
//     if (isAuthenticated && book) {
//       const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId;
//       socket.current = io('http://localhost:5000', {
//         auth: { token: localStorage.getItem('token') }
//       });

//       socket.current.on('receiveMessage', (msg) => {
//         setMessages((prev) => [...prev, msg]);
//       });

//       socket.current.on('exchangeRequest', (data) => {
//         if (data.requesterId !== userId) {
//           setShowChat(true);
//         }
//       });

//       return () => socket.current?.disconnect();
//     }
//   }, [isAuthenticated, book]);

//   const handleRequest = async () => {
//     if (!isAuthenticated) {
//       alert('You must be logged in to request a book.');
//       window.location.href = '/login';
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const userId = JSON.parse(atob(token.split('.')[1])).userId;
//       await axios.post('http://localhost:5000/api/exchanges/request', { bookId: book._id }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       // Join the chat room immediately
//       const room = `${book._id}-${book.userId._id}`;
//       socket.current.emit('joinRoom', { bookId: book._id, userId });
//       setShowChat(true);

//       // Notify the owner
//       socket.current.emit('exchangeRequest', {
//         bookId: book._id,
//         requesterId: userId,
//         status: 'pending'
//       });
//     } catch (error) {
//       console.error('Error sending exchange request:', error);
//       alert(error.response?.data?.message || 'Failed to send exchange request.');
//     }
//   };

//   const sendMessage = () => {
//     if (message.trim() && isAuthenticated) {
//       const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId;
//       const recipientId = book.userId._id;
//       socket.current.emit('sendMessage', {
//         bookId: book._id,
//         userId,
//         message,
//         recipientId
//       });
//       setMessages((prev) => [...prev, { userId, message, timestamp: new Date() }]);
//       setMessage('');
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//       <div className="relative">
//         <img
//           src={`http://localhost:5000${book.image || "/uploads/https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"}`}
//           alt={book.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute top-2 right-2">
//           <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
//             <Heart size={16} className="text-red-500" />
//           </button>
//         </div>
//         <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-xs">
//           {book.condition}
//         </div>
//       </div>

//       <div className="p-4">
//         <h3 className="font-bold text-gray-800 mb-1 truncate">{book.title}</h3>
//         <p className="text-gray-600 text-sm mb-2">by {book.author}</p>

//         <div className="flex items-center space-x-2 mb-2">
//           <Star size={14} className="text-yellow-400 fill-current" />
//           <span className="text-sm text-gray-600">{book.rating || 0}</span>
//           <span className="text-gray-400">•</span>
//           <span className="text-sm text-purple-600 font-medium capitalize">{book.category}</span>
//         </div>

//         <p className="text-gray-700 text-sm mb-3 line-clamp-2">{book.description}</p>

//         <div className="flex items-center space-x-2 mb-3">
//           <User size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.userId?.username || 'Unknown'}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-3">
//           <MapPin size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.location}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-4">
//           <Clock size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{new Date(book.postedDate).toLocaleDateString()}</span>
//         </div>

//         <div className="flex space-x-2">
//           <button
//             onClick={handleRequest}
//             className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-purple-400"
//             disabled={!isAuthenticated}
//           >
//             <MessageSquare size={16} />
//             <span>Request/Chat</span>
//           </button>
//           <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
//             <ArrowRight size={16} />
//           </button>
//         </div>

//         {showChat && (
//           <div className="mt-4 p-2 border rounded-lg bg-gray-50">
//             <div className="h-24 overflow-y-auto mb-2">
//               {messages.map((msg, index) => (
//                 <div key={index} className={`text-sm ${msg.userId === JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId ? 'text-right' : 'text-left'}`}>
//                   {msg.message} ({new Date(msg.timestamp).toLocaleTimeString()})
//                 </div>
//               ))}
//             </div>
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-1 px-2 py-1 border rounded-lg"
//                 placeholder="Type a message..."
//               />
//               <button
//                 onClick={sendMessage}
//                 className="bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookCard;

// import { useState, useEffect, useRef } from 'react';
// import { Heart, User, MapPin, Clock, MessageSquare, ArrowRight, Star } from 'lucide-react';
// import axios from 'axios';
// import { io } from 'socket.io-client';
// import { useNavigate } from 'react-router-dom';

// const BookCard = ({ book }) => {
//   const isAuthenticated = !!localStorage.getItem('token');
//   const [showChat, setShowChat] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const socket = useRef();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated && book) {
//       const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId;
//       socket.current = io('http://localhost:5000', {
//         auth: { token: localStorage.getItem('token') }
//       });

//       socket.current.on('receiveMessage', (msg) => {
//         setMessages((prev) => [...prev, msg]);
//       });

//       socket.current.on('exchangeRequest', (data) => {
//         if (data.requesterId !== userId) {
//           setShowChat(true);
//         }
//       });

//       return () => socket.current?.disconnect();
//     }
//   }, [isAuthenticated, book]);

//   const handleRequest = async () => {
//     if (!isAuthenticated) {
//       alert('You must be logged in to request a book.');
//       navigate('/login');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const userId = JSON.parse(atob(token.split('.')[1])).userId;
//       const response = await axios.post('http://localhost:5000/api/books/exchanges/request', { bookId: book._id }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       console.log('Exchange request response:', response.data);

//       const room = `${book._id}-${book.userId._id}`;
//       socket.current.emit('joinRoom', { bookId: book._id, userId });
//       navigate('/messages', { state: { bookId: book._id, userId, recipientId: book.userId._id, bookTitle: book.title } });
//     } catch (error) {
//       console.error('Error sending exchange request:', error.response?.data || error.message);
//       alert(`Failed to send exchange request: ${error.response?.data?.message || error.message}`);
//     }
//   };

//   const sendMessage = () => {
//     if (message.trim() && isAuthenticated) {
//       const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId;
//       const recipientId = book.userId._id;
//       socket.current.emit('sendMessage', {
//         bookId: book._id,
//         userId,
//         message,
//         recipientId
//       });
//       setMessages((prev) => [...prev, { userId, message, timestamp: new Date() }]);
//       setMessage('');
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//       <div className="relative">
//         <img
//           src={`http://localhost:5000${book.image || "/uploads/https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"}`}
//           alt={book.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute top-2 right-2">
//           <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
//             <Heart size={16} className="text-red-500" />
//           </button>
//         </div>
//         <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-xs">
//           {book.condition}
//         </div>
//       </div>

//       <div className="p-4">
//         <h2 className="font-bold text-gray-800 mb-1 truncate">{book.title}</h2>
//         <p className="text-gray-600 text-sm mb-2">by {book.author}</p>

//         <div className="flex items-center space-x-2 mb-2">
//           <Star size={14} className="text-yellow-400 fill-current" />
//           <span className="text-sm text-gray-600">{book.rating || 0}</span>
//           <span className="text-gray-400">•</span>
//           <span className="text-sm text-purple-600 font-medium capitalize">{book.category}</span>
//         </div>

//         <p className="text-gray-700 text-sm mb-3 line-clamp-2">{book.description}</p>

//         <div className="flex items-center space-x-2 mb-3">
//           <User size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.userId?.username || 'Unknown'}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-3">
//           <MapPin size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.location}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-4">
//           <Clock size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{new Date(book.postedDate).toLocaleDateString()}</span>
//         </div>

//         <div className="flex space-x-2">
//           <button
//             onClick={handleRequest}
//             className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-purple-400"
//             disabled={!isAuthenticated}
//           >
//             <MessageSquare size={16} />
//             <span>Request/Chat</span>
//           </button>
//           <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
//             <ArrowRight size={16} />
//           </button>
//         </div>

//         {showChat && (
//           <div className="mt-4 p-2 border rounded-lg bg-gray-50">
//             <div className="h-24 overflow-y-auto mb-2">
//               {messages.map((msg, index) => (
//                 <div key={index} className={`text-sm ${msg.userId === JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId ? 'text-right' : 'text-left'}`}>
//                   {msg.message} ({new Date(msg.timestamp).toLocaleTimeString()})
//                 </div>
//               ))}
//             </div>
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-1 px-2 py-1 border rounded-lg"
//                 placeholder="Type a message..."
//               />
//               <button
//                 onClick={sendMessage}
//                 className="bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookCard;

// import { useState, useEffect, useRef } from 'react';
// import { Heart, User, MapPin, Clock, MessageSquare, ArrowRight, Star } from 'lucide-react';
// import axios from 'axios';
// import { io } from 'socket.io-client';
// import { useNavigate } from 'react-router-dom';

// const BookCard = ({ book }) => {
//   const isAuthenticated = !!localStorage.getItem('token');
//   const [showChat, setShowChat] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const socket = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated && book) {
//       const token = localStorage.getItem('token');
//       const userId = JSON.parse(atob(token.split('.')[1])).userId;
//       socket.current = io('http://localhost:5000', {
//         auth: { token }
//       });

//       socket.current.on('receiveMessage', (msg) => {
//         setMessages((prev) => [...prev, msg]);
//       });

//       socket.current.on('exchangeRequest', (data) => {
//         if (data.requesterId !== userId) {
//           setShowChat(true);
//         }
//       });

//       return () => {
//         socket.current?.disconnect();
//         socket.current = null;
//       };
//     }
//   }, [isAuthenticated, book]);

//   const handleRequest = async () => {
//     if (!isAuthenticated) {
//       alert('You must be logged in to request a book.');
//       navigate('/login');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const userId = JSON.parse(atob(token.split('.')[1])).userId;

//       // Check for existing exchange request
//       const checkResponse = await axios.get(`http://localhost:5000/api/books/exchanges/check/${book._id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       if (checkResponse.data.exists) {
//         // Navigate to existing chat
//         navigate('/messages', {
//           state: {
//             bookId: book._id,
//             userId,
//             recipientId: book.userId._id,
//             bookTitle: book.title
//           }
//         });
//         return;
//       }

//       // Send new exchange request
//       const response = await axios.post('http://localhost:5000/api/books/exchanges/request', { bookId: book._id }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       console.log('Exchange request response:', response.data);

//       socket.current.emit('joinRoom', { bookId: book._id, userId });
//       navigate('/messages', {
//         state: {
//           bookId: book._id,
//           userId,
//           recipientId: book.userId._id,
//           bookTitle: book.title
//         }
//       });
//     } catch (error) {
//       console.error('Error sending exchange request:', error.response?.data || error.message);
//       alert(`Failed to send exchange request: ${error.response?.data?.message || error.message}`);
//     }
//   };

//   const sendMessage = () => {
//     if (message.trim() && isAuthenticated) {
//       const token = localStorage.getItem('token');
//       const userId = JSON.parse(atob(token.split('.')[1])).userId;
//       const recipientId = book.userId._id;
//       socket.current.emit('sendMessage', {
//         bookId: book._id,
//         userId,
//         message,
//         recipientId
//       });
//       setMessages((prev) => [...prev, { userId, message, timestamp: new Date() }]);
//       setMessage('');
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//       <div className="relative">
//         <img
//           src={`http://localhost:5000${book.image || "/uploads/https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"}`}
//           alt={book.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute top-2 right-2">
//           <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
//             <Heart size={16} className="text-red-500" />
//           </button>
//         </div>
//         <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-xs">
//           {book.condition}
//         </div>
//       </div>

//       <div className="p-4">
//         <h2 className="font-bold text-gray-800 mb-1 truncate">{book.title}</h2>
//         <p className="text-gray-600 text-sm mb-2">by {book.author}</p>

//         <div className="flex items-center space-x-2 mb-2">
//           <Star size={14} className="text-yellow-400 fill-current" />
//           <span className="text-sm text-gray-600">{book.rating || 0}</span>
//           <span className="text-gray-400">•</span>
//           <span className="text-sm text-purple-600 font-medium capitalize">{book.category}</span>
//         </div>

//         <p className="text-gray-700 text-sm mb-3 line-clamp-2">{book.description}</p>

//         <div className="flex items-center space-x-2 mb-3">
//           <User size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.userId?.username || 'Unknown'}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-3">
//           <MapPin size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.location}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-4">
//           <Clock size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{new Date(book.postedDate).toLocaleDateString()}</span>
//         </div>

//         <div className="flex space-x-2">
//           <button
//             onClick={handleRequest}
//             className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-purple-400"
//             disabled={!isAuthenticated}
//           >
//             <MessageSquare size={16} />
//             <span>Request/Chat</span>
//           </button>
//           <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
//             <ArrowRight size={16} />
//           </button>
//         </div>

//         {showChat && (
//           <div className="mt-4 p-2 border rounded-lg bg-gray-50">
//             <div className="h-24 overflow-y-auto mb-2">
//               {messages.map((msg, index) => (
//                 <div key={index} className={`text-sm ${msg.userId === JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId ? 'text-right' : 'text-left'}`}>
//                   {msg.message} ({new Date(msg.timestamp).toLocaleTimeString()})
//                 </div>
//               ))}
//             </div>
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-1 px-2 py-1 border rounded-lg"
//                 placeholder="Type a message..."
//               />
//               <button
//                 onClick={sendMessage}
//                 className="bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookCard;

// import { useState, useEffect, useRef } from "react";
// import {
//   Heart,
//   User,
//   MapPin,
//   Clock,
//   MessageSquare,
//   ArrowRight,
//   Star,
// } from "lucide-react";
// import axios from "axios";
// import { io } from "socket.io-client";
// import { useNavigate } from "react-router-dom";

// const BookCard = ({ book }) => {
//   const isAuthenticated = !!localStorage.getItem("token");
//   const [showChat, setShowChat] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");
//   const socket = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated && book) {
//       const token = localStorage.getItem("token");
//       const userId = JSON.parse(atob(token.split(".")[1])).userId;
//       socket.current = io("http://localhost:5000", {
//         auth: { token },
//       });

//       socket.current.on("receiveMessage", (msg) => {
//         setMessages((prev) => [...prev, msg]);
//       });

//       socket.current.on("exchangeRequest", (data) => {
//         if (data.requesterId !== userId) {
//           setShowChat(true);
//         }
//       });

//       return () => {
//         socket.current?.disconnect();
//         socket.current = null;
//       };
//     }
//   }, [isAuthenticated, book]);

//   const handleRequest = async () => {
//     if (!isAuthenticated) {
//       alert("You must be logged in to request a book.");
//       navigate("/login");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const userId = JSON.parse(atob(token.split(".")[1])).userId;

//       const checkResponse = await axios.get(
//         `http://localhost:5000/api/books/exchanges/check/${book._id}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       if (checkResponse.data.exists) {
//         navigate("/messages", {
//           state: {
//             bookId: book._id,
//             userId,
//             recipientId: book.userId._id,
//             bookTitle: book.title,
//           },
//         });
//         return;
//       }

//       const response = await axios.post(
//         "http://localhost:5000/api/books/exchanges/request",
//         { bookId: book._id },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       console.log("Exchange request response:", response.data);

//       socket.current.emit("joinRoom", { bookId: book._id, userId });
//       navigate("/messages", {
//         state: {
//           bookId: book._id,
//           userId,
//           recipientId: book.userId._id,
//           bookTitle: book.title,
//         },
//       });
//     } catch (error) {
//       console.error(
//         "Error sending exchange request:",
//         error.response?.data || error.message
//       );
//       alert(
//         `Failed to send exchange request: ${
//           error.response?.data?.message || error.message
//         }`
//       );
//     }
//   };

//   const sendMessage = () => {
//     if (message.trim() && isAuthenticated) {
//       const token = localStorage.getItem("token");
//       const userId = JSON.parse(atob(token.split(".")[1])).userId;
//       const recipientId = book.userId._id;
//       socket.current.emit("sendMessage", {
//         bookId: book._id,
//         userId,
//         message,
//         recipientId,
//       });
//       setMessages((prev) => [
//         ...prev,
//         { userId, message, timestamp: new Date() },
//       ]);
//       setMessage("");
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//       <div className="relative">
//         <img
//           src={`http://localhost:5000${
//             book.image ||
//             "/Uploads/https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"
//           }`}
//           alt={book.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute top-2 right-2">
//           <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
//             <Heart size={16} className="text-red-500" />
//           </button>
//         </div>
//         <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-xs">
//           {book.condition}
//         </div>
//       </div>

//       <div className="p-4">
//         <h2 className="font-bold text-gray-800 mb-1 truncate">{book.title}</h2>
//         <p className="text-gray-600 text-sm mb-2">by {book.author}</p>

//         <div className="flex items-center space-x-2 mb-2">
//           <Star size={14} className="text-yellow-400 fill-current" />
//           <span className="text-sm text-gray-600">{book.rating || 0}</span>
//           <span className="text-gray-400">•</span>
//           <span className="text-sm text-purple-600 font-medium capitalize">
//             {book.category}
//           </span>
//         </div>

//         <p className="text-gray-700 text-sm mb-3 line-clamp-2">
//           {book.description}
//         </p>

//         <div className="flex items-center space-x-2 mb-3">
//           <User size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">
//             {book.userId?.username || "Unknown"}
//           </span>
//         </div>

//         <div className="flex items-center space-x-2 mb-3">
//           <MapPin size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">{book.location}</span>
//         </div>

//         <div className="flex items-center space-x-2 mb-3">
//           <span className="text-sm text-gray-600">
//             Cost Price: ${book.costPrice.toFixed(2)}
//           </span>
//         </div>
//         <div className="flex items-center space-x-2 mb-4">
//           <Clock size={14} className="text-gray-400" />
//           <span className="text-sm text-gray-600">
//             {new Date(book.postedDate).toLocaleDateString()}
//           </span>
//         </div>

//         <div className="flex space-x-2">
//           <button
//             onClick={handleRequest}
//             className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-purple-400"
//             disabled={!isAuthenticated}
//           >
//             <MessageSquare size={16} />
//             <span>Request/Chat</span>
//           </button>
//           <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
//             <ArrowRight size={16} />
//           </button>
//         </div>

//         {showChat && (
//           <div className="mt-4 p-2 border rounded-lg bg-gray-50">
//             <div className="h-24 overflow-y-auto mb-2">
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`text-sm ${
//                     msg.senderId ===
//                     JSON.parse(
//                       atob(localStorage.getItem("token").split(".")[1])
//                     ).userId
//                       ? "text-right"
//                       : "text-left"
//                   }`}
//                 >
//                   {msg.message} ({new Date(msg.timestamp).toLocaleTimeString()})
//                 </div>
//               ))}
//             </div>
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-1 px-2 py-1 border rounded-lg"
//                 placeholder="Type a message..."
//               />
//               <button
//                 onClick={sendMessage}
//                 className="bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookCard;

import { useState, useEffect, useRef } from "react";
import {
  Heart,
  User,
  MapPin,
  Clock,
  MessageSquare,
  Star,
} from "lucide-react";
import axios from "axios";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book, wishlist, setWishlist }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const socket = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && book) {
      const token = localStorage.getItem("token");
      const userId = JSON.parse(atob(token.split(".")[1])).userId;
      socket.current = io("https://book-bazzar-backend.onrender.com", {
        auth: { token },
      });

      socket.current.on("receiveMessage", (msg) => {
        setMessages((prev) => [...prev, msg]);
      });

      socket.current.on("exchangeRequest", (data) => {
        if (data.requesterId !== userId) {
          setShowChat(true);
        }
      });

      // Check if book is in wishlist
      setIsWishlisted(wishlist?.some(wishBook => wishBook._id === book._id));

      return () => {
        socket.current?.disconnect();
        socket.current = null;
      };
    }
  }, [isAuthenticated, book, wishlist]);

  const handleRequest = async () => {
    if (!isAuthenticated) {
      alert("You must be logged in to request a book.");
      navigate("/login");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const userId = JSON.parse(atob(token.split(".")[1])).userId;

      const checkResponse = await axios.get(
        `https://book-bazzar-backend.onrender.com/api/books/exchanges/check/${book._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (checkResponse.data.exists) {
        navigate("/messages", {
          state: {
            bookId: book._id,
            userId,
            recipientId: book.userId._id,
            bookTitle: book.title,
          },
        });
        return;
      }

      const response = await axios.post(
        "https://book-bazzar-backend.onrender.com/api/books/exchanges/request",
        { bookId: book._id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Exchange request response:", response.data);

      socket.current.emit("joinRoom", { bookId: book._id, userId });
      navigate("/messages", {
        state: {
          bookId: book._id,
          userId,
          recipientId: book.userId._id,
          bookTitle: book.title,
        },
      });
    } catch (error) {
      console.error(
        "Error sending exchange request:",
        error.response?.data || error.message
      );
      alert(
        `Failed to send exchange request: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  const sendMessage = () => {
    if (message.trim() && isAuthenticated) {
      const token = localStorage.getItem("token");
      const userId = JSON.parse(atob(token.split(".")[1])).userId;
      const recipientId = book.userId._id;
      socket.current.emit("sendMessage", {
        bookId: book._id,
        userId,
        message,
        recipientId,
      });
      setMessages((prev) => [
        ...prev,
        { userId, message, timestamp: new Date() },
      ]);
      setMessage("");
    }
  };

  const toggleWishlist = async () => {
    if (!isAuthenticated) {
      alert("You must be logged in to manage your wishlist.");
      navigate("/login");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      console.log('Toggling wishlist for bookId:', book._id);
      if (isWishlisted) {
        const response = await axios.post(
          "https://book-bazzar-backend.onrender.com/api/users/wishlist/remove",
          { bookId: book._id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setWishlist(prev => prev.filter(wishBook => wishBook._id !== book._id));
        console.log('Remove from wishlist response:', response.data);
      } else {
        const response = await axios.post(
          "https://book-bazzar-backend.onrender.com/api/users/wishlist/add",
          { bookId: book._id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setWishlist(prev => [...prev, book]);
        console.log('Add to wishlist response:', response.data);
      }
      setIsWishlisted(!isWishlisted);
    } catch (error) {
      console.error('Error updating wishlist:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        bookId: book._id
      });
      alert(`Failed to update wishlist: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={`https://book-bazzar-backend.onrender.com${
            book.image ||
            "/Uploads/https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"
          }`}
          alt={book.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-xs">
          {book.condition}
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-bold text-gray-800 mb-1 truncate">{book.title}</h2>
        <p className="text-gray-600 text-sm mb-2">by {book.author}</p>

        <div className="flex items-center space-x-2 mb-2">
          <Star size={14} className="text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600">{book.rating || 0}</span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-purple-600 font-medium capitalize">
            {book.category}
          </span>
        </div>

        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
          {book.description}
        </p>

        <div className="flex items-center space-x-2 mb-3">
          <User size={14} className="text-gray-400" />
          <span className="text-sm text-gray-600">
            {book.userId?.username || "Unknown"}
          </span>
        </div>

        <div className="flex items-center space-x-2 mb-3">
          <MapPin size={14} className="text-gray-400" />
          <span className="text-sm text-gray-600">{book.location}</span>
        </div>

        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm text-gray-600">
            Cost Price: ${book.costPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <Clock size={14} className="text-gray-400" />
          <span className="text-sm text-gray-600">
            {new Date(book.postedDate).toLocaleDateString()}
          </span>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleRequest}
            className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-purple-400"
            disabled={!isAuthenticated}
          >
            <MessageSquare size={16} />
            <span>Request/Chat</span>
          </button>
          <button
            onClick={toggleWishlist}
            className={`px-4 py-2 border rounded-lg flex items-center justify-center space-x-2 ${
              isWishlisted
                ? "border-red-500 text-red-500 hover:bg-red-50"
                : "border-gray-500 text-gray-500 hover:bg-gray-50"
            } transition-colors`}
            title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            disabled={!isAuthenticated}
          >
            <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
            <span>{isWishlisted ? "" : ""}</span>
          </button>
        </div>

        {showChat && (
          <div className="mt-4 p-2 border rounded-lg bg-gray-50">
            <div className="h-24 overflow-y-auto mb-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`text-sm ${
                    msg.senderId ===
                    JSON.parse(
                      atob(localStorage.getItem("token").split(".")[1])
                    ).userId
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  {msg.message} ({new Date(msg.timestamp).toLocaleTimeString()})
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-2 py-1 border rounded-lg"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                className="bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;