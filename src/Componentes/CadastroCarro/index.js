import axios from "axios";
import { useState } from "react";

export default function CadastroCarro({ carregaCarros }) {
  const [_id, setId] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [tipoCombustivel, setTipoCombustivel] = useState('');
  const [quilometragem, setQuilometragem] = useState('');
  const [fotoUrl, setFotoUrl] = useState('');
  const [preco, setPreco] = useState('');

  function adicionaCarro() {
    // Verificação de campos vazios
    if (!_id || !marca || !modelo || !ano || !cor || !tipoCombustivel || !quilometragem || !fotoUrl || !preco) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    // Convertendo _id para número
    const carro = {
      _id: parseInt(_id, 10),  // Certifique-se de que _id é um número
      marca,
      modelo,
      ano: parseInt(ano, 10),  // O ano deve ser um número
      cor,
      tipo_combustivel: tipoCombustivel, // Use o mesmo nome esperado pela API
      quilometragem: parseInt(quilometragem, 10), // Quilometragem como número
      foto_url: fotoUrl, // O URL da foto deve ser uma string válida
      preco: parseFloat(preco) // Preço deve ser um número
    };

    // Log dos dados antes do envio
    console.log("Dados do carro antes do envio:", carro);

    axios.post('https://webimotores.onrender.com/carros', carro)
      .then(() => {
        alert("Carro adicionado com sucesso!");
        carregaCarros();  // Atualiza a lista de carros após adicionar
        // Limpar os campos do formulário
        setId('');
        setMarca('');
        setModelo('');
        setAno('');
        setCor('');
        setTipoCombustivel('');
        setQuilometragem('');
        setFotoUrl('');
        setPreco('');  // Limpar o campo Preço
      })
      .catch(error => {
        if (error.response) {
          // Resposta da API que não está no intervalo 2xx
          console.error("Erro ao adicionar carro:", error.response.data);
          alert(`Erro: ${error.response.data.message || 'Erro ao adicionar o carro. Tente novamente.'}`);
        } else if (error.request) {
          // Requisição feita, mas sem resposta
          console.error("Erro na requisição:", error.request);
          alert("Erro ao fazer a requisição. Tente novamente.");
        } else {
          // Outro erro ocorreu ao configurar a requisição
          console.error("Erro:", error.message);
          alert("Erro ao adicionar o carro. Tente novamente.");
        }
      });
  }

  return (
    <div className="card">
      <h3 className="titulo">Cadastro de Carros</h3>
      <form onSubmit={(e) => { e.preventDefault(); adicionaCarro(); }}>
        <label>ID:</label>
        <input type="number" value={_id} onChange={e => setId(e.target.value)} />
        <br />
        <label>Marca:</label>
        <input type="text" value={marca} onChange={e => setMarca(e.target.value)} />
        <br />
        <label>Modelo:</label>
        <input type="text" value={modelo} onChange={e => setModelo(e.target.value)} />
        <br />
        <label>Ano:</label>
        <input type="number" value={ano} onChange={e => setAno(e.target.value)} />
        <br />
        <label>Cor:</label>
        <input type="text" value={cor} onChange={e => setCor(e.target.value)} />
        <br />
        <label>Tipo de Combustível:</label>
        <input type="text" value={tipoCombustivel} onChange={e => setTipoCombustivel(e.target.value)} />
        <br />
        <label>Quilometragem:</label>
        <input type="number" value={quilometragem} onChange={e => setQuilometragem(e.target.value)} />
        <br />
        <label>Foto URL:</label>
        <input type="text" value={fotoUrl} onChange={e => setFotoUrl(e.target.value)} />
        <br />
        <label>Preço:</label>
        <input type="number" value={preco} onChange={e => setPreco(e.target.value)} />
        <br /><br />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
