import logo from './logo.svg';
import './App.css';
import ListaCarros from './Componentes/ListaCarros'
import axios from 'axios';
import { useEffect, useState } from 'react';
import CadastroCarro from './Componentes/CadastroCarro';
import BarraMenu from './Componentes/BarraMenu';




function App() {
  const [carros, setCarros] = useState([]);
  useEffect(()=>{
    carregaCarros();
  }, []);


  function carregaCarros() {
    axios.get('https://webimotores.onrender.com/carros')
      .then(res => {
        setCarros(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error("Erro ao carregar carros:", error);
      });
  }
  


  return (
    <div>
      <BarraMenu />
      <h1>Lista Carros</h1>
      <ListaCarros carros = {carros} carregaCarros = {carregaCarros} />
      
      
    </div>
  );
}

export default App;