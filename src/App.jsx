import { useRef, useState } from "react";
import ItemLista from "./ItemLista";

function App() {
  const [listaMercado, setListaMercado] = useState([]);
  const inputAdicionar = useRef(); //referencia para o input

  const adicionarElementoNaLista = () => {
    const novaLista = [...listaMercado];
    const valorInput = inputAdicionar.current.value;

    if (valorInput) {
      //Não preciso colocar !==+'' diferente de vazio
      novaLista.push(valorInput);
      setListaMercado(novaLista); //setListaMercado - lista que eu posso modificar - recebe = novaLista com os itens autuais
      inputAdicionar.current.value = ""; //Zera o valor do input
    }
  };

  return (
    <div className="flex w-full max-w-96 flex-col items-center rounded-lg bg-stone-200 p-8">
      <h1 className="m-5 text-3xl font-bold">Lista Mercado</h1>

      <div className="m-2 flex w-full gap-4">
        <input
          className="w-full rounded-md border-gray-600 px-2"
          ref={inputAdicionar}
          type="text"
          placeholder="Digite um item"
        />{" "}
        <button
          className="hover:bg-gray-00 m-2 cursor-pointer rounded-md bg-gray-950 px-2 text-white transition"
          onClick={() => adicionarElementoNaLista()}
        >
          Adicionar
        </button>
      </div>

      {/* verificando se a lista está vazia    */}
      {listaMercado.length > 0 ? (
        <ul className="flex w-full flex-col gap-2">
          {listaMercado.map((itemLista, index) => {
            return (
              <ItemLista
                key={index}
                itemLista={itemLista}
                listaMercado={listaMercado}
                setListaMercado={setListaMercado}
              />
            );
          })}
        </ul>
      ) : (
        <p className="m-5">Você não tem nenhum item na lista</p>
      )}
    </div>
  );
}

export default App;
