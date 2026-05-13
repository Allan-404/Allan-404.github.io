import { useState } from 'react'
import reactDOM from 'react-dom/client'
import './App.css'

function App() {
const nome = "Allan Felipe Rodrigues Barbosa";
const curso = "Ciencias e Tecnologias"
const [contador, setContador] = useState(0);
const [item, setItem] = useState('');
const [itens, setItens] = useState([]);
const [itemrem, setItemRem] = useState('');
const adicionarItem = () => {
   const novoItem = `Item: ${item}`;
   setItens([...itens, novoItem]);
   setItem('');
};
const removerItem = (index) => {
  setItens(itens.filter((_, i) => i !== index));
  setItemRem('');
};
const [valor, setValor] = useState('');
const [valorTotal, setValorTotal] = useState(0);
const adicionarValor = () => {
  const valorNumerico = parseFloat(valor);
  if (!isNaN(valorNumerico)) {
    setValorTotal(valorTotal + valorNumerico);
    setValor('');
  }
}
return (
<div>
<h1>Olá, {nome}</h1>
<p>voce faz parte do curso {curso} </p>
    <br />
    <container1>
      <h1> Contador</h1>
      <footer>{contador}</footer>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <br />
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <br />
      <button onClick={() => setContador(0)}>limpar</button>
    </container1>
    <container2>
      <h2>{itemrem}</h2>
      <h3>Valor Total: R$ {valorTotal.toFixed(2)}</h3>
      <button onClick={() => {
        setValorTotal(0);
        setItens([]);
      }}>Limpar Tudo</button>
      <br />
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Digite um item" />
      <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Digite o Valor" />
      <button onClick={() => {
        adicionarItem();
        adicionarValor();
      }}>Adicionar</button>
      <br />
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{index+1}- {item} <button onClick={() => removerItem(index)}>X</button></li>
        ))}
      </ul>
    </container2>
</div>
);
}

export default App