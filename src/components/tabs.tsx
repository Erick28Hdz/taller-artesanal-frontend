import React, {useState } from "react";
import "../css/tabs.css";

interface TabsProps {
  opciones: string[];
  onChange?: (valorSeleccionado: string) => void;
  valorInicial?: string;
}

const Tabs: React.FC<TabsProps> = ({ opciones, onChange, valorInicial }) => {
  const [seleccionado, setSeleccionado] = useState<string>(valorInicial || opciones[0]);

  const manejarCambio = (valor: string) => {
    setSeleccionado(valor);
    onChange?.(valor);
  };

  // Generamos dinámicamente la clase para cantidad
  const countClass = `tabs tabs-${opciones.length} active-${opciones.indexOf(seleccionado)}`;

  return (
    <div className="body">
      <div className={countClass}>
        {opciones.map((opcion, index) => {
          const id = `tab-${index}`;
          return (
            <React.Fragment key={opcion}>
              <input
                type="radio"
                id={id}
                name="tabs-universales"
                value={opcion}
                checked={seleccionado === opcion}
                onChange={() => manejarCambio(opcion)}
                className="input"
              />
              <label htmlFor={id} className="label">
                {opcion}
              </label>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
