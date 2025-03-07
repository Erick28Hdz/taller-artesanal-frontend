import React, { useState, useEffect } from "react";
import "../../css/style.css";
import "../../css/modulo-registro/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { auth } from "../../config/firebaseConfig";
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [contrasena, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Verifica si hay un usuario autenticado tras la redirección de Google
        getRedirectResult(auth)
            .then((result) => {
                if (result?.user) {
                    console.log("Usuario autenticado con Google:", result.user);
                    localStorage.setItem("usuario", JSON.stringify(result.user));
                    navigate("/"); // Redirigir al usuario a la página principal
                }
            })
            .catch((error) => {
                console.error("Error en la autenticación con Google:", error);
                setError("Hubo un problema con el inicio de sesión.");
            });
    }, [navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:3000/api/login", {
                email,
                contrasena,
            });

            const { token, usuario } = response.data;
            localStorage.setItem("token", token);
            localStorage.setItem("usuario", JSON.stringify(usuario));

            navigate("/");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            setError("Correo o contraseña incorrectos.");
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithRedirect(auth, provider);
    };

    return (
        <section className="seccion-login tienda-virtual">
            <div className="titulo-login">
                <img src="/images/Logos/ArteGestion-1.png" alt="Logo Arte Gestión" />
                <h2>Arte Gestión</h2>
                <h1>Taller artesanal</h1>
            </div>

            <form className="form-login" onSubmit={handleSubmit}>
                <div><p className="title">Iniciar sesión</p></div>

                {error && <p className="error-message">{error}</p>}

                <div className="flex-column">
                    <label htmlFor="email">Correo electrónico</label>
                </div>
                <div className="inputForm">
                    <img src="/images/Iconos/login.png" alt="Icono email" />
                    <input
                        id="email"
                        placeholder="Ingresa tu email"
                        className="input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex-column">
                    <label htmlFor="contrasena">Contraseña</label>
                </div>
                <div className="inputForm">
                    <img src="/images/Iconos/bloquear.png" alt="Icono candado" />
                    <input
                        id="contrasena"
                        placeholder="Ingresa tu contraseña"
                        className="input"
                        type="password"
                        required
                        value={contrasena}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex-row">
                    <div>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Recuérdame</label>
                    </div>
                    <p className="span">
                        <Link to="/Remember">¿Olvidaste la contraseña?</Link>
                    </p>
                </div>

                <button type="submit" className="button-submit"><p>Iniciar sesión</p></button>

                <p className="p">¿No tienes una cuenta? <Link to="/Register" className="span">Registrarse</Link></p>
                <p className="p line">O ingresa con:</p>

                <div className="flex-row">
                    <button type="button" className="btn google" onClick={handleGoogleLogin}>
                        <img src="/images/Iconos/google.png" alt="Google" />
                        Google
                    </button>
                    <button type="button" className="btn apple">
                        <img src="/images/Iconos/apple.png" alt="Apple" />
                        Apple
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Login;
