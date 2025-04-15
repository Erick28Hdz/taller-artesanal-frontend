import React from "react";
import Input from "./input";
import Select from "./select";
import "../css/formulario.css";

interface CampoFormulario {
  nombre: string;
  etiqueta: string;
  tipo: string;
  opciones?: { valor: string | number; etiqueta: string }[];
  placeholder?: string; 
}

interface FormularioProps {
  titulo: string;
  campos: CampoFormulario[];
  valoresIniciales: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (datos: any) => void;
}

const FormularioUniversal: React.FC<FormularioProps> = ({
  titulo,
  campos,
  valoresIniciales,
  onChange,
  onSubmit,
}) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(valoresIniciales); // ← ya no usamos estado interno
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>{titulo}</h2>

      <div className="contenedor-campos">
        {campos.map((campo) => (
          <div key={campo.nombre} className="campo">
            {campo.tipo !== "select" ? (
              <Input
                name={campo.nombre}
                type={campo.tipo}
                value={valoresIniciales[campo.nombre] || ""}
                placeholder={campo.etiqueta}
                onChange={onChange}
              />
            ) : (
              <Select
                name={campo.nombre}
                value={valoresIniciales[campo.nombre] || ""}
                onChange={onChange}
                placeholder={campo.etiqueta}
                options={campo.opciones || []}
              />
            )}
          </div>
        ))}
      </div>
    </form>
  );
};

export default FormularioUniversal;
