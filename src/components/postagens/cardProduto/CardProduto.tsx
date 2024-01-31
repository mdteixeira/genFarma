import { Heart, ShoppingCartSimple } from 'phosphor-react';
import Produto from '../../../models/Produto';

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className=" border-2 flex flex-col p-3 rounded-3xl">
      <img
        src={produto.foto}
        className=" h-64 w-full object-contain rounded-2xl p-3"
        alt=""
      />
      <h3 className="text-xl font-bold">{produto.nome}</h3>
      <h3 className="text-lg">R$ {produto.preco}</h3>
      <div className="flex justify-between items-center mt-5">
        <button className="bg-primary-500 p-2 px-5 rounded-xl text-white">Comprar</button>
        <Heart className="text-primary-500" weight="bold" size={32} />
        <ShoppingCartSimple className="text-primary-500" weight="bold" size={32} />
      </div>
    </div>
  );
}

export default CardProduto;
