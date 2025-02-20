import * as React from 'react';
import { Link } from "react-router-dom";
import "../../css/style.css";
import "../../css/modulo-productos/promociones.css";



const Promociones = () => {
    return (
        <section className="promociones tienda-virtual">
            <div>
                <h2>Descuentos y promociones</h2>
            </div>
            <div className='seccion-filtros-promociones'>
                <div className="texto-filtros">
                    <p>🔥 <b>¡Rebeldía y arte con descuento!</b> 🎨⚡<br />
                        En nuestra tienda, el caos se convierte en creatividad y ahora también en descuentos irreverentes. <br />🖤 Aprovecha nuestras promociones exclusivas y llévate piezas únicas de arte con el sello de la anarquía. ¡Exprésate sin límites y rompe las reglas del precio! 🚀🔥</p>
                </div>
                <div className="select-filtros">
                    <div
                        className="selected-filtros"
                        data-default="Filtros"
                        data-one="option-1"
                        data-two="option-2"
                        data-three="option-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                            className="arrow-filtros"
                        >
                            <path
                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                            ></path>
                        </svg>
                    </div>
                    <div className="options-filtros">
                        <div title="all">
                            <input id="all" name="option" type="radio" checked />
                            <label className="option" htmlFor="all" data-txt="All"></label>
                        </div>
                        <div title="option-1">
                            <input id="option-1" name="option" type="radio" />
                            <label className="option-filtros" htmlFor="option-1" data-txt="option-1"></label>
                        </div>
                        <div title="option-2">
                            <input id="option-2" name="option" type="radio" />
                            <label className="option-filtros" htmlFor="option-2" data-txt="option-2"></label>
                        </div>
                        <div title="option-3">
                            <input id="option-3" name="option" type="radio" />
                            <label className="option-filtros" htmlFor="option-3" data-txt="option-3"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contenedor-principal-promociones'>
                <section className='seccion-descuentos-productos'>
                    <div className='promociones'>
                        <div className="sec-productos-pro">
                            <div className="productos-descuentos">
                                <h4>Descuentos</h4>
                                <div className="card-descuento-uno-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-descuento-dos-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-descuento-uno-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-descuento-dos-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='promociones'>
                        <div className="sec-productos-pro">
                            <div className="productos-descuentos">
                                <h4>Descuentos</h4>
                                <div className="card-descuento-uno-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-descuento-dos-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-descuento-uno-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-descuento-dos-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='seccion-promociones-productos'>
                    <div className='promociones'>
                        <div className="sec-productos-pro">
                            <div className="productos-descuentos">
                                <h4>Promociones</h4>
                                <div className="card-descuento-uno-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-descuento-dos-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-descuento-uno-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-descuento-dos-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='promociones'>
                        <div className="sec-productos-pro">
                            <div className="productos-descuentos">
                                <h4>Promociones</h4>
                                <div className="card-descuento-uno-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-descuento-dos-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-descuento-uno-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-descuento-dos-pro">
                                    <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                                    <div className="card-content">
                                        <div className="category">Illustration</div>
                                        <div className="heading">
                                            A heading that must span over two lines
                                            <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='publicidad'>
                <h2>Publicidad</h2>
            </div>
        </section>

    );
};

export default Promociones;