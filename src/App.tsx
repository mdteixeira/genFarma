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
            <Route path="/genFarma/" element={<Home />} />
            <Route path="/genFarma/home" element={<Home />} />
            <Route path="/genFarma/categorias" element={<ListaCategorias />} />
            <Route path="/genFarma/cadastroCategoria" element={<FormularioCategoria />} />
            <Route
              path="/genFarma/editarCategoria/:id"
              element={<FormularioCategoria />}
            />
            <Route path="/genFarma/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/genFarma/produtos" element={<ListaProdutos />} />
            <Route path="/genFarma/deletarProduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
