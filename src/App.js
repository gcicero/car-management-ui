import logo from './logo.svg';
import './App.css';
import ListaProdutos from './Componentes/ListaProdutos';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CadastraProduto from './Componentes/CadastroProduto';

function App() {
  const [produtos, setProdutos] = useState([]);
  
  useEffect(()=>{
    carregarProdutos();
  }, []);
  

  function carregarProdutos(){
    axios.get("https://app-api-tapwm.onrender.com/api/produtos")
      .then(res=>{
        setProdutos( res.data);
        //console.log(produtos);
  });
  }

  return (
    <div>
      <h1>Lista de Produts</h1>
      <ListaProdutos produtos={produtos}/>
      <CadastraProduto carregarProdutos={carregarProdutos}/>
    </div>  
  );
}

export default App;
