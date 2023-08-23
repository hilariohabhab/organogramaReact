import Jogador from "../Jogador";
import "./Timate.css";

const Timate = (props) => {
  const corDeFundo = { backgroundColor: props.corSecundaria };
  const borda = { borderColor: props.corPrimaria };
  return (
    
    (props.jogadores.length >0) ?  <section className="timate" style={corDeFundo}>
      <h3 style={borda}>{props.nome}</h3>
      <div className="jogadores">
        {props.jogadores.map((jogador) => (
          <Jogador
            imagem={jogador.imagem}
            nome={jogador.nick}
            plataforma={jogador.plataforma}
            ranking={jogador.rank}
          />
        ))}
      </div>
    </section>
     : ''
  ); 
};

export default Timate;
