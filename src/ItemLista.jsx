import React from "react";

const ItemLista = ({ itemLista, listaMercado, setListaMercado }) => {
  const removeritemDaLista = () => {
    const novaLista = [...listaMercado];
    const novaListaFiltrada = novaLista.filter(
      (itemAtua) => itemAtua !== itemLista
    ); //verificando se o item atual é diferente do item que está passando na lista
    setListaMercado(novaListaFiltrada); //setando a nova lista com o item excluido
  };

  return (
    <li>
      <p>{itemLista}</p>
      <button
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
