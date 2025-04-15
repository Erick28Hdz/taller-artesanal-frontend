import React from "react";
import "../css/input.css"; // Asegúrate de que la ruta sea correcta

interface InputProps {
    name: string;
    type?: string;
    value: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input: React.FC<InputProps> = ({
    name,
    type = "text",
    value,
    placeholder,
    onChange,
    className = "",
}) => {
    return (
            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`input ${className}`}
            />
        
    );
};

export default Input;