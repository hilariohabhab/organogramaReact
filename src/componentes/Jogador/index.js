import './Jogador.css'

const Jogador = ({nome, imagem, plataforma, ranking, corDeFundo}) => {
    return (
      <div className="jogador">
        <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
          <img
            src={imagem}
            alt={nome}
          />
        </div>
        <div className='rodape'>
          <h4>{nome}</h4>
          <h5>{plataforma}</h5>
          <h6>{ranking}</h6>
        </div>
      </div>
    );
    
}

export default Jogador