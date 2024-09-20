import axios from "axios";

export default function CadastroCarro({carregaCarros}) {
    return (
        <div className="card">
            <h3 className="titulo"> Cadastro de Carros</h3>
            <form>
                <label>Nome:</label>
                <input type="text" id="nome" name="nome"></input>
                <br/>
                <label>Preço:</label>
                <input type="text" id="preco" name="preco"></input>
                <br/>
                <label>Foto:</label>
                <input type="text" id="foto" name="foto"></input>
                <br/>
                <label>Descrição:</label>
                <input type="text" id="descricao" name="descricao"></input>
                <br/><br/>
                <button type="button" onClick={adicionaCarro}>Adicionar</button>
            </form>
        </div>
    );

    function adicionaCarro(){
        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;
        const foto = document.getElementById('foto').value;
        const descricao = document.getElementById('descricao').value;
        const carro = {nome, preco, foto, descricao};
        console.log(carro);
        axios.post('https://app-api-tapwm.onrender.com/api/carros',carros)
        .then(()=>{
            carregaCarros();
        });
    }

}