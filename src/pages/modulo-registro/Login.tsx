import React from "react";
import "../../css/style.css";
import "../../css/modulo-registro/Login.css"
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="seccion-login tienda-virtual">
            <div
                className="titulo-login">
                <img src="/images/Logos/ArteGestion-1.png" alt="" />
                <h2>Arte Gestión</h2>
                <h1>Taller artesanal</h1>
            </div>
            <form className="form-login">
                <div><p className="title">Iniciar sesión</p></div>
                <div className="flex-column">
                    <label>Correo electronico </label>
                </div>
                <div className="inputForm">
                    <img src="/images/Iconos/login.png" alt="" />
                    <input placeholder="Ingresa tú email" className="input" type="email" required />
                </div>
                <div className="flex-column">
                    <label>Contraseña </label>
                </div>
                <div className="inputForm">
                    <img src="/images/Iconos/bloquear.png" alt="" />
                    <input placeholder="Ingresa tú contraseña" className="input" type="password" required />
                </div>

                <div className="flex-row">
                    <div>
                        <input type="radio" />
                        <label>Recuerdame </label>
                    </div>
                    <p className="span">

                        <Link to="/Remember" className="span">¿Olvidaste la contraseña?</Link>
                    </p>
                </div>
                <button className="button-submit"><p>Iniciar sesión</p></button>
                <a className="p" href="">Politicas y condiciones</a>
                <p className="p">
                    ¿No tienes una cuenta?
                    <Link to="/Register" className="span">Registrarse</Link>
                </p>
                <p className="p line">O ingresa con:</p>

                <div className="flex-row">
                    <button className="btn google">
                        <img src="/images/Iconos/google.png" alt="" />

                        Google

                    </button>
                    <button className="btn apple">
                        <img src="/images/Iconos/apple.png" alt="" />

                        Apple

                    </button>
                </div>
            </form>
        </section>

    );
};

export default Login;