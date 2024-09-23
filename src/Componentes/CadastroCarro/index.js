import axios from "axios";
import { useState } from "react";

export default function CadastroCarro({ carregaCarros }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [foto, setFoto] = useState('');
  const [descricao, setDescricao] = useState('');

  function adicionaCarro() {
    if (!nome || !preco || !foto || !descricao) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    const carro = { nome, preco, foto, descricao };
    console.log(carro);
    axios.post('https://webimotores.onrender.com/carros', carro)
      .then(() => {
        carregaCarros();
        // Limpar campos após adicionar
        setNome('');
        setPreco('');
        setFoto('');
        setDescricao('');
      })
      .catch(error => {
        console.error("Erro ao adicionar carro:", error);
      });
  }

  return (
    <div className="card">
      <h3 className="titulo">Cadastro de Carros</h3>
      <form onSubmit={(e) => { e.preventDefault(); adicionaCarro(); }}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
        <br />
        <label>Preço:</label>
        <input type="text" value={preco} onChange={e => setPreco(e.target.value)} />
        <br />
        <label>Foto:</label>
        <input type="text" value={foto} onChange={e => setFoto(e.target.value)} />
        <br />
        <label>Descrição:</label>
        <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
        <br /><br />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
