import {
  Copyright,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';
import { CaretDoubleRight } from 'phosphor-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className="flex items-center justify-between bg-primary-500 mt-32">
        <Link
          to={'/genFarma/home'}
          className="flex items-center justify-center w-1/5 logo-container gap-2 text-white"
        >
          <CaretDoubleRight size={64} weight="bold" />
          <h2 className="text-xl font-bold leading-none text-cl-light">
            Gen <br />
            Farma
          </h2>
        </Link>
        <section className="flex w-1/4 gap-8 text-cl-light justify-evenly">
          <FacebookLogo color="white" size={42}></FacebookLogo>
          <LinkedinLogo color="white" size={42}></LinkedinLogo>
          <InstagramLogo color="white" size={42}></InstagramLogo>
          <YoutubeLogo color="white" size={42}></YoutubeLogo>
        </section>
      </section>
      <section className="flex justify-between">
        <div className="flex items-center gap-2 px-4 font-bold">
          <Copyright></Copyright>
          <p>Copyright 2024</p>
        </div>
        <div className="flex gap-3 px-4 font-bold">
          <p>Termos de Uso</p>
          <p>Política de Privacidade</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
