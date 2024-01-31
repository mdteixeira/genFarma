import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import { ToastContainer } from 'react-toastify';

import ListaProdutos from './components/postagens/listaProdutos/ListaProdutos';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';

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
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
