import * as React from 'react';
import { Link } from "react-router-dom";
import "../../css/style.css";
import "../../css/modulo-compras/envios.css";


const Envios = () => {
    return (
        <div className='tienda-virutal'>
            <section>
                <h2>Seguimiento de envios</h2>
            </section>
            <section className='nav-reseñas'>
                <div className="tab-container">
                    <input type="radio" name="tab" id="tab1" className="tab tab--1" />
                    <label className="tab_label" htmlFor="tab1">Productos enviados</label>

                    <input type="radio" name="tab" id="tab2" className="tab tab--2" />
                    <label className="tab_label" htmlFor="tab2">Productos entregados</label>

                    <input type="radio" name="tab" id="tab3" className="tab tab--3" />
                    <label className="tab_label" htmlFor="tab3">PProductos devueltos</label>

                    <div className="indicator"></div>
                </div>
            </section>
            <section className='seccion-envios-principales'>
                <div className='productos-enviados'>
                    <div className='titulo-productos-enviados'>
                        <img src="/images/Iconos/el-tiempo-de-entrega.png" alt="" />
                        <h3>Productos enviados</h3>
                    </div>
                    <div className='productos-enviados-seccion'>
                        <div className='contenido-producto-enviado'>
                            <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            <div>
                                <h5>Nombre del producto</h5>
                                <p>Descripcón del producto</p>
                                <p>Seguimiento producto</p>
                            </div>
                        </div>
                        <div className='contenido-producto-enviado'>
                            <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            <div>
                                <h5>Nombre del producto</h5>
                                <p>Descripcón del producto</p>
                                <p>Seguimiento producto</p>
                            </div>
                        </div>
                        <div className='contenido-producto-enviado'>
                            <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            <div>
                                <h5>Nombre del producto</h5>
                                <p>Descripcón del producto</p>
                                <p>Seguimiento producto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Link to="/tallas">Historial de productos</Link>
            </div>
            <div className='publicidad'>
                <h2>Publicidad</h2>
            </div>
        </div>
    );
};

export default Envios;