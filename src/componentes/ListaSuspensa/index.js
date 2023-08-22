import React from "react";
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  const opcoesComPlaceholder = ["Selecione uma opção", ...props.itens];

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select>
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
