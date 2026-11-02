import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Quando a URL for apenas "/", carrega o Login */}
        <Route path="/" element={<Login />} />
        {/* Quando a URL for "/register", carrega o Cadastro */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;