import React, { useState } from "react";
import "../css/formulario.css"; 

interface CampoFormulario {
  nombre: string;
  etiqueta: string;
  tipo: string; // "text", "number", "date", "select", etc.
  opciones?: string[]; // Para selects
}

interface FormularioProps {
  titulo: string;
  campos: CampoFormulario[];
  onSubmit: (datos: any) => void;
}

const FormularioUniversal: React.FC<FormularioProps> = ({ titulo, campos, onSubmit }) => {
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{titulo}</h2>
      {campos.map((campo) => (
        <div key={campo.nombre}>
          <label>{campo.etiqueta}</label>
          {campo.tipo === "select" ? (
            <select name={campo.nombre} onChange={handleChange}>
              {campo.opciones?.map((opcion) => (
                <option key={opcion} value={opcion}>{opcion}</option>
              ))}
            </select>
          ) : (
            <input type={campo.tipo} name={campo.nombre} onChange={handleChange} />
          )}
        </div>
      ))}
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormularioUniversal;
