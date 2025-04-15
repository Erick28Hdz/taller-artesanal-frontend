import React from "react";
import "../css/boton.css";

interface BotonProps {
    texto: string;
    tipo?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
    deshabilitado?: boolean;
}

const Boton: React.FC<BotonProps> = ({ texto, tipo = "button", onClick, className = "", deshabilitado = false }) => {
    return (
        <button className={`button-general ${className}`} type={tipo} onClick={onClick} disabled={deshabilitado}>
            <span className="text-boton-general">{texto}</span>
        </button>
    );
};

export default Boton;