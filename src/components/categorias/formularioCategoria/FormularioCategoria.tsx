import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });

    console.log(JSON.stringify(categoria));
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);

        toastAlerta('Categoria atualizada com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        toastAlerta('Erro ao atualizar a categoria', 'erro');
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);

        toastAlerta('Categoria cadastrada com sucesso', 'sucesso');
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'erro');
        } else {
          toastAlerta('Erro ao cadastrar Categoria', 'erro');
        }
      }
    }

    retornar();
  }

  function retornar() {
    navigate('/genFarma/home');
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto mb-20">
      <h1 className="mt-16 mb-8 text-4xl text-center">
        {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="nome"
            className="p-3 border-2 rounded-xl "
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="block w-1/2 py-3 mx-auto mt-5 bg-primary-400 rounded-xl text-slate-100 hover:bg-primary-800"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;
