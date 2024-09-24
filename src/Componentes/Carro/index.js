import axios from "axios";
import '../../index.css';
import { MdDelete } from 'react-icons/md';

const Carro = ({ valor, carregaCarros }) => {
    return (
        <div className='card'>
            <h3 className='titulo'>{valor.marca} {valor.modelo}</h3>
            <p className='subtitulo'>Ano: {valor.ano}</p>
            <p className='subtitulo'>Cor: {valor.cor}</p>
            <p className='subtitulo'>Preço: R$ {valor.preco}</p>
            <p className='subtitulo'>Quilometragem: {valor.quilometragem} km</p>
            <p className='subtitulo'>Tipo de Combustível: {valor.tipo_combustivel}</p>
            <img src={valor.foto_url} alt='Imagem do carro' className='imagem' />
            <MdDelete className='icone' onClick={() => remover(valor.id)} />
        </div>
    );

    function remover(id) {
        let api = "https://webimotores.onrender.com/carros";
        axios.delete(`${api}/${id}`)
            .then(() => {
                alert("Carro removido com sucesso!");
                carregaCarros();
            })
            .catch(err => {
                console.error("Erro ao remover carro:", err);
                alert("Erro ao remover o carro. Tente novamente.");
            });
    }
}

export default Carro;
