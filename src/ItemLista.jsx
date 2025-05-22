import React from "react";

const ItemLista = ({ itemLista, listaMercado, setListaMercado }) => {
  const removeritemDaLista = () => {
    const novaLista = [...listaMercado];
    const novaListaFiltrada = novaLista.filter(
      (itemAtua) => itemAtua !== itemLista,
    ); //verificando se o item atual é diferente do item que está passando na lista
    setListaMercado(novaListaFiltrada); //setando a nova lista com o item excluido
  };

  return (
    <li className="flex justify-between gap-2">
      <p>{itemLista}</p>
      <button
        className="cursor-pointer rounded-md bg-red-600 px-2 text-white transition hover:bg-red-500"
        onClick={() => {
          removeritemDaLista();
        }}
      >
        Remover
      </button>
    </li>
  );
};

export default ItemLista;
