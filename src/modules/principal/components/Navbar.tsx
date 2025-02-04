import React from "react";
import "../../../css/style.css";
import "../styles/Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <section className="navbar-principal">
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <div className="seccion-nav">
                        <div className="logo-nav">
                            <Navbar.Brand href="/"><img src="/images/Logos/ArteGestion-1.png" alt="" /></Navbar.Brand>
                        </div>
                        <div className="titulo-nav">
                            <h2>Arte Gestión</h2>
                            <h1>Taller Artesanal</h1>
                        </div>
                    </div>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                        <div className="opciones-nav">
                            <div className="titulos-opc-nav">
                                <img src="/images/Iconos/catalogo.png" alt="" />
                                <button className="boton-navbar">Catálogo PDF</button>
                            </div>
                            <div className="titulos-opc-nav">
                                <img src="/images/Iconos/categoria.png" alt="" />
                                <button className="boton-navbar">Categorías</button>
                            </div>
                            <div className="titulos-opc-nav">
                                <img src="/images/Iconos/producto.png" alt="" />
                                <button className="boton-navbar">Productos</button>
                            </div>
                            <div className="titulos-opc-nav">
                                <img src="/images/Iconos/promocion.png" alt="" />
                                <button className="boton-navbar">Promociones</button>
                            </div>
                            <div className="titulos-opc-nav">
                                <img src="/images/Iconos/resena.png" alt="" />
                                <button className="boton-navbar">Reseñas</button>
                            </div>
                            <div className="titulos-opc-nav">
                                <img src="/images/Iconos/informacion.png" alt="" />
                                <Link to="/about" className="boton-navbar">Sobre nosotrxs</Link>
                            </div>

                        </div>
                        <div className="perfil-nav">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title={<img src="/images/Iconos/avatar.png" alt="Mi perfil" style={{ width: '30px', height: '30px' }} />}
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#action/3.1">Notificación<img src="/images/Iconos/notificacion.png" alt="" />
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Compras<img src="/images/Iconos/carrito-de-compras.png" alt="" />
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Envios<img src="/images/Iconos/envio.png" alt="" />
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/Perfil">Configuración<img src="/images/Iconos/configuracion.png" alt="" /></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/Login">
                                        Cerrar sesión<img src="/images/Iconos/cerrar-sesion.png" alt="" />
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>

    );
};

export default navbar;