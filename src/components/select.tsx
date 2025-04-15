import React from "react";
import "../css/select.css"; // Asegúrate de que la ruta sea correcta

interface SelectProps {
  name: string;
  value: string | number;
  options: OpcionSelect[];
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}


interface OpcionSelect {
  valor: string | number;
  etiqueta: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  value,
  options,
  placeholder,
  onChange,
  className = "",
}) => {
  return (
    <div className="select-container">
      <select
        name={name}
        value={value}
        onChange={onChange}
        required
        className={`select ${className}`}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((option) => (
          <option key={option.valor} value={option.valor}>
            {option.etiqueta}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
