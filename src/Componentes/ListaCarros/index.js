import Carro from "../Carro";

const ListaCarros = ({carros, carregaCarros}) => {
    return (
        <div className='card-container'> 
            {carros.map((p) => (
                <Carro 
                    key={p._id} // Adicione uma propriedade key única aqui
                    valor={p} 
                    carregaCarros={carregaCarros} 
                />
            ))} 
        </div>
    );
};

export default ListaCarros;
