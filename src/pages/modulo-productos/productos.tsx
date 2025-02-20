import * as React from 'react';
import { Link } from "react-router-dom";
import "../../css/style.css";
import "../../css/modulo-productos/productos.css"

import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const Productos = () => {
    return (
        <section className='secciones-productos tienda-virtual'>
            <section className='seccion-principal'>
                <div className='sección-titulo-scroll'>
                    <div className='titulo-categorias'>
                        <h2>Nombre del producto</h2>
                    </div>
                    <div className='descripcion-categorias'>
                        <p>Descripción del producto</p>
                    </div>
                </div>
                <div className='seccion-carousel-descripción'>
                    <div className='carousel-categorias'>
                        <Carousel>
                            <Carousel.Item>
                                <img src="/images/Productos/hero/01P20.jpg" alt="Descripción de la imagen" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/images/Productos/hero/01P20.jpg" alt="Descripción de la imagen" />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/images/Productos/hero/01P20.jpg" alt="Descripción de la imagen" />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className='seccion-descripcion-producto'>
                <div className='seccion-producto-textos1'>
                    <h5>Nombre del producto</h5>
                    <div className='seccion-producto-textos'>
                        <p>Descripción del producto</p>
                        <p>Fecha de fabricación</p>
                        <p>Precio</p>
                    </div>
                    <div>
                        <div className='tallas-productos'>
                            <h6>Tallas disponibles</h6>
                            <img src="/images/Iconos/escala.png" alt="" />
                        </div>
                        <div>
                        <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver todas las tallas</a>
                                </div>
                            </Form>
                        </div>
                        <div className='botones-productos'>
                            <div data-tooltip="Price:-$20" className="button-producto">
                                <div className="button-wrapper">
                                    <div className="text">Añadir al carro</div>
                                    <span className="icon">
                                        <img src="/images/Iconos/carrito-de-compras.png" alt="" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className="Btn">
                                    Comprar ahora
                                    <img src="/images/Iconos/credito.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='seccion-producto-textos2'>
                    <div className='seccion-producto-textos'>
                        <h5>Reseñas del producto</h5>
                        <div className='reseñas-producto'>
                            <div className='rating-producto'>
                                <div>4.0</div>
                                <div className="rating">
                                    <input type="radio" id="star-1" name="star-radio" value="star-1" />
                                    <label htmlFor="star-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                    </label>
                                    <input type="radio" id="star-2" name="star-radio" value="star-1" />
                                    <label htmlFor="star-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                    </label>
                                    <input type="radio" id="star-3" name="star-radio" value="star-1" />
                                    <label htmlFor="star-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                    </label>
                                    <input type="radio" id="star-4" name="star-radio" value="star-1" />
                                    <label htmlFor="star-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                    </label>
                                    <input type="radio" id="star-5" name="star-radio" value="star-1" />
                                    <label htmlFor="star-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                    </label>
                                </div>
                                <div>20 reseñas</div>
                            </div>
                            <div className='porcentaje-clientes'>
                                80% de clientes recomiendan este producto
                            </div>
                        </div>
                        <div className="container-reseña">
                            <div className="skill-box-reseña">
                                <span className="title-reseña">Calidad</span>
                                <div className="skill-bar-reseña">
                                    <span className="skill-per-reseña html">
                                        <span className="tooltip-reseña">90%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='boton-personalizar'>
                            <button className='boton-personalización'>
                                <span>Personalizar producto</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 74 74"
                                    height="34"
                                    width="34"
                                >
                                    <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                                    <path
                                        fill="black"
                                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='seccion-otros-productos'>
                <div className="slider-container">
                    <div className="slider-track">
                        <img src="/images/Productos/productos-top/01AR20.jpg" alt="Imagen 1" />
                        <img src="/images/Productos/productos-top/01AR20.jpg" alt="Imagen 2" />
                        <img src="/images/Productos/productos-top/01AR20.jpg" alt="Imagen 3" />
                        <img src="/images/Productos/productos-top/01AR20.jpg" alt="Imagen 4" />
                        <img src="/images/Productos/productos-top/01AR20.jpg" alt="Imagen 4" />
                        <img src="/images/Productos/productos-top/01AR20.jpg" alt="Imagen 4" />
                        <img src="/images/Productos/productos-top/01AR20.jpg" alt="Imagen 4" />
                        <img src="/images/Productos/productos-top/01AR20.jpg" alt="Imagen 4" />
                        <img src="/images/Productos/productos-top/01AR20.jpg" alt="Imagen 4" />

                    </div>
                </div>
            </section>
            <section className='seccion-productos-categoria'>
                <div className="seccion-titulo-tarjetas">
                    <div className="titulo-contenedor-productos">
                        <h3>Productos similares</h3>
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
                <div className='tarjetas-productos-categoria'>
                    <div className="card-principal-productos">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="card-principal-productos">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="card-principal-productos">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="card-principal-productos">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="card-principal-productos">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="card-principal-productos">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="card-principal-productos">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="card-principal-productos">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                <Stack className="custom-pagination-stack" spacing={2}>
                    <Pagination count={10} color="primary" />
                </Stack>
            </section>
            <section className='seccion-personalizados-categoria'>
                <div className='titulo-contenedor-productos-personalizados'>
                    <h3>Productos personalizados</h3>
                </div>
                <div className='tarjetas-productos-categoria-personalizados'>
                    <div className="card-principal-productos-personalizados">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="card-principal-productos-personalizados">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="card-principal-productos-personalizados">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="card-principal-productos-personalizados">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="card-principal-productos-personalizados">
                        <div className="card-imagen-producto">

                            <div className="image-imagen-producto">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="text-imagen-producto">
                                <h6>Aretes tejidos</h6>
                                <p>$20.000</p>
                            </div>
                        </div>
                        <div>
                            <div className="heading-principal-productos">
                                <h5>Titúlo producto</h5>
                                <p>Descripción producto</p>
                            </div>
                            <div className='estrellas-corazon'>
                                <div className="rating">
                                    <input value="5" name="rating" id="star5" type="radio" />
                                    <label htmlFor="star5"></label>
                                    <input value="4" name="rating" id="star4" type="radio" />
                                    <label htmlFor="star4"></label>
                                    <input value="3" name="rating" id="star3" type="radio" />
                                    <label htmlFor="star3"></label>
                                    <input value="2" name="rating" id="star2" type="radio" />
                                    <label htmlFor="star2"></label>
                                    <input value="1" name="rating" id="star1" type="radio" />
                                    <label htmlFor="star1"></label>
                                </div>
                                <div className='corazon-producto'>
                                    <label className="ui-like">
                                        <input type="checkbox" />
                                        <div className="like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <Form className='tallas-producto'>
                                {(["radio"] as Array<"radio" | "checkbox">).map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="XS"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="M"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-5`}
                                        />
                                        <Form.Check
                                            inline
                                            label="XLL"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-6`}
                                        />
                                    </div>
                                ))}
                                <div className='heading-principal-productos'>
                                    <a href="">Ver producto</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sec-publicidad'>
                <div className='publicidad'>
                    <h2>Publicidad</h2>
                </div>
            </section>
        </section>


    );
};

export default Productos;