import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {



  const plataforma = ["PS4 / PS5", "PC", "Xbox", "Nintendo"];

  const [nick, setNick] = useState("");
  const [plataformas, setPlataformas] = useState("");
  const [imagem, setImagem] = useState("");
  const [rank, setRank] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoNovoJogadorAdicionado({
      nick,
      plataforma,
      imagem,
      rank,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o formulário.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nick"
          placeholder="Digite seu nick"
          valor={nick}
          aoAlterado={(valor) => setNick(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Plataforma"
          itens={plataforma}
          valor={plataformas}
          aoAlterado={(valor) => setPlataformas(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Imagem que comprove o rank"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Rank"
          itens={props.ranking}
          valor={rank}
          aoAlterado={(valor) => setRank(valor)}
        />

        <Botao>Enviar cadastro</Botao>
      </form>
    </section>
  );
};

export default Formulario;
