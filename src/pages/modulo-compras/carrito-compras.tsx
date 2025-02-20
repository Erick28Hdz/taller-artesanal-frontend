import * as React from 'react';
import { Link } from "react-router-dom";
import "../../css/style.css";
import "../../css/modulo-compras/compras.css"


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Compras = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Evita el envío predeterminado del formulario
    
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            alert("Datos enviados correctamente.");
        }
        
        setValidated(true);
    };
    return (
        <div className='compras-cliente tienda-virtual'>
            <h2>Carrito de compras</h2>
            <section className="productos-seleccionados">
                <div className='tabla-productos-compra'>
                    <table className="productos-proceso-compra">
                        <thead>
                            <tr>
                                <th>Información del producto</th>
                                <th>Cantidad</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="producto-comprado-informacion">
                                    <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="Producto" />
                                    <div>
                                        <h6>Nombre del producto</h6>
                                        <p>Descripción del producto</p>
                                    </div>
                                </td>
                                <td className="producto-comprado-cantidad">2</td>
                                <td className="producto-comprado-precio">$20.000</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className="producto-comprado-informacion">
                                    <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="Producto" />
                                    <div>
                                        <h6>Nombre del producto</h6>
                                        <p>Descripción del producto</p>
                                    </div>
                                </td>
                                <td className="producto-comprado-cantidad">2</td>
                                <td className="producto-comprado-precio">$20.000</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className="producto-comprado-informacion">
                                    <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="Producto" />
                                    <div>
                                        <h6>Nombre del producto</h6>
                                        <p>Descripción del producto</p>
                                    </div>
                                </td>
                                <td className="producto-comprado-cantidad">2</td>
                                <td className="producto-comprado-precio">$20.000</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className="producto-comprado-informacion">
                                    <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="Producto" />
                                    <div>
                                        <h6>Nombre del producto</h6>
                                        <p>Descripción del producto</p>
                                    </div>
                                </td>
                                <td className="producto-comprado-cantidad">2</td>
                                <td className="producto-comprado-precio">$20.000</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className="producto-comprado-informacion">
                                    <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="Producto" />
                                    <div>
                                        <h6>Nombre del producto</h6>
                                        <p>Descripción del producto</p>
                                    </div>
                                </td>
                                <td className="producto-comprado-cantidad">2</td>
                                <td className="producto-comprado-precio">$20.000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className='seccion-compra-final'>
                <div>
                    <h5>Orden de compra</h5>
                </div>
                <div className='codigo-promocional-compra'>
                    <p>Código promocional</p>
                    <input placeholder="Código promocional" className="input-compra" name="text" type="text"></input>
                    <button className="boton-elegante">verificar</button>
                </div>
                <div className='seleccion-mensajeria-compra'>
                    <p>Mensajeria</p>
                    <div>
                        <Button variant="primary" onClick={handleShow}>
                            Dirección de Envío
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Formulario de Envío</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    {/* Dirección */}
                                    <Form.Group className="mb-3" controlId="direccion">
                                        <Form.Label>Dirección</Form.Label>
                                        <Form.Control type="text" required placeholder="Ej: Calle 123, Edificio A" />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa una dirección válida.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Código Postal */}
                                    <Form.Group className="mb-3" controlId="codigoPostal">
                                        <Form.Label>Código Postal</Form.Label>
                                        <Form.Control type="text" required placeholder="Ej: 12345" />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa un código postal válido.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* País */}
                                    <Form.Group className="mb-3" controlId="pais">
                                        <Form.Label>País</Form.Label>
                                        <Form.Control as="select" required>
                                            <option value="">Selecciona un país</option>
                                            <option value="mx">México</option>
                                            <option value="ar">Argentina</option>
                                            <option value="es">España</option>
                                            <option value="co">Colombia</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            Por favor selecciona un país.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Ciudad */}
                                    <Form.Group className="mb-3" controlId="ciudad">
                                        <Form.Label>Ciudad</Form.Label>
                                        <Form.Control type="text" required placeholder="Ej: Ciudad de México" />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa una ciudad válida.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Provincia / Estado */}
                                    <Form.Group className="mb-3" controlId="provincia">
                                        <Form.Label>Provincia / Estado</Form.Label>
                                        <Form.Control type="text" required placeholder="Ej: Buenos Aires" />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa una provincia o estado válido.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Teléfono */}
                                    <Form.Group className="mb-3" controlId="telefono">
                                        <Form.Label>Teléfono de Contacto</Form.Label>
                                        <Form.Control type="tel" required placeholder="Ej: +52 55 1234 5678" />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingresa un número de teléfono válido.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Instrucciones Especiales */}
                                    <Form.Group className="mb-3" controlId="instrucciones">
                                        <Form.Label>Instrucciones Especiales (Opcional)</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Ej: Dejar el paquete en la puerta" />
                                    </Form.Group>

                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cerrar
                                        </Button>
                                        <Button variant="primary" type="submit">
                                            Enviar Datos
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div className="select-mensajeria">
                        <div
                            className="selected-mensajeria"
                            data-default="All"
                            data-one="option-1"
                            data-two="option-2"
                            data-three="option-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                                className="arrow-mensajeria"
                            >
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                ></path>
                            </svg>
                        </div>
                        <div className="options-mensajeria">
                            <div title="all">
                                <input id="all" name="option" type="radio" checked />
                                <label className="option-mensajeria" htmlFor="all" data-txt="All"></label>
                            </div>
                            <div title="option-1">
                                <input id="option-1" name="option" type="radio" />
                                <label className="option-mensajeria" htmlFor="option-1" data-txt="option-1"></label>
                            </div>
                            <div title="option-2">
                                <input id="option-2" name="option" type="radio" />
                                <label className="option-mensajeria" htmlFor="option-2" data-txt="option-2"></label>
                            </div>
                            <div title="option-3">
                                <input id="option-3" name="option" type="radio" />
                                <label className="option-mensajeria" htmlFor="option-3" data-txt="option-3"></label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='seccion-final-compra'>
                    <p>Cantidad</p>
                    <p>2</p>
                    <p>Total compra</p>
                    <p>$40.000</p>
                </div>
                <div className='boton-compra'>
                    <button className="Btn">
                        Comprar ahora
                        <img src="/images/Iconos/credito.png" alt="" />
                    </button>
                </div>
            </section>
            <section className='sec-publicidad'>
                <div className='publicidad'>
                    <h2>Publicidad</h2>
                </div>
            </section>
        </div>

    );
};

export default Compras;