import "../../css/style.css";
import "../../css/modulo-registro/Remember.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";


const Remember = () => {
    const [show, setShow] = useState(false);
    const [confirmationCode, setConfirmationCode] = useState("");
    const [generatedCode] = useState("123456"); // Simula un código enviado al correo.

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleConfirm = () => {
        if (confirmationCode === generatedCode) {
            alert("Código confirmado correctamente.");
            setShow(false);
        } else {
            alert("Código incorrecto. Intenta nuevamente.");
        }
    };

    return (
        <section className="seccion-login tienda-virtual">
            <div className="titulo-login">
                <img src="/images/Logos/ArteGestion-1.png" alt="" />
                <h2>Arte Gestión</h2>
                <h1>Taller artesanal</h1>
            </div>
            <form className="form-login">
                <div><p className="title">Recuperar contraseña</p></div>
                <section className="seccion-recuperar">
                    <div className="flex-column">
                        <label>Ingresa tú email</label>
                    </div>
                    <div className="inputForm">
                        <img src="/images/Iconos/login.png" alt="" />
                        <input placeholder="Ingresa tú email" className="input" type="email" required />
                    </div>
                    <button className="button-submit" onClick={handleShow}>
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
                            <Button variant="primary" onClick={handleConfirm}>
                                Confirmar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <div className="flex-column">
                        <label>Contraseña</label>
                    </div>
                    <div className="inputForm">
                        <img src="/images/Iconos/bloquear.png" alt="" />
                        <input placeholder="Ingresa tú contraseña" className="input" type="password" required />
                    </div>
                    <div className="flex-column">
                        <label>Repite la contraseña</label>
                    </div>
                    <div className="inputForm">
                        <img src="/images/Iconos/bloquear.png" alt="" />
                        <input placeholder="Repite tú contraseña" className="input" type="password" required />
                    </div>
                </section>

                <button className="button-submit"><p>Restablecer</p></button>
                <a className="p" href="">Políticas y condiciones</a>
            </form>
        </section>
    );
};

export default Remember;