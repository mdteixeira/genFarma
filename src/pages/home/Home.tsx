import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ListaCategorias from '../../components/Temas/listaCategorias/ListaCategorias';
import ListaProdutos from '../../components/postagens/listaProdutos/ListaProdutos';

function Home() {
  useEffect(() => {
    document.title = 'Gen Farma - Início';
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between mt-5">
          <h2 className="text-2xl font-bold text-primary-400">Produtos</h2>
          <Link to={'/genFarma/produtos'}>
            <button className="rounded-3xl py-2 px-4 text-primary-500 hover:underline">
              Ver todos os produtos
            </button>
          </Link>
        </div>
        <ListaProdutos />
        <hr />
        <div className="flex justify-between mt-5">
          <h2 className="text-2xl font-bold text-primary-400">Categorias</h2>
          <Link to={'/genFarma/categorias'}>
            <button className="rounded-3xl py-2 px-4 text-primary-500 hover:underline">
              Ver todas as categorias
            </button>
          </Link>
        </div>
        <ListaCategorias />
      </div>
    </>
  );
}

export default Home;
