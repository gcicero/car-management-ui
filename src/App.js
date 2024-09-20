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
    axios.get('https://webimotores.onrender.com/api/carros')
      .then(res=>{
        setCarros(res.data);
        console.log(carros);
    });
  }


  return (
    <div>
      <BarraMenu />
      <h1>Lista Carros</h1>
      <ListaCarros carros = {carros} carregaCarros = {carregaCarros} />
      <CadastroCarro carregaCarros = {carregaCarros} />
      
    </div>
  );
}

export default App;