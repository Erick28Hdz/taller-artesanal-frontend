import React, { useEffect, useState } from "react";
import "../../../css/style.css";
import "../styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
    const [nombreUsuario, setNombreUsuario] = useState("Invitadx");
    const navigate = useNavigate();

    useEffect(() => {
        obtenerUsuario();
    }, []);

    // Función para obtener el usuario desde el backend
    const obtenerUsuario = async () => {
        const token = localStorage.getItem("token");
        if (!token) return; 
    
        try {
            const response = await fetch("http://localhost:3000/api/perfil", { // <== Usa /api/perfil
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
    
            if (!response.ok) {
                throw new Error("Error al obtener usuario");
            }
    
            const usuario = await response.json();
            console.log("Respuesta del backend:", usuario); // <== Verifica en la consola
    
            localStorage.setItem("usuario", JSON.stringify(usuario));
            setNombreUsuario(usuario.nombre || "Invitadx"); 
        } catch (error) {
            console.error("Error al obtener usuario:", error);
            localStorage.removeItem("usuario");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        setNombreUsuario("Invitadx"); // Limpia el estado
        navigate("/");
    };

    return (
        <section className="navbar-principal">
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <div className="seccion-nav">
                        <div className="logo-nav">
                            <Navbar.Brand href="/">
                                <img src="/images/Logos/ArteGestion-1.png" alt="" />
                            </Navbar.Brand>
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
                                <Link to="/Categorias" className="boton-navbar">Categorías</Link>
                            </div>
                            <div className="titulos-opc-nav">
                                <img src="/images/Iconos/producto.png" alt="" />
                                <Link to="/Productos" className="boton-navbar">Productos</Link>
                            </div>
                            <div className="titulos-opc-nav">
                                <img src="/images/Iconos/promocion.png" alt="" />
                                <Link to="/Promociones" className="boton-navbar">Promociones</Link>
                            </div>
                            <div className="titulos-opc-nav">
                                <img src="/images/Iconos/resena.png" alt="" />
                                <Link to="/Reseñas" className="boton-navbar">Reseñas</Link>
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
                                    title={
                                        <span>
                                            <img
                                                src="/images/Iconos/avatar.png"
                                                alt="Mi perfil"
                                                style={{ width: '30px', height: '30px' }}
                                            />
                                        </span>
                                    }
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item disabled>
                                        {nombreUsuario !== "Invitadx" ? `Hola, ${nombreUsuario}` : "No has iniciado sesión"}
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    {nombreUsuario !== "Invitadx" ? (
                                        <>
                                            <NavDropdown.Item href="#action/3.1">Notificación<img src="/images/Iconos/notificacion.png" alt="" />
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/Compras">Compras<img src="/images/Iconos/carrito-de-compras.png" alt="" />
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Envíos<img src="/images/Iconos/envio.png" alt="" />
                                            </NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/Perfil">Configuración<img src="/images/Iconos/configuracion.png" alt="" /></NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item onClick={handleLogout}>
                                                Cerrar sesión <img src="/images/Iconos/cerrar-sesion.png" alt="" />
                                            </NavDropdown.Item>
                                        </>
                                    ) : (
                                        <NavDropdown.Item as={Link} to="/login">
                                            Iniciar sesión <img src="/images/Iconos/iniciar-sesion.png" alt="" />
                                        </NavDropdown.Item>
                                    )}    
                                </NavDropdown>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default NavbarComponent;
