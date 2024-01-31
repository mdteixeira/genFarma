import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import Categoria from '../../../models/Categoria';
import { buscar, deletar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'erro');
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate('/categorias');
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`);

      toastAlerta('Categoria apagada com sucesso', 'sucesso');
    } catch (error) {
      toastAlerta('Erro ao apagar a Categoria', 'erro');
    }

    retornar();
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="my-4 text-4xl text-center">Deletar categoria</h1>

      <p className="mb-4 font-semibold text-center">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="flex flex-col justify-between overflow-hidden border rounded-2xl">
        <p className="h-full p-8 text-3xl">{categoria.nome}</p>
        <div className="flex">
          <button
            className="w-full py-2 bg-primary-200 hover:bg-primary-400"
            onClick={retornar}
          >
            Não, voltar
          </button>
          <button
            className="flex items-center justify-center w-full bg-red-400 text-slate-100 hover:bg-red-600"
            onClick={deletarCategoria}
          >
            Deletar categoria
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
