import * as React from 'react';
import "../../css/style.css";
import "../../css/modulo-usuario/Perfil.css"
import { Accordion, Button, Form, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



const Perfil = () => {
    const backendURL = "http://localhost:3000";
    // Estado para los datos del usuario
    const [formData, setFormData] = useState({
        id_usuario: "",
        nombre: "",
        apellido: "",
        email: "",
        fecha_nacimiento: "",
        genero: "",
        pais: "",
        ciudad: "",
        provincia: "",
        direccion: "",
        ubicacion: "",
        codigo_postal: "",
        imagen_perfil: "", // URL de la imagen
    });

    const [imagePreview, setImagePreview] = useState<string>("/images/Iconos/avatar.png");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // Cargar datos del usuario desde localStorage
    useEffect(() => {
        const usuarioData = localStorage.getItem("usuario");
        if (usuarioData) {
            const parsedUser = JSON.parse(usuarioData);
            setFormData(parsedUser);

            // 📌 Construir la URL de la imagen correctamente
            if (parsedUser.imagen_perfil) {
                setImagePreview(`${backendURL}/uploads/${parsedUser.imagen_perfil}`);
            }
        }
    }, []);

    // Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Manejar selección de archivo
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file); // Guarda el archivo real para enviarlo
            setImagePreview(URL.createObjectURL(file)); // Vista previa
        }
    };

    // Subir imagen y actualizar usuario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("No se encontró el token. Inicia sesión nuevamente.");
                return;
            }

            if (!formData.id_usuario) {
                alert("Error: ID de usuario no encontrado.");
                return;
            }

            let imageUrl = formData.imagen_perfil; // Mantener la imagen actual si no hay cambios

            // --- 📌 1️⃣ Subir imagen si se seleccionó una nueva ---
            if (selectedFile) {
                const formDataImage = new FormData();
                formDataImage.append("imagen", selectedFile); // 📌 Clave correcta según el backend
                
                const imageMethod = formData.imagen_perfil ? "PUT" : "POST"; // Si tiene imagen, usar PUT, si no, POST
                
                const imageResponse = await fetch(`${backendURL}/api/usuarios/${formData.id_usuario}/imagen`, {
                    method: imageMethod, // Cambia a POST si el usuario no tiene imagen previa
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    body: formDataImage
                });

                if (!imageResponse.ok) {
                    throw new Error(`Error al subir imagen: ${imageResponse.status}`);
                }

                const imageData = await imageResponse.json();
                imageUrl = imageData.imageUrl; // URL de la imagen devuelta por el backend
                console.log(imageData); // Ver qué URL está devolviendo
            }

            // --- 📌 2️⃣ Actualizar información del usuario ---
            const userData = { ...formData, imagen_perfil: imageUrl }; // Incluir la nueva imagen

            const response = await fetch(`${backendURL}/api/usuarios/${formData.id_usuario}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error(`Error al actualizar usuario: ${response.status}`);
            }

            alert("Usuario actualizado correctamente.");

            // Guardar en localStorage la nueva información
            localStorage.setItem("usuario", JSON.stringify(userData));

            // 📌 Actualizar la vista previa de la imagen
            if (imageUrl) {
                setImagePreview(`${backendURL}/uploads/${imageUrl}`);
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema al actualizar la información.");
        }
    };

    return (
        <main className='perfil-usuario tienda-virtual'>
            <div className='titulo-principal-perfil'>
                <h2>Configuración del perfil de usuario</h2>
            </div>
            <div className='seccion-perfil'>
                <div className='avatar-perfil'>
                    <Card style={{ width: '18rem' }}>
                        {/* Imagen de perfil */}
                        <Card.Img variant="top" src={imagePreview} alt="Foto de perfil" />
                        <Card.Body>
                            <h3>{formData.apellido} {formData.nombre}</h3>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Cambiar foto de perfil</Form.Label>
                                    <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Guardar cambios
                                </Button>
                            </Form>
                        </Card.Body>
                        <Link to="/Historial">Historial de productos</Link>
                    </Card>
                </div>
                <div className='acordeon-perfil'>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Datos principales</Accordion.Header>
                            <Accordion.Body>
                                <Form onSubmit={handleSubmit} className="form-perfil">
                                    <Row className="mb-3">
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Nombres</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="nombre"
                                                    value={formData.nombre}
                                                    onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
                                                    placeholder="Ingresa tus nombres"
                                                    required
                                                />
                                                <Form.Label>Apellidos</Form.Label>
                                                <Form.Control
                                                    name="apellido"
                                                    value={formData.apellido}
                                                    onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
                                                    placeholder="Ingresa tus apellidos"
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Correo electrónico</Form.Label>
                                                <Form.Control
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
                                                    placeholder="Ingresa tu email"
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Fecha de nacimiento</Form.Label>
                                                <Form.Control
                                                    name="fecha_nacimiento"
                                                    type="date"
                                                    value={formData.fecha_nacimiento}
                                                    onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Género</Form.Label>
                                                <Form.Select
                                                    name="genero"
                                                    value={formData.genero}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Selecciona tu género</option>
                                                    <option value="Femenino">Femenino</option>
                                                    <option value="Masculino">Masculino</option>
                                                    <option value="Otro">Otro</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    {/* Botón de envío dentro del mismo <Form> */}
                                    <Button variant="primary" type="submit">
                                        Guardar cambios
                                    </Button>
                                </Form>
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
                                <Form className="form-perfil" onSubmit={handleSubmit}>
                                    <div className='direcciones-perfil'>
                                        <div>
                                            <h6>País</h6>
                                            <Form.Group className="mb-3 inputForm-perfil" controlId="formGridAddress1">
                                                <Form.Control
                                                    className='input'
                                                    placeholder="Ingresa tu país"
                                                    name="pais"
                                                    value={formData.pais}
                                                    onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
                                                    required
                                                />
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <h6>Provincia</h6>
                                            <Form.Group className='inputForm-perfil' as={Col} controlId="formGridCity">
                                                <Form.Control
                                                    className='input'
                                                    name="provincia"
                                                    value={formData.provincia}
                                                    onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
                                                    required
                                                />
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <h6>Ciudad</h6>
                                            <Form.Group className='inputForm-perfil' as={Col} controlId="formGridState">
                                                <Form.Select
                                                    className='input'
                                                    name="ciudad"
                                                    value={formData.ciudad}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">Elegir</option>
                                                    <option value="Ciudad 1">Ciudad 1</option>
                                                    <option value="Ciudad 2">Ciudad 2</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <Row className="mb-3">
                                        <div className='direcciones-perfil'>
                                            <div>
                                                <h6>Dirección</h6>
                                                <Form.Group className="mb-3 inputForm-perfil" controlId="formGridAddress1">
                                                    <Form.Control
                                                        className='input'
                                                        placeholder="Dirección local"
                                                        name="direccion"
                                                        value={formData.direccion}
                                                        onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
                                                        required
                                                    />
                                                </Form.Group>
                                            </div>
                                            <div>
                                                <h6>Ubicación</h6>
                                                <Form.Group className="mb-3 inputForm-perfil" controlId="formGridAddress2">
                                                    <Form.Control
                                                        className='input'
                                                        placeholder="Lugar residencial"
                                                        name="ubicacion"
                                                        value={formData.ubicacion}
                                                        onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
                                                        required
                                                    />
                                                </Form.Group>
                                            </div>
                                            <div>
                                                <h6>Código postal</h6>
                                                <Form.Group className='inputForm-perfil' as={Col} controlId="formGridZip">
                                                    <Form.Control
                                                        className='input'
                                                        name="codigo_postal"
                                                        value={formData.codigo_postal}
                                                        onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
                                                        required
                                                    />
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