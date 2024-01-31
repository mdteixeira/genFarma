import {
  Funnel,
  List,
  MagnifyingGlass,
  ShoppingCartSimple,
  UserCircle,
} from '@phosphor-icons/react';
import { CaretDoubleRight } from '@phosphor-icons/react/dist/ssr';
import ListaCategoriasHeader from './listaCategoriasHeader';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="flex w-full justify-between py-4">
        <Link
          to={'/home'}
          className="flex items-center justify-center w-1/5 logo-container gap-2 text-black"
        >
          <CaretDoubleRight size={64} weight="bold" className="text-primary-500" />
          <h2 className="text-xl font-bold leading-none text-cl-light">
            Gen <br />
            Farma
          </h2>
        </Link>
        <div className="input-group flex justify-stretch w-full rounded-3xl">
          <button className="flex items-center justify-center w-1/12 gap-3 text-sm font-bold bg-secondary-300 rounded-s-3xl">
            <Funnel size={36} color="white" weight="bold" />
          </button>
          <input
            type="text"
            placeholder="Pesquise seu produto aqui"
            className="bg-white px-10 w-full text-xl border-y-2"
          />
          <button className="grid place-content-center bg-secondary-300 rounded-e-3xl w-[12.5%]">
            <MagnifyingGlass weight="bold" size={32} color="white" />
          </button>
        </div>
        <div id="header-end" className="flex items-center w-1/6 h-100 justify-evenly">
          <div className="flex flex-col items-center justify-center">
            <ShoppingCartSimple
              className="text-secondary-300"
              size={48}
              weight="duotone"
            />
          </div>
          <UserCircle className="text-secondary-300" size={52} weight="duotone" />
        </div>
      </div>
      <div>
        <section className="h-14 w-full bg-primary-500 text-cl-light flex justify-around items-center text-white overflow-hidden">
          <button>
            <List size={32} color="white" weight="bold" />
          </button>
          <section className="w-11/12">
            <ListaCategoriasHeader />
          </section>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
