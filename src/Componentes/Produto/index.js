import axios from "axios";
import '../../index.css';
import {MdDelete} from 'react-icons/md'


const Produto = ({valor, carregaProdutos}) => {
    return (
        <div className='card'>
            <h3 className='titulo'>{valor.nome}</h3>
            <p className='subtitulo'>Preço: {valor.preco}</p>
            <p className='subtitulo'>Descrição: {valor.descricao}</p>
            <img src={valor.foto} alt='Imagem do produto' className='imagem'></img>
            <MdDelete className='icone' onClick={()=>remover(valor.id)}></MdDelete>
        </div>
    )

    function remover(id){
        let api = "https://app-api-tapw.onrender.com/api/produtos"
        axios.delete(`${api}/${id}`)
            .then(()=>{
                carregaProdutos();
            });
    }
}

export default Produto;