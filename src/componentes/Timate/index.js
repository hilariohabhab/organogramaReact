import "./Timate.css";

const Timate = (props) => {
  const corDeFundo = { backgroundColor: props.corSecundaria };
  const borda = { borderColor: props.corPrimaria };
  return (
    <section className="timate" style={corDeFundo}>
      <h3 style={borda}>{props.nome}</h3>
    </section>
  );
};

export default Timate;
