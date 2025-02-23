import * as React from 'react';
import "../../css/style.css";
import "../../css/modulo-usuario/Perfil.css"
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";




const Perfil = () => {
    return (
        <main className='perfil-usuario tienda-virtual'>
            <div className='titulo-principal-perfil'>
                <h2>Configuración del perfil de usuario</h2>
            </div>
            <div className='seccion-perfil'>
                <div className='avatar-perfil'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/Iconos/avatar.png" />
                        <Card.Body>
                            <h3>Nombre usuario</h3>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Cambiar foto de perfil</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Guardar cambios
                            </Button>
                        </Card.Body>
                        <Link to="/Historial">Historial de productos</Link>
                    </Card>
                </div>
                <div className='acordeon-perfil'>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Datos principales</Accordion.Header>
                            <Accordion.Body>
                                <Row className="mb-3 formulario-perfil">
                                    <form className="form-perfil">
                                        <div className='input-nombres'>
                                            <div>
                                                <div className="flex-column">
                                                    <h6>Nombres: </h6>
                                                </div>
                                                <div className="inputForm-perfil">

                                                    <input placeholder="Ingresa tús nombres" className="input" type="text" required />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex-column">
                                                    <h6>Apellidos: </h6>
                                                </div>
                                                <div className="inputForm-perfil">

                                                    <input placeholder="Ingresa tús apellidos" className="input" type="text" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='input-principales'>
                                            <div>
                                                <div className="flex-column">
                                                    <h6>Correo electronico </h6>
                                                </div>
                                                <div className="inputForm-perfil">

                                                    <input placeholder="Ingresa tú email" className="input" type="email" required />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex-column">
                                                    <h6>Fecha nacimiento </h6>
                                                </div>
                                                <div className="inputForm-perfil">

                                                    <input placeholder="Ingresa tú fecha" className="input" type="date" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mydict">
                                            <div className="flex-column">
                                                <h6>Selecciona tú genero: </h6>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" name="radio" />
                                                    <span>Femenina</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="radio" />
                                                    <span>Maculino</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="radio" />
                                                    <span>Otrx</span>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </Row>
                                <Button variant="primary" type="submit">
                                    Guardar cambios
                                </Button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Seguridad personal</Accordion.Header>
                            <Accordion.Body>
                                <Row className="mb-3 formulario-perfil">
                                    <form className="form-perfil">
                                        <div className='input-nombres'>
                                            <div>
                                                <div className="flex-column">
                                                    <h6>Contraseña: </h6>
                                                </div>
                                                <div className="inputForm-perfil">

                                                    <input placeholder="Ingresa tú contraseña" className="input" type="password" required />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex-column">
                                                    <h6>Repite contraseña: </h6>
                                                </div>
                                                <div className="inputForm-perfil">

                                                    <input placeholder="Repite tú contraseña" className="input" type="password" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='input-principales'>
                                            <div>
                                                <div className="flex-column">
                                                    <h6>Cambiar contraseña </h6>
                                                </div>
                                                <div className="inputForm-perfil">

                                                    <input placeholder="Nueva contraseña" className="input" type="password" required />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex-column">
                                                    <h6>Repite contraseña </h6>
                                                </div>
                                                <div className="inputForm-perfil">

                                                    <input placeholder="Repite la contraseña" className="input" type="password" required />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Row>
                                <Button variant="primary" type="submit">
                                    Guardar cambios
                                </Button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Datos de mensajeria</Accordion.Header>
                            <Accordion.Body>
                                <Form className="form-perfil">
                                    <div className='direcciones-perfil'>
                                        <div>
                                            <h6>País</h6>
                                            <Form.Group className="mb-3 inputForm-perfil" controlId="formGridAddress1">
                                                <Form.Control className='input' placeholder="Ingresa tú país" />
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <h6>Provincia</h6>
                                            <Form.Group className='inputForm-perfil' as={Col} controlId="formGridCity">
                                                <Form.Control className='input' />
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <h6>Ciudad</h6>
                                            <Form.Group className='inputForm-perfil' as={Col} controlId="formGridState">

                                                <Form.Select className='input' defaultValue="Elegir">
                                                    <option>Elegir</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Row className="mb-3">
                                        <div className='direcciones-perfil'>

                                            <div>
                                                <h6>Dirección</h6>
                                                <Form.Group className="mb-3 inputForm-perfil" controlId="formGridAddress1">
                                                    <Form.Control className='input' placeholder="Dirección local" />
                                                </Form.Group>
                                            </div>
                                            <div>
                                                <h6>Ubicación</h6>
                                                <Form.Group className="mb-3 inputForm-perfil" controlId="formGridAddress2">
                                                    <Form.Control className='input' placeholder="Lugar residencial" />
                                                </Form.Group>
                                            </div>
                                            <div>
                                                <h6>Zip</h6>
                                                <Form.Group className='inputForm-perfil' as={Col} controlId="formGridZip"
                                                >
                                                    <Form.Control className='input' />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </Row>
                                    <Button variant="primary" type="submit">
                                        Guardar cambios
                                    </Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
            </div>
            <h3>Configurar las notificaciones</h3>
            <div className='seccion-notificaciones'>
                <Form className='notificaciones-usuario'>
                    <div className='notificaciones-tienda'>
                        <div className='card-notificacion-pedidos'>
                            <h5>1. Notificaciones de Pedidos 📦</h5>
                            <p> 🟢 Estado del pedido (Pedido confirmado, en proceso, enviado, entregado). <br />
                                🟢 Retrasos en la entrega. <br />
                                🟢 Cancelación de pedido.</p>
                        </div>
                        <div className='boton-notificacion-pedidos'>
                            <h5>Cambiar</h5>
                            <Form.Check // prettier-ignore
                                type="switch"
                                className='boton-notificacion-switch'
                                id="custom-switch"
                            />
                        </div>
                    </div>
                    <div className='notificaciones-tienda'>
                        <div className='card-notificacion-pedidos'>
                            <h5>2. Promociones y Descuentos 🎁</h5>
                            <p> 🟢 Ofertas especiales y cupones. <br />
                                🟢 Descuentos personalizados según historial de compras. <br />
                                🟢 Venta flash y liquidaciones.</p>
                        </div>
                        <div className='boton-notificacion-pedidos'>
                            <h5>Cambiar</h5>
                            <Form.Check // prettier-ignore
                                type="switch"
                                className='boton-notificacion-switch'
                                id="custom-switch"
                            />
                        </div>
                    </div>
                    <div className='notificaciones-tienda'>
                        <div className='card-notificacion-pedidos'>
                            <h5>3. Recordatorios y Recomendaciones ⏰</h5>
                            <p> 🟢 Carrito abandonado (Recordatorio de compra). <br />
                                🟢 Recomendaciones basadas en compras anteriores. <br />
                                🟢 Reposición de productos en lista de deseos.</p>
                        </div>
                        <div className='boton-notificacion-pedidos'>
                            <h5>Cambiar</h5>
                            <Form.Check // prettier-ignore
                                type="switch"
                                className='boton-notificacion-switch'
                                id="custom-switch"
                            />
                        </div>
                    </div>
                    <div className='notificaciones-tienda'>
                        <div className='card-notificacion-pedidos'>
                            <h5>4. Seguimiento de Producto 📌</h5>
                            <p> 🟢 Notificación cuando un producto vuelve a estar en stock. <br />
                                🟢 Alerta de baja disponibilidad (Quedan pocas unidades). <br />
                                🟢 Bajada de precio en productos guardados.</p>
                        </div>
                        <div className='boton-notificacion-pedidos'>
                            <h5>Cambiar</h5>
                            <Form.Check // prettier-ignore
                                type="switch"
                                className='boton-notificacion-switch'
                                id="custom-switch"
                            />
                        </div>
                    </div>
                </Form>
                <Form className='notificaciones-usuario'>
                    <div className='notificaciones-tienda'>
                        <div className='card-notificacion-pedidos'>
                            <h5>5. Mensajes y Soporte 💬</h5>
                            <p> 🟢 Respuestas a consultas y soporte. <br />
                                🟢 Confirmación de contacto con servicio al cliente. <br />
                                🟢 Encuestas de satisfacción después de una compra.</p>
                        </div>
                        <div className='boton-notificacion-pedidos'>
                            <h5>Cambiar</h5>
                            <Form.Check // prettier-ignore
                                type="switch"
                                className='boton-notificacion-switch'
                                id="custom-switch"
                            />
                        </div>
                    </div>
                    <div className='notificaciones-tienda'>
                        <div className='card-notificacion-pedidos'>
                            <h5>6. Seguridad y Cuenta 🔐</h5>
                            <p> 🟢 Notificación de actividad sospechosa en la cuenta <br />
                                🟢 Nuevas condiciones de servicio o cambios en políticas. <br />
                                🟢 Inicio de sesión desde un nuevo dispositivo.</p>
                        </div>
                        <div className='boton-notificacion-pedidos'>
                            <h5>Cambiar</h5>
                            <Form.Check // prettier-ignore
                                type="switch"
                                className='boton-notificacion-switch'
                                id="custom-switch"
                            />
                        </div>
                    </div>
                    <div className='notificaciones-tienda'>
                        <div className='card-notificacion-pedidos'>
                            <h5>7. Notificaciones de Pagos 💳</h5>
                            <p> 🟢 Confirmación de pago exitoso. <br />
                                🟢 Pago rechazado o fallido. <br />
                                🟢 Recordatorio de pago pendiente.</p>
                        </div>
                        <div className='boton-notificacion-pedidos'>
                            <h5>Cambiar</h5>
                            <Form.Check // prettier-ignore
                                type="switch"
                                className='boton-notificacion-switch'
                                id="custom-switch"
                            />
                        </div>
                    </div>
                    <div className='notificaciones-tienda'>
                        <div className='card-notificacion-pedidos'>
                            <h5>8. Notificaciones de Envío y Logística 🚚</h5>
                            <p> 🟢 Confirmación de dirección de envío. <br />
                                🟢 El paquete ha salido para entrega. <br />
                                🟢 Problema con la entrega. <br />
                                🟢 Confirmación de recepción del pedido.</p>
                        </div>
                        <div className='boton-notificacion-pedidos'>
                            <h5>Cambiar</h5>
                            <Form.Check // prettier-ignore
                                type="switch"
                                className='boton-notificacion-switch'
                                id="custom-switch"
                            />
                        </div>
                    </div>
                    <Button variant="primary" type="submit">
                        Guardar cambios
                    </Button>
                </Form>
            </div>
        </main>
    );
};

export default Perfil;