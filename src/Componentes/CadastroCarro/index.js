import axios from "axios";
import { useState } from "react";

export default function CadastroCarro({ carregaCarros }) {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [tipoCombustivel, setTipoCombustivel] = useState('');
  const [quilometragem, setQuilometragem] = useState('');
  const [fotoUrl, setFotoUrl] = useState('');
  const [preco, setPreco] = useState('');
  const [error, setError] = useState('');

  const adicionaCarro = async () => {
    setError('');
    if (!marca || !modelo || !ano || !cor || !tipoCombustivel || !quilometragem || !fotoUrl || !preco) {
      setError("Todos os campos são obrigatórios!");
      return;
    }

    const carro = {
      marca,
      modelo,
      ano: parseInt(ano, 10),
      cor,
      tipo_combustivel: tipoCombustivel,
      quilometragem: parseInt(quilometragem, 10),
      foto_url: fotoUrl,
      preco: parseFloat(preco)
    };

    try {
      await axios.post('https://webimotores.onrender.com/carros', carro);
      alert("Carro adicionado com sucesso!");
      carregaCarros();
      limparCampos();
    } catch (error) {
      console.error("Erro ao adicionar carro:", error);
      setError("Erro ao adicionar o carro. Tente novamente.");
    }
  };

  const limparCampos = () => {
    setMarca('');
    setModelo('');
    setAno('');
    setCor('');
    setTipoCombustivel('');
    setQuilometragem('');
    setFotoUrl('');
    setPreco('');
  };

  return (
    <div className="card-form">
      <h3 className="titulo">Cadastro de Carros</h3>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={(e) => { e.preventDefault(); adicionaCarro(); }}>
        <label>Marca:</label>
        <input type="text" value={marca} onChange={e => setMarca(e.target.value)} required />
        <label>Modelo:</label>
        <input type="text" value={modelo} onChange={e => setModelo(e.target.value)} required />
        <label>Ano:</label>
        <input type="number" value={ano} onChange={e => setAno(e.target.value)} required min="1886" />
        <label>Cor:</label>
        <input type="text" value={cor} onChange={e => setCor(e.target.value)} required />
        <label>Tipo de Combustível:</label>
        <input type="text" value={tipoCombustivel} onChange={e => setTipoCombustivel(e.target.value)} required />
        <label>Quilometragem:</label>
        <input type="number" value={quilometragem} onChange={e => setQuilometragem(e.target.value)} required min="0" />
        <label>Foto URL:</label>
        <input type="text" value={fotoUrl} onChange={e => setFotoUrl(e.target.value)} required />
        <label>Preço:</label>
        <input type="number" value={preco} onChange={e => setPreco(e.target.value)} required min="0" step="0.01" />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
