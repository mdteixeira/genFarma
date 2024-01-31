import { useEffect, useState } from 'react';
import { buscar } from '../../services/Service';
import { toastAlerta } from '../../utils/toastAlerta';
import Categoria from '../../models/Categoria';

export default function ListaCategoriasHeader() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('Ocorreu um erro.', 'info');
      }
    }
  }

  return (
    <>
      {categorias.length === 0 && (
        <div className="flex items-center justify-center w-full h-screen"></div>
      )}
      <div className="flex justify-between w-full">
        {categorias.map((categoria) => (
          <>
            <h2>{categoria.nome}</h2>
          </>
        ))}
      </div>
    </>
  );
}
