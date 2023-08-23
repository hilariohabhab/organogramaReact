import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Timate from "./componentes/Timate";
import { rankingInfo } from "./componentes/Duplas/index";

function App() {
  const [jogadores, setJogadores] = useState([]);
  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        ranking={rankingInfo.map((rankingInfo) => rankingInfo.nome)}
        aoNovoJogadorAdicionado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />
      {rankingInfo.map((ranking) => (
        <Timate
          key={ranking.nome}
          nome={ranking.nome}
          corPrimaria={ranking.corPrimaria}
          corSecundaria={ranking.corSecundaria}
          jogadores={jogadores.filter(
            (jogador) => ranking.nome === jogador.rank
          )}
        />
      ))}
    </div>
  );
}

export default App;
