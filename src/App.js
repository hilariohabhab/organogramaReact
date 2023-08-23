import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Fomulario";
import Timate from "./componentes/Timate";
import { rankingInfo } from './componentes/Duplas/index';


function App() {


  const [jogadores, setJogadores] = useState([]);
  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador)
      setJogadores([...jogadores, jogador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario
        aoNovoJogadorAdicionado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />
      {rankingInfo.map((ranking) => (
        <Timate key={ranking.nome} nome={ranking.nome} corPrimaria={ranking.corPrimaria} corSecundaria={ranking.corSecundaria}/>
      ))}
    </div>
  );
}

export default App;
