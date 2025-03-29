import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registrar';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg py-5 sticky top-0 z-50">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8 text-lg font-semibold">
          {user && (
            <li>
              <Link to="/" className="text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2">
                <i className="fas fa-home"></i> Inicio
              </Link>
            </li>
          )}
          {!user && (
            <>
              <li>
                <Link to="/registro" className="text-white hover:text-green-300 transition duration-300 flex items-center gap-2">
                  <i className="fas fa-user-plus"></i> Registro
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white hover:text-orange-300 transition duration-300 flex items-center gap-2">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>
            </>
          )}
          {user && (
            <li>
              <button onClick={handleLogout} className="text-white hover:text-red-400 transition duration-300 flex items-center gap-2">
                <i className="fas fa-sign-out-alt"></i> Cerrar sesión
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-10 px-6 py-8 bg-white shadow-lg rounded-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
