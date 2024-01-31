import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import { ToastContainer } from 'react-toastify';

import DeletarCategoria from './components/Temas/deletarProduto/DeletarProduto';
import FormularioCategoria from './components/Temas/formularioCategoria/FormularioCategoria';
import ListaCategorias from './components/Temas/listaCategorias/ListaCategorias';
import DeletarProduto from './components/Temas/deletarProduto/DeletarProduto';
import ListaProdutos from './components/postagens/listaProdutos/ListaProdutos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
