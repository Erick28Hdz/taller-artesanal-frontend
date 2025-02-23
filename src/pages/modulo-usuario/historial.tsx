import * as React from 'react';
import { Link } from "react-router-dom";
import "../../css/style.css";
import "../../css/modulo-usuario/historial.css";

const Historial = () => {
    return (
        <div className='tienda-virutal'>
            <h2>Historial de compras</h2>
            <section className='nav-reseñas'>
                <div className="tab-container">
                    <input type="radio" name="tab" id="tab1" className="tab tab--1" />
                    <label className="tab_label" htmlFor="tab1">Productos comprados</label>

                    <input type="radio" name="tab" id="tab2" className="tab tab--2" />
                    <label className="tab_label" htmlFor="tab2">Productos visitados</label>

                    <input type="radio" name="tab" id="tab3" className="tab tab--3" />
                    <label className="tab_label" htmlFor="tab3">PProductos guardados</label>

                    <div className="indicator"></div>
                </div>
            </section>
            <section>
                <div className='seccion-tarjetas-productos'>
                    <div className='tarjeta-producto-comprado'>
                        <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                        <div>
                            <h5>Nombre del producto</h5>
                            <p>Descripcón del producto</p>
                            <p>Precio del producto</p>
                            <p>Seguimiento producto</p>
                        </div>
                    </div>
                    <div className='tarjeta-producto-comprado'>
                        <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                        <div>
                            <h5>Nombre del producto</h5>
                            <p>Descripcón del producto</p>
                            <p>Precio del producto</p>
                            <p>Seguimiento producto</p>
                        </div>
                    </div>
                    <div className='tarjeta-producto-comprado'>
                        <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                        <div>
                            <h5>Nombre del producto</h5>
                            <p>Descripcón del producto</p>
                            <p>Precio del producto</p>
                            <p>Seguimiento producto</p>
                        </div>
                    </div>
                    <div className='tarjeta-producto-comprado'>
                        <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                        <div>
                            <h5>Nombre del producto</h5>
                            <p>Descripcón del producto</p>
                            <p>Precio del producto</p>
                            <p>Seguimiento producto</p>
                        </div>
                    </div>
                    <div className='tarjeta-producto-comprado'>
                        <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                        <div>
                            <h5>Nombre del producto</h5>
                            <p>Descripcón del producto</p>
                            <p>Precio del producto</p>
                            <p>Seguimiento producto</p>
                        </div>
                    </div>
                    <div className='tarjeta-producto-comprado'>
                        <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                        <div>
                            <h5>Nombre del producto</h5>
                            <p>Descripcón del producto</p>
                            <p>Precio del producto</p>
                            <p>Seguimiento producto</p>
                        </div>
                    </div>
                    <div className='tarjeta-producto-comprado'>
                        <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                        <div>
                            <h5>Nombre del producto</h5>
                            <p>Descripcón del producto</p>
                            <p>Precio del producto</p>
                            <p>Seguimiento producto</p>
                        </div>
                    </div>
                    <div className='tarjeta-producto-comprado'>
                        <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                        <div>
                            <h5>Nombre del producto</h5>
                            <p>Descripcón del producto</p>
                            <p>Precio del producto</p>
                            <p>Seguimiento producto</p>
                        </div>
                    </div>
                    <div className='tarjeta-producto-comprado'>
                        <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                        <div>
                            <h5>Nombre del producto</h5>
                            <p>Descripcón del producto</p>
                            <p>Precio del producto</p>
                            <p>Seguimiento producto</p>
                        </div>
                    </div>
                    <div className='tarjeta-producto-comprado'>
                        <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                        <div>
                            <h5>Nombre del producto</h5>
                            <p>Descripcón del producto</p>
                            <p>Precio del producto</p>
                            <p>Seguimiento producto</p>
                        </div>
                    </div>
                    <div className='tarjeta-producto-comprado'>
                        <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                        <div>
                            <h5>Nombre del producto</h5>
                            <p>Descripcón del producto</p>
                            <p>Precio del producto</p>
                            <p>Seguimiento producto</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Historial;