import React from "react";
import "../styles/panel-principal.css";
import Table from 'react-bootstrap/Table';

interface PanelPrincipalProps {
    selectedSection: string;
}

const sectionContent: Record<string, React.ReactNode> = {
    productos: (
        <section className="dashboard-cards">
            <div className="card">
                <h3>📦 Total de productos en la tienda</h3>
                <p>120</p>
            </div>
            <div><h3>📦 Productos Más Vendidos</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre del Producto</th>
                            <th>Cantidad Vendida</th>
                            <th>Ingresos Totales</th>
                            <th>Categoría</th>
                            <th>Subcategoría</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table></div>
            <div><h3>📦 Productos con Mayor Calificación</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre del Producto</th>
                            <th>Cantidad Vendida</th>
                            <th>Ingresos Totales</th>
                            <th>Categoría</th>
                            <th>Subcategoría</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table></div>
            <div><h3>📦 Productos con Bajo Stock</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre del Producto</th>
                            <th>Cantidad Vendida</th>
                            <th>Ingresos Totales</th>
                            <th>Categoría</th>
                            <th>Subcategoría</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table></div>
            <div><h3>📦 Nuevos Productos</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre del Producto</th>
                            <th>Cantidad Vendida</th>
                            <th>Ingresos Totales</th>
                            <th>Categoría</th>
                            <th>Subcategoría</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table></div>
            <div><h3>📦 Productos con Menos Ventas</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre del Producto</th>
                            <th>Cantidad Vendida</th>
                            <th>Ingresos Totales</th>
                            <th>Categoría</th>
                            <th>Subcategoría</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table></div>
            <div><h3>📦 Productos con Más Reseñas Negativas</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre del Producto</th>
                            <th>Cantidad Vendida</th>
                            <th>Ingresos Totales</th>
                            <th>Categoría</th>
                            <th>Subcategoría</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table></div>
            <div><h3>Productos con Mayor Margen de Ganancia</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre del Producto</th>
                        <th>Cantidad Vendida</th>
                        <th>Ingresos Totales</th>
                        <th>Categoría</th>
                        <th>Subcategoría</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table></div>
            <div><h3>Productos Agotados Recientemente</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre del Producto</th>
                        <th>Cantidad Vendida</th>
                        <th>Ingresos Totales</th>
                        <th>Categoría</th>
                        <th>Subcategoría</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table></div>
            <div></div>
            <div></div>
        </section>
    ),
    pedidos: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🚚 Pedidos Pendientes</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
    graficos: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>📊 Ventas Mensuales</h3>
                <p>$12,000</p>
            </div>
        </div>
    ),
    usuarios: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>👥 Usuarios Registrados</h3>
                <p>Total: 1,500</p>
            </div>
        </div>
    ),
    ganancias: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>💵 Ganancias del mes</h3>
                <p>$5,000</p>
            </div>
        </div>
    ),
};

// Componente principal del panel
const PanelPrincipal: React.FC<PanelPrincipalProps> = ({ selectedSection }) => {
    return (
        <div className="panel-principal">
            {/* 📌 Cabecera estática */}
            <h2>📌 Panel Principal</h2>
            <p>Bienvenidx al panel de administración. Aquí puedes ver un resumen general del estado de tu tienda.</p>

            {/* 📌 Contenido dinámico basado en la selección */}
            {sectionContent[selectedSection] ?? (
                <div className="dashboard-cards">
                    {Object.values(sectionContent)}
                </div>
            )}
        </div>
    );
};

export default PanelPrincipal;
