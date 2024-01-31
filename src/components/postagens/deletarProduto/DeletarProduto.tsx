import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscar, deletar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import Produto from '../../../models/Produto';

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  function retornar() {
    navigate('/produtos');
  }

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`);

      toastAlerta('produto apagada com sucesso', 'sucesso');
    } catch (error) {
      toastAlerta('Erro ao apagar o produto', 'erro');
    }

    retornar();
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar produto</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <div className="p-4">
          <p className="text-2xl font-bold h-full mb-2">{produto.nome}</p>
          <p>{produto.categoria?.nome}</p>
        </div>
        <div className="flex">
          <button
            className="text-slate-100 bg-primary-400 hover:bg-primary-600 w-full py-2"
            onClick={retornar}
          >
            Não, voltar
          </button>
          <button
            className="w-full text-slate-100 flex items-center justify-center bg-red-400 hover:bg-red-600"
            onClick={deletarProduto}
          >
            Deletar produto
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
