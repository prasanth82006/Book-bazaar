// // import { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import axios from 'axios';
// // import Header from './components/Header';
// // import Marketplace from './pages/Marketplace';
// // import MyBooks from './pages/MyBooks';
// // import Messages from './pages/Messages';

// // const App = () => {
// //   const [books, setBooks] = useState([]);
// //   const [userBooks, setUserBooks] = useState([]);
// //   const [showAddBook, setShowAddBook] = useState(false);

// //   useEffect(() => {
// //     // Fetch books from backend
// //     axios.get('http://localhost:5000/api/books')
// //       .then(response => setBooks(response.data))
// //       .catch(error => console.error('Error fetching books:', error));

// //     // Fetch user books (assuming token-based auth)
// //     const token = localStorage.getItem('token');
// //     if (token) {
// //       axios.get('http://localhost:5000/api/books', {
// //         headers: { Authorization: `Bearer ${token}` }
// //       })
// //         .then(response => setUserBooks(response.data.filter(book => book.userId._id === JSON.parse(atob(token.split('.')[1])).userId)))
// //         .catch(error => console.error('Error fetching user books:', error));
// //     }
// //   }, []);

// //   return (
// //     <Router>
// //       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
// //         <Header setShowAddBook={setShowAddBook} />
// //         <Routes>
// //           <Route path="/" element={<Marketplace books={books} setBooks={setBooks} userBooks={userBooks} setUserBooks={setUserBooks} showAddBook={showAddBook} setShowAddBook={setShowAddBook} />} />
// //           <Route path="/my-books" element={<MyBooks userBooks={userBooks} setUserBooks={setUserBooks} books={books} setBooks={setBooks} showAddBook={showAddBook} setShowAddBook={setShowAddBook} />} />
// //           <Route path="/messages" element={<Messages />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Marketplace from './pages/Marketplace';
// import MyBooks from './pages/MyBooks';
// import Messages from './pages/Messages';

// const App = () => {
//   const [books, setBooks] = useState([]);
//   const [userBooks, setUserBooks] = useState([]);
//   const [showAddBook, setShowAddBook] = useState(false);

//   useEffect(() => {
//     // Fetch books from backend
//     axios.get('http://localhost:5000/api/books')
//       .then(response => setBooks(response.data))
//       .catch(error => console.error('Error fetching books:', error));

//     // Fetch user books (assuming token-based auth)
//     const token = localStorage.getItem('token');
//     if (token) {
//       axios.get('http://localhost:5000/api/books', {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//         .then(response => setUserBooks(response.data.filter(book => book.userId._id === JSON.parse(atob(token.split('.')[1])).userId)))
//         .catch(error => console.error('Error fetching user books:', error));
//     }
//   }, []);

//   return (
//     <Router>
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
//         <Header setShowAddBook={setShowAddBook} />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Marketplace books={books} setBooks={setBooks} userBooks={userBooks} setUserBooks={setUserBooks} showAddBook={showAddBook} setShowAddBook={setShowAddBook} />} />
//             <Route path="/my-books" element={<MyBooks userBooks={userBooks} setUserBooks={setUserBooks} books={books} setBooks={setBooks} showAddBook={showAddBook} setShowAddBook={setShowAddBook} />} />
//             <Route path="/messages" element={<Messages />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;




// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Marketplace from './pages/Marketplace';
// import MyBooks from './pages/MyBooks';
// import Messages from './pages/Messages';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import ProtectedRoute from './components/ProtectedRoute';

// const App = () => {
//   const [books, setBooks] = useState([]);
//   const [userBooks, setUserBooks] = useState([]);
//   const [showAddBook, setShowAddBook] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

//   useEffect(() => {
//     // Fetch all books
//     axios.get('http://localhost:5000/api/books')
//       .then(response => setBooks(response.data))
//       .catch(error => console.error('Error fetching books:', error));

//     // Fetch user books if authenticated
//     const token = localStorage.getItem('token');
//     if (token) {
//       axios.get('http://localhost:5000/api/books', {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//         .then(response => {
//           const userId = JSON.parse(atob(token.split('.')[1])).userId;
//           setUserBooks(response.data.filter(book => book.userId._id === userId));
//         })
//         .catch(error => console.error('Error fetching user books:', error));
//     }
//   }, [isAuthenticated]);

//   return (
//     <Router>
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
//         <Header setShowAddBook={setShowAddBook} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//             <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
//             <Route path="/" element={<Marketplace books={books} setBooks={setBooks} userBooks={userBooks} setUserBooks={setUserBooks} showAddBook={showAddBook} setShowAddBook={setShowAddBook} />} />
//             <Route
//               path="/my-books"
//               element={
//                 <ProtectedRoute>
//                   <MyBooks userBooks={userBooks} setUserBooks={setUserBooks} books={books} setBooks={setBooks} showAddBook={showAddBook} setShowAddBook={setShowAddBook} />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/messages"
//               element={
//                 <ProtectedRoute>
//                   <Messages />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Marketplace from './pages/Marketplace';
import MyBooks from './pages/MyBooks';
import Messages from './pages/Messages';
import Login from './pages/Login';
import Register from './pages/Register';
import Wishlist from './components/Wishlist';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [books, setBooks] = useState([]);
  const [userBooks, setUserBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showAddBook, setShowAddBook] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    // Fetch all books
    axios.get('https://book-bazzar-backend.onrender.com/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));

    // Fetch user books if authenticated
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('https://book-bazzar-backend.onrender.com/api/books', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(response => {
          const userId = JSON.parse(atob(token.split('.')[1])).userId;
          setUserBooks(response.data.filter(book => book.userId._id === userId));
        })
        .catch(error => console.error('Error fetching user books:', error));

      // Fetch wishlist if authenticated
      axios.get('https://book-bazzar-backend.onrender.com/api/users/wishlist', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(response => setWishlist(response.data))
        .catch(error => console.error('Error fetching wishlist:', error));
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
        <Header setShowAddBook={setShowAddBook} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/" element={<Marketplace books={books} setBooks={setBooks} userBooks={userBooks} setUserBooks={setUserBooks} showAddBook={showAddBook} setShowAddBook={setShowAddBook} wishlist={wishlist} setWishlist={setWishlist} />} />
            <Route
              path="/my-books"
              element={
                <ProtectedRoute>
                  <MyBooks userBooks={userBooks} setUserBooks={setUserBooks} books={books} setBooks={setBooks} showAddBook={showAddBook} setShowAddBook={setShowAddBook} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/messages"
              element={
                <ProtectedRoute>
                  <Messages />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;