import "../../css/style.css";
import "../../css/modulo-registro/Register.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        contrasena: "",
        genero: "",
        fecha_nacimiento: "",
        documento: "",
    });

    const [show, setShow] = useState(false);
    const [confirmationCode, setConfirmationCode] = useState("");

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Registro exitoso 🎉");
            } else {
                alert("Error en el registro: " + data.error);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error en la conexión con el servidor.");
        }
    };

    return (
        <section className="seccion-login tienda-virtual">
            <div className="titulo-login">
                <img src="/images/Logos/ArteGestion-1.png" alt="Logo" />
                <h2>Arte Gestión</h2>
                <h1>Taller artesanal</h1>
            </div>
            <form className="form-login" onSubmit={handleSubmit}>
                <div><p className="title">Registrarse</p></div>
                <section className="seccion-registro">
                    <div className="flex-column">
                        <label>Nombres</label>
                        <div className="inputForm">
                            <img src="/images/Iconos/Identidad.png" alt="Identidad" />
                            <input name="nombre" placeholder="Nombres completos" className="input" type="text" onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="flex-column">
                        <label>Apellidos</label>
                        <div className="inputForm">
                            <img src="/images/Iconos/Identidad.png" alt="Identidad" />
                            <input name="apellido" placeholder="Apellidos completos" className="input" type="text" onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="flex-column">
                        <label>Género</label>
                        <div className="inputForm">
                            <select name="genero" className="input" onChange={handleChange} required>
                                <option value="">Seleccione su género</option>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex-column">
                        <label>Fecha de nacimiento</label>
                        <div className="inputForm">
                            <input name="fecha_nacimiento" type="date" className="input" onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="flex-column">
                        <label>Documento de identidad</label>
                        <div className="inputForm">
                            <input name="documento" placeholder="Número de documento" className="input" type="text" onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="flex-column">
                        <label>Ingresa tu email</label>
                        <div className="inputForm">
                            <img src="/images/Iconos/login.png" alt="Email" />
                            <input name="email" placeholder="Ingresa tu email" className="input" type="email" onChange={handleChange} required />
                        </div>
                    </div>

                    <button type="button" className="button-submit" onClick={handleShow}>
                        <p>Confirmar email</p>
                    </button>

                    {/* Modal para ingresar código de confirmación */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirmación de correo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="confirmationCodeInput">
                                    <Form.Label>Ingresa el código de confirmación</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Código de confirmación"
                                        value={confirmationCode}
                                        onChange={(e) => setConfirmationCode(e.target.value)}
                                        autoFocus
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="primary">
                                Confirmar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <div className="flex-column">
                        <label>Teléfono</label>
                        <div className="inputForm">
                            <input name="telefono" placeholder="Número de teléfono" className="input" type="tel" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex-column">
                        <label>Contraseña</label>
                        <div className="inputForm">
                            <input
                                name="contrasena"
                                placeholder="Ingresa tu contraseña"
                                className="input"
                                type="password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </section>

                <button type="submit" className="button-submit"><p>Registrarse</p></button>

                <a className="p" href="#">Políticas y condiciones</a>

                <p className="p">
                    ¿Ya tienes una cuenta?
                    <Link to="/Login" className="span"> Iniciar sesión</Link>
                </p>

                <p className="p line">O regístrate con:</p>

                <div className="flex-row">
                    <button type="button" className="btn google">
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

export default Register;
