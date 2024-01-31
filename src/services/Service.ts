import axios from 'axios';

const api = axios.create({
  baseURL: 'https://farmacia-ug0p.onrender.com/',
});

export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};

export const cadastrar = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const atualizar = async (url: string, dados: object, setDados: Function) => {
  console.log(url);
  console.log(dados);
  console.log(setDados);
  const resposta = await api.put(url, dados);
  setDados(resposta.data);
};

export const deletar = async (url: string) => {
  await api.delete(url);
};
