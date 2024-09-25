import axios from "axios";
import '../../index.css';
import { MdDelete } from 'react-icons/md';
import { FaCar, FaGasPump } from 'react-icons/fa';
import { GiPathDistance } from 'react-icons/gi';

const Carro = ({ valor, carregaCarros }) => {
    const id = valor._id;

    return (
        <div className='car-card'>
            <div className='car-card-header'>
                <img src={valor.foto_url} alt='Imagem do carro' className='car-image' />
            </div>
            <div className='car-info'>
                <h3 className='car-title'>{valor.marca} {valor.modelo}</h3>
                <p className='car-price'>R$ {valor.preco.toLocaleString('pt-BR')}</p>
                <p className='car-detail'>
                    <FaCar /> {valor.ano} &nbsp; | &nbsp;
                    <FaGasPump /> {valor.tipo_combustivel} &nbsp; | &nbsp;
                    <GiPathDistance /> {valor.quilometragem} km
                </p>
            </div>
            <button className='car-delete' onClick={() => remover(id)}>
                <MdDelete className='delete-icon' />
                Remover
            </button>
        </div>
    );

    function remover(id) {
        if (!id) {
            alert("ID do carro não encontrado.");
            return;
        }

        const api = "https://webimotores.onrender.com/carros";
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
