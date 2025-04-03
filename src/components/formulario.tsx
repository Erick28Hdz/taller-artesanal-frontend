import React, { useState, useEffect } from "react";
import "../css/formulario.css"; 

interface CampoFormulario {
  nombre: string;
  etiqueta: string;
  tipo: string;
  opciones?: string[];
}

interface FormularioProps {
  titulo: string;
  campos: CampoFormulario[];
  valoresIniciales?: any;
  onSubmit: (datos: any) => void;
}

const FormularioUniversal: React.FC<FormularioProps> = ({ titulo, campos, valoresIniciales, onSubmit }) => {
  const [formData, setFormData] = useState<any>(valoresIniciales || {});

  // 🔹 Actualizar formData si valoresIniciales cambia
  useEffect(() => {
    setFormData(valoresIniciales || {});
  }, [valoresIniciales]);

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
            <select name={campo.nombre} value={formData[campo.nombre] || ""} onChange={handleChange}>
              {campo.opciones?.map((opcion) => (
                <option key={opcion} value={opcion}>{opcion}</option>
              ))}
            </select>
          ) : (
            <input type={campo.tipo} name={campo.nombre} value={formData[campo.nombre] || ""} onChange={handleChange} />
          )}
        </div>
      ))}
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormularioUniversal;

