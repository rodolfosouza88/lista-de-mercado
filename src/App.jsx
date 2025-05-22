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
    <>
      <h1 className="text-3xl font-bold">Lista Mercado</h1>
      <input
        ref={inputAdicionar}
        type="text"
        placeholder="Digite um item"
      />{" "}
      <button onClick={() => adicionarElementoNaLista()}>Adicionar</button>
      {/* verificando se a lista está vazia    */}
      {listaMercado.length > 0 ? (
        <ul>
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
        <p>Lista vazia</p>
      )}
    </>
  );
}

export default App;
