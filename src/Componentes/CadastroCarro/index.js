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

  function adicionaCarro() {
    // Verificação de campos vazios
    if (!marca || !modelo || !ano || !cor || !tipoCombustivel || !quilometragem || !fotoUrl || !preco) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    const carro = {
      marca,
      modelo,
      ano: parseInt(ano),  // Garantindo que o ano seja um número
      cor,
      tipo_combustivel: tipoCombustivel,
      quilometragem: parseInt(quilometragem),  // Garantindo que a quilometragem seja um número
      foto_url: fotoUrl,
      preco: parseFloat(preco)  // Preço convertido para float
    };

    console.log("Enviando os dados:", carro);  // Log dos dados que estão sendo enviados

    axios.post('https://webimotores.onrender.com/carros', carro)
      .then(() => {
        alert("Carro adicionado com sucesso!");
        carregaCarros();  // Atualiza a lista de carros após adicionar
        // Limpar os campos do formulário
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
          // O servidor retornou uma resposta com status de erro (400, 500, etc)
          console.error("Erro de resposta da API:", error.response.data);  // Dados do erro retornado
          console.error("Status:", error.response.status);  // Status do erro
          console.error("Headers:", error.response.headers);  // Headers da resposta
          alert(`Erro ao adicionar o carro: ${error.response.data.message || 'Verifique os dados e tente novamente.'}`);
        } else if (error.request) {
          // A requisição foi feita, mas nenhuma resposta foi recebida
          console.error("Erro de requisição:", error.request);
          alert("Nenhuma resposta do servidor. Verifique sua conexão ou tente novamente mais tarde.");
        } else {
          // Erro ao configurar a requisição
          console.error("Erro ao configurar a requisição:", error.message);
          alert("Erro inesperado ao tentar adicionar o carro.");
        }
      });
  }

  return (
    <div className="card">
      <h3 className="titulo">Cadastro de Carros</h3>
      <form onSubmit={(e) => { e.preventDefault(); adicionaCarro(); }}>
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
