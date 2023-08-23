import React from "react";
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  const opcoesComPlaceholder = ["Selecione uma opção", ...props.itens];

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor} >
        {opcoesComPlaceholder.map((item, index) => (
          <option
            key={item}
            value={index === 0 ? "" : item}
            disabled={index === 0}
            selected={index === 0}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
