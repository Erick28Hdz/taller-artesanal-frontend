import * as React from 'react';
import "../../css/style.css";
import "../../css/modulo-usuario/dashboard.css";
import Dropdown from 'react-bootstrap/Dropdown';

const Dashboard = () => {
    return (
        <div>
            <section className='panel-control'>
                <div>
                    <h1>Nombre perfil</h1>
                    <h2>Cargo usuario</h2>
                </div>
                <div>
                    <h3>Panel de Control</h3>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            📌 Panel Principal
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/productos">
                                📦 Total de productos en la tienda
                            </Dropdown.Item>
                            <Dropdown.Item href="#/pedidos">
                                🚚 Pedidos pendientes / entregados
                            </Dropdown.Item>
                            <Dropdown.Item href="#/graficos">
                                📊 Gráficos de ventas y tendencias
                            </Dropdown.Item>
                            <Dropdown.Item href="#/usuarios">
                                👥 Usuarios registrados
                            </Dropdown.Item>
                            <Dropdown.Item href="#/ganancias">
                                💵 Ganancias del mes
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            📂 Gestión de Categorías
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/categorias/nueva">
                                ➕ Crear nueva categoría
                            </Dropdown.Item>
                            <Dropdown.Item href="#/categorias/editar">
                                ✏️ Editar categoría existente
                            </Dropdown.Item>
                            <Dropdown.Item href="#/categorias/eliminar">
                                ❌ Eliminar categoría
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            🛒 Gestión de Productos
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/productos/lista">
                                📋 Ver lista de productos
                            </Dropdown.Item>
                            <Dropdown.Item href="#/productos/nuevo">
                                ➕ Agregar nuevo producto
                            </Dropdown.Item>
                            <Dropdown.Item href="#/productos/editar">
                                ✏️ Editar producto existente
                            </Dropdown.Item>
                            <Dropdown.Item href="#/productos/eliminar">
                                ❌ Eliminar producto
                            </Dropdown.Item>
                            <Dropdown.Item href="#/productos/buscar">
                                🔍 Filtrar y buscar productos
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            📦 Gestión de Pedidos
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/pedidos/recientes">
                                📜 Ver pedidos recientes
                            </Dropdown.Item>
                            <Dropdown.Item href="#/pedidos/actualizar">
                                🔄 Actualizar estado del pedido
                            </Dropdown.Item>
                            <Dropdown.Item href="#/pedidos/detalles">
                                📑 Ver detalles del pedido
                            </Dropdown.Item>
                            <Dropdown.Item href="#/pedidos/cancelar">
                                ❌ Cancelar o reembolsar pedido
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            👥 Gestión de Usuarios y Roles
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/usuarios/lista">
                                📋 Ver lista de usuarios
                            </Dropdown.Item>
                            <Dropdown.Item href="#/usuarios/asignar-roles">
                                🎭 Asignar roles (Administrador, Vendedor, Cliente, etc.)
                            </Dropdown.Item>
                            <Dropdown.Item href="#/usuarios/editar">
                                ✏️ Editar información de los usuarios
                            </Dropdown.Item>
                            <Dropdown.Item href="#/usuarios/suspender">
                                🚫 Suspender o eliminar usuario
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            🛍️ Gestión de Vendedores
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/vendedores/aprobar">
                                ✔️ Aprobar o rechazar vendedor
                            </Dropdown.Item>
                            <Dropdown.Item href="#/vendedores/rendimiento">
                                📊 Ver rendimiento del vendedor
                            </Dropdown.Item>
                            <Dropdown.Item href="#/vendedores/productos">
                                📦 Ver productos del vendedor
                            </Dropdown.Item>
                            <Dropdown.Item href="#/vendedores/comisiones">
                                💰 Modificar comisiones y pagos
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            📈 Estadísticas y Reportes
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/reportes/ventas">
                                📅 Ventas por día/mes/año
                            </Dropdown.Item>
                            <Dropdown.Item href="#/reportes/productos-mas-vendidos">
                                🏆 Productos más vendidos
                            </Dropdown.Item>
                            <Dropdown.Item href="#/reportes/usuarios-activos">
                                🔥 Usuarios más activos
                            </Dropdown.Item>
                            <Dropdown.Item href="#/reportes/trafico">
                                🌍 Tráfico de la tienda
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            🏷️ Gestión de Ofertas y Descuentos
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/descuentos/crear-cupon">
                                ➕ Crear cupones de descuento
                            </Dropdown.Item>
                            <Dropdown.Item href="#/descuentos/promociones">
                                📢 Configurar promociones especiales
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            📩 Soporte y Atención al Cliente
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/soporte/mensajes">
                                💬 Ver consultas y mensajes de clientes
                            </Dropdown.Item>
                            <Dropdown.Item href="#/soporte/tickets">
                                🔧 Gestionar tickets de soporte
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            ⚙️ Configuración de la Tienda
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/configuracion/pago">
                                💳 Configurar métodos de pago
                            </Dropdown.Item>
                            <Dropdown.Item href="#/configuracion/envios">
                                🚚 Configurar envíos y costos
                            </Dropdown.Item>
                            <Dropdown.Item href="#/configuracion/idioma-moneda">
                                🌍 Configurar moneda e idioma
                            </Dropdown.Item>
                            <Dropdown.Item href="#/configuracion/seguridad">
                                🔐 Seguridad y accesos
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            🔥 Bonus: Opciones Avanzadas
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/opciones-avanzadas/seo">
                                📈 SEO & Optimización (meta tags, keywords)
                            </Dropdown.Item>
                            <Dropdown.Item href="#/opciones-avanzadas/marketing">
                                📬 Marketing y Newsletter (envío de correos)
                            </Dropdown.Item>
                            <Dropdown.Item href="#/opciones-avanzadas/redes-sociales">
                                📲 Integración con redes sociales (Instagram, Facebook)
                            </Dropdown.Item>
                            <Dropdown.Item href="#/opciones-avanzadas/automatizacion">
                                🤖 Automatización de procesos (alertas, reportes)
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </section >
            <section>

            </section>
        </div >
    )
}

export default Dashboard;