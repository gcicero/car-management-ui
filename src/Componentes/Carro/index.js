import axios from "axios";
import '../../index.css';
import {MdDelete} from 'react-icons/md'


const Carro = ({valor, carregaCarros}) => {
    return (
        <div className='card'>
            <h3 className='titulo'>{valor.nome}</h3>
            <p className='subtitulo'>Preço: {valor.preco}</p>
            <p className='subtitulo'>Descrição: {valor.descricao}</p>
            <img src={valor.foto} alt='Imagem do carro' className='imagem'></img>
            <MdDelete className='icone' onClick={()=>remover(valor.id)}></MdDelete>
        </div>
    )

    function remover(id){
        let api = "https://webimotores.onrender.com/"
        axios.delete(`${api}/${id}`)
            .then(()=>{
                carregaCarros();
            });
    }
}

export default Carro;