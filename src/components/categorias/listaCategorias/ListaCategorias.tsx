import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import CardCategorias from '../cardCategorias/CardCategorias';

function ListaCategorias() {
  
  useEffect(() => {
    document.title = 'Gen Farma - Categorias';
  }, []);

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('Ocorreu um erro.', 'info');
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <div className="flex items-center justify-center w-full h-screen">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#FF0000"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
