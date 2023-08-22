import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
    const ranking = [
        'Bronze I',
        'Bronze iI',
        'Bronze iII',
        'Prata I',
        'Prata II',
        'Prata III',
        'Ouro I',
        'Ouro II',
        'Ouro III',
        'Platina I',
        'Platina II',
        'Platina III',
        'Diamante I',
        'Diamante II',
        'Diamante III',
        'Champion I',
        'Champion II',
        'Champion III',
        'Grand Champion I',
        'Grand Champion II',
        'Grand Champion III',
        'FUCKIN SSL'
  ]
  
  const plataforma = [
    'PS4 / PS5',
    'PC',
    'Xbox',
    'Nintendo'
  ]
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card.</h2>
        <CampoTexto label="Nick" placeholder="Digite seu nick" />
        <ListaSuspensa label="Plataforma" itens={plataforma} />
        <CampoTexto label="Imagem" placeholder="Imagem que comprove o rank" />
        <ListaSuspensa label="Rank" itens={ranking} />
      </form>
    </section>
  );
};

export default Formulario;
