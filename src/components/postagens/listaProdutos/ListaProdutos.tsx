import { useEffect, useState } from 'react';

import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import CardProduto from '../cardProduto/CardProduto';
import { Heart, ShoppingCartSimple } from 'phosphor-react';

function ListaProdutos() {
  useEffect(() => {
    document.title = 'Gen Farma - Produtos';
  }, []);

  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    try {
      await buscar('produtos', setProdutos);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'erro');
      }
    }
  }

  let skeleton = (
    <div className=" border-2 w-full flex flex-col p-3 rounded-3xl">
      <div className="h-64 bg-neutral-200 animate-pulse rounded-2xl p-3 mb-2" />
      <div className="text-xl font-bold text-transparent bg-neutral-200 animate-pulse rounded-2xl mb-2 w-10/12 h-7"></div>
      <div className="text-lg text-transparent bg-neutral-200 animate-pulse rounded-2xl w-28 h-7"></div>
      <div className="flex justify-between items-center mt-5">
        <div className="p-2 px-5 text-white text-transparent bg-neutral-200 animate-pulse rounded-2xl w-32 h-8"></div>
        <Heart className="text-neutral-200" weight="bold" size={32} />
        <ShoppingCartSimple className="text-neutral-200" weight="bold" size={32} />
      </div>
    </div>
  );

  function loading() {
    var loading = [];
    for (let i = 0; i < 10; i++) {
      loading.push(skeleton);
    }
    return loading;
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);
  return (
    <>
      {produtos.length === 0 && (
        <div className="container mx-auto my-4 grid lg:grid-cols-5  grid-cols-1 md:grid-cols- gap-4">
          {loading()}
        </div>
      )}
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center justify-center gap-4">
        {produtos.map((produto) => (
          <CardProduto produto={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProdutos;
