import * as React from 'react';
import { Link } from "react-router-dom";
import "../../css/style.css";
import "../../css/modulo-productos/tallas.css";
import Table from 'react-bootstrap/Table';

const Tallas = () => {
    return (
        <section className='tienda-virtual'>
            <section className='titulo-tallas'>
                <h2>Guía de tallas de los productos</h2>
            </section>
            <section className='dropdown-tallas'>
                <div className="select-mensajeria">
                    <div
                        className="selected-mensajeria"
                        data-default="All"
                        data-one="option-1"
                        data-two="option-2"
                        data-three="option-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                            className="arrow-mensajeria"
                        >
                            <path
                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                            ></path>
                        </svg>
                    </div>
                    <div className="options-mensajeria">
                        <div title="all">
                            <input id="all" name="option" type="radio" checked />
                            <label className="option-mensajeria" htmlFor="all" data-txt="All"></label>
                        </div>
                        <div title="option-1">
                            <input id="option-1" name="option" type="radio" />
                            <label className="option-mensajeria" htmlFor="option-1" data-txt="option-1"></label>
                        </div>
                        <div title="option-2">
                            <input id="option-2" name="option" type="radio" />
                            <label className="option-mensajeria" htmlFor="option-2" data-txt="option-2"></label>
                        </div>
                        <div title="option-3">
                            <input id="option-3" name="option" type="radio" />
                            <label className="option-mensajeria" htmlFor="option-3" data-txt="option-3"></label>
                        </div>
                    </div>
                </div>
            </section>
            <section className='tablas-tallas'>
                <div className='categoria-descripcion'>
                    <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                    <h5>Pulseras</h5>
                </div>
                <div className='tabla-tallas-descripcion'>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Tallas</th>
                                <th>Talla XS</th>
                                <th>Talla S</th>
                                <th>Talla M</th>
                                <th>Talla L</th>
                                <th>Talla XL</th>
                                <th>Talla XXL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Niñx</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>Femenino</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>Masculino</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </section>
        </section>
    );
};

export default Tallas;