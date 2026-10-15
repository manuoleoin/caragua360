import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Explore from './pages/explore.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Login from './pages/login.jsx';
import Cadastro from './pages/cadastro.jsx';
import Perfil from './pages/perfil.jsx';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;