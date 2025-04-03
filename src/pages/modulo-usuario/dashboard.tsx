import React, { useState } from "react";
import "../../css/style.css";
import "../../css/modulo-usuario/dashboard.css";
import Dropdown from "react-bootstrap/Dropdown";
import PanelPrincipal from "../../modules/admin/components/panel-principal";
import GestionCategorias from "../../modules/admin/components/gestion-categorias";
import GestionProductos from "../../modules/admin/components/gestion-productos";
import GestionPedidos from "../../modules/admin/components/gestion-pedidos";
import GestionUsuarios from "../../modules/admin/components/gestion-usuarios";
import GestionVendedores from "../../modules/admin/components/gestion-vendedores";
import GestionEstadisticas from "../../modules/admin/components/estadisticas";
import GestionOfertas from "../../modules/admin/components/ofertas-descuentos";
import GestionSoporte from "../../modules/admin/components/soporte";
import Configuracion from "../../modules/admin/components/configuracion";
import Marketing from "../../modules/admin/components/marketing";

// Definir tipos para las secciones
type SectionKey = "productos" | "pedidos" | "graficos" | "usuarios" | "ganancias";
type CategoriaKey = "categorias" | "nuevacategoria" | "editarcategoria" | "eliminarcategoria";
type ProductoKey = "lista" | "nuevo" | "editar" | "eliminar" | "buscar";
type PedidoKey = "pedidos" | "estadopedido" | "detallepedido" | "cancelarpedido";
type UsuarioKey = "listaUsuarios" | "asignarRoles" | "detallesUsuario" | "editarUsuario" | "eliminarUsuario";
type VendedorKey = "listaVendedores" | "detallesVendedores" | "productosVendedores" | "pagosVendedores" | "rendimiendoVendedor";
type EstadisticasKey = "ventasProductos" | "productosVendidos" | "usuariosActivos" | "traficoTienda";
type OfertaKey = "crearCupon" | "configurarPromocion";
type SoporteKey = "verConsultas" | "gestionarTickets";
type ConfiguracionKey = "configuracionpagos" | "configuracionenvios" | "configuracionidiomas" | "configuracionseguridad";
type MarketingKey = "marketingoptimizacion" | "marketingredes" | "marketingautomatizacion" | "marketing";

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState<SectionKey | null>(null);
  const [selectedCategoria, setSelectedCategoria] = useState<CategoriaKey | null>(null);
  const [selectedProducto, setSelectedProducto] = useState<ProductoKey | null>(null);
  const [selectedPedido, setSelectedPedido] = useState<PedidoKey | null>(null);
  const [selectedUsuario, setSelectedUsuario] = useState<UsuarioKey | null>(null);
  const [selectedVendedor, setSelectedVendedor] = useState<VendedorKey | null>(null);
  const [selectedEstadisticas, setSelectedEstadisticas] = useState<EstadisticasKey | null>(null);
  const [selectedOfertas, setSelectedOfertas] = useState<OfertaKey | null>(null);
  const [selectedSoporte, setSelectedSoporte] = useState<SoporteKey | null>(null);
  const [selectedConfiguracion, setSelectedConfiguracion] = useState<ConfiguracionKey | null>(null);
  const [selectedMarketing, setSelectedMarketing] = useState<MarketingKey | null>(null);

  // Función para manejar la selección de secciones principales
  const handleSelectSection = (key: SectionKey) => {
    setSelectedSection(key);
    setSelectedCategoria(null);
    setSelectedProducto(null);
    setSelectedPedido(null);
    setSelectedUsuario(null);
    setSelectedVendedor(null);
    setSelectedEstadisticas(null);
    setSelectedOfertas(null);
    setSelectedSoporte(null);
    setSelectedConfiguracion(null);
    setSelectedMarketing(null);
  };

  // Función para manejar la selección de categorías
  const handleSelectCategoria = (key: CategoriaKey) => {
    setSelectedCategoria(key);
    setSelectedSection(null);
    setSelectedProducto(null);
    setSelectedPedido(null);
    setSelectedUsuario(null);
    setSelectedVendedor(null);
    setSelectedEstadisticas(null);
    setSelectedOfertas(null);
    setSelectedSoporte(null);
    setSelectedConfiguracion(null);
    setSelectedMarketing(null);
  };

  // Función para manejar la selección de productos
  const handleSelectProducto = (key: ProductoKey) => {
    setSelectedProducto(key);
    setSelectedSection(null);
    setSelectedCategoria(null);
    setSelectedPedido(null);
    setSelectedUsuario(null);
    setSelectedVendedor(null);
    setSelectedEstadisticas(null);
    setSelectedOfertas(null);
    setSelectedSoporte(null);
    setSelectedConfiguracion(null);
    setSelectedMarketing(null);
  };

  // Función para manejar la selección de pedidos
  const handleSelectPedido = (key: PedidoKey) => {
    setSelectedPedido(key);
    setSelectedSection(null);
    setSelectedCategoria(null);
    setSelectedProducto(null);
    setSelectedUsuario(null);
    setSelectedVendedor(null);
    setSelectedEstadisticas(null);
    setSelectedOfertas(null);
    setSelectedSoporte(null);
    setSelectedConfiguracion(null);
    setSelectedMarketing(null);
  };

  // Función para manejar la selección de usuarios
  const handleSelectUsuario = (key: UsuarioKey) => {
    setSelectedUsuario(key);
    setSelectedSection(null);
    setSelectedCategoria(null);
    setSelectedProducto(null);
    setSelectedUsuario(null);
    setSelectedVendedor(null);
    setSelectedEstadisticas(null);
    setSelectedOfertas(null);
    setSelectedSoporte(null);
    setSelectedConfiguracion(null);
    setSelectedMarketing(null);
  };

  // Función para manejar la selección de vendedores
  const handleSelectVendedor = (key: VendedorKey) => {
    setSelectedVendedor(key);
    setSelectedSection(null);
    setSelectedCategoria(null);
    setSelectedProducto(null);
    setSelectedPedido(null);
    setSelectedUsuario(null);
    setSelectedEstadisticas(null);
    setSelectedOfertas(null);
    setSelectedSoporte(null);
    setSelectedConfiguracion(null);
    setSelectedMarketing(null);
  };

  // Función para manejar la selección de estadisticas
  const handleSelectEstadisticas = (key: EstadisticasKey) => {
    setSelectedEstadisticas(key);
    setSelectedSection(null);
    setSelectedCategoria(null);
    setSelectedProducto(null);
    setSelectedPedido(null);
    setSelectedUsuario(null);
    setSelectedVendedor(null);
    setSelectedOfertas(null);
    setSelectedSoporte(null);
    setSelectedConfiguracion(null);
    setSelectedMarketing(null);
  };

  // Función para manejar la selección de ofertas
  const handleSelectOfertas = (key: OfertaKey) => {
    setSelectedOfertas(key);
    setSelectedSection(null);
    setSelectedCategoria(null);
    setSelectedProducto(null);
    setSelectedPedido(null);
    setSelectedUsuario(null);
    setSelectedVendedor(null);
    setSelectedEstadisticas(null);
    setSelectedSoporte(null);
    setSelectedConfiguracion(null);
    setSelectedMarketing(null);
  };

  // Función para manejar la selección de estadisticas
  const handleSelectSoporte = (key: SoporteKey) => {
    setSelectedSoporte(key);
    setSelectedSection(null);
    setSelectedCategoria(null);
    setSelectedProducto(null);
    setSelectedPedido(null);
    setSelectedUsuario(null);
    setSelectedVendedor(null);
    setSelectedEstadisticas(null);
    setSelectedOfertas(null);
    setSelectedConfiguracion(null);
    setSelectedMarketing(null);
  };

  // Función para manejar la selección de configuraciones
  const handleSelectConfiguracion = (key: ConfiguracionKey) => {
    setSelectedConfiguracion(key);
    setSelectedSection(null);
    setSelectedCategoria(null);
    setSelectedProducto(null);
    setSelectedPedido(null);
    setSelectedUsuario(null);
    setSelectedVendedor(null);
    setSelectedEstadisticas(null);
    setSelectedOfertas(null);
    setSelectedSoporte(null);
    setSelectedMarketing(null);
  };

  // Función para manejar la selección de categorías
  const handleSelectMarketing = (key: MarketingKey) => {
    setSelectedMarketing(key);
    setSelectedSection(null);
    setSelectedProducto(null);
    setSelectedPedido(null);
    setSelectedUsuario(null);
    setSelectedVendedor(null);
    setSelectedEstadisticas(null);
    setSelectedOfertas(null);
    setSelectedSoporte(null);
    setSelectedConfiguracion(null);
    setSelectedCategoria(null);
  };
  
  return (
    <div className="tienda-virtual dashboard-container">
      <section className="panel-control">
        <div>
          <h1>Nombre perfil</h1>
          <h2>Cargo usuario</h2>
        </div>

        {/* Menús desplegables */}
        <div className="panel-dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-secciones">
              📌 Panel Principal
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {["productos", "pedidos", "graficos", "usuarios", "ganancias"].map((key) => (
                <Dropdown.Item key={key} onClick={() => handleSelectSection(key as SectionKey)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-categorias">
              📂 Gestión de Categorías
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {["categorias", "nuevacategoria", "editarcategoria", "eliminarcategoria"].map((key) => (
                <Dropdown.Item key={key} onClick={() => handleSelectCategoria(key as CategoriaKey)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-productos">
              🛒 Gestión de Productos
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {["lista", "nuevo", "editar", "eliminar", "buscar"].map((key) => (
                <Dropdown.Item key={key} onClick={() => handleSelectProducto(key as ProductoKey)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-pedidos">
              📦 Gestión de Pedidos
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {["pedidos", "estadopedido", "detallepedido", "cancelarpedido"].map((key) => (
                <Dropdown.Item key={key} onClick={() => handleSelectPedido(key as PedidoKey)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-usuarios">
              👥 Gestión de Usuarios
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {["listaUsuarios", "asignarRoles", "detallesUsuario", "editarUsuario", "eliminarUsuario"].map((key) => (
                <Dropdown.Item key={key} onClick={() => handleSelectUsuario(key as UsuarioKey)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-vendedores">
              🏪 Gestión de Vendedores
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {["listaVendedores", "detallesVendedores", "productosVendedores", "pagosVendedores", "rendimiendoVendedor"].map((key) => (
                <Dropdown.Item key={key} onClick={() => handleSelectVendedor(key as VendedorKey)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success">📊 Estadísticas</Dropdown.Toggle>
            <Dropdown.Menu>
              {["ventasProductos", "productosVendidos", "usuariosActivos", "traficoTienda"].map((key) => (
                <Dropdown.Item key={key} onClick={() => handleSelectEstadisticas(key as EstadisticasKey)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success">🏷️ Ofertas</Dropdown.Toggle>
            <Dropdown.Menu>
              {["crearCupon", "configurarPromocion"].map((key) => (                 <Dropdown.Item key={key} onClick={() => handleSelectOfertas(key as OfertaKey)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success">📩 Soporte</Dropdown.Toggle>
            <Dropdown.Menu>
              {["verConsultas", "gestionarTickets"].map((key) => (                 <Dropdown.Item key={key} onClick={() => handleSelectSoporte(key as SoporteKey)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success">⚙️ Configuración</Dropdown.Toggle>
            <Dropdown.Menu>
              {["configuracionpagos", "configuracionenvios", "configuracionidiomas", "configuracionseguridad"].map((key) => (                 <Dropdown.Item key={key} onClick={() => handleSelectConfiguracion(key as ConfiguracionKey)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success">🔥 Marketing</Dropdown.Toggle>
            <Dropdown.Menu>
              {["marketingoptimizacion", "marketingredes", "marketingautomatizacion", "marketing"].map((key) => (                 <Dropdown.Item key={key} onClick={() => handleSelectMarketing(key as MarketingKey)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </section>

      {/* Contenido dinámico */}
      <section className="contenido-panel">
        {selectedSection ? (
          <PanelPrincipal selectedSection={selectedSection} />
        ) : selectedCategoria ? (
          <GestionCategorias selectedCategoria={selectedCategoria} />
        ) : selectedProducto ? (
          <GestionProductos selectedProducto={selectedProducto} />
        ) : selectedPedido ? (
          <GestionPedidos selectedPedido={selectedPedido} />
        ) : selectedUsuario ? (
          <GestionUsuarios selectedUsuario={selectedUsuario} />
        ) : selectedVendedor ? (
          <GestionVendedores selectedVendedor={selectedVendedor} />
        ) : selectedEstadisticas ? (
          <GestionEstadisticas selectedEstadisticas={selectedEstadisticas} />
        ) : selectedOfertas ? (
          <GestionOfertas selectedOfertas={selectedOfertas} />
        ) : selectedSoporte ? (
          <GestionSoporte selectedSoporte={selectedSoporte} />
        ) : selectedConfiguracion ? (
          <Configuracion selectedConfiguracion={selectedConfiguracion} />
        ) : selectedMarketing ? (
          <Marketing selectedMarketing={selectedMarketing} />
        ) : (
          <div>
            <h3>Bienvenido al Panel de Control</h3>
            <p>Selecciona una opción del menú para comenzar.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
