import * as React from 'react';
import { Link } from "react-router-dom";
import "../../css/style.css";
import "../../css/modulo-productos/categorias.css"

import Carousel from 'react-bootstrap/Carousel';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Form from 'react-bootstrap/Form';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Categorias = () => {
    return (
        <section className='seccion-categorias tienda-virtual'>
            <section className='seccion-principal'>
                <div className='sección-titulo-scroll'>
                    <div className='titulo-categorias'>
                        <h2>Nombre de la categoria</h2>
                    </div>
                    <div className='scroll-categorias'>
                        <div className="scroll-snap-card">
                            <div className="slide-categorias">
                                <p className="tip">Categoria 1</p>
                            </div>
                            <div className="slide-categorias">
                                <p className="tip">Categoria 2</p>
                            </div>
                            <div className="slide-categorias">
                                <p className="tip">Categoria 3</p>
                            </div>
                            <div className="slide-categorias">
                                <p className="tip">Categoria 4</p>
                            </div>
                            <div className="slide-categorias">
                                <p className="tip">Categoria 5</p>
                            </div>
                            <div className="slide-categorias">
                                <p className="tip">Categoria 6</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='seccion-carousel-descripción'>
                    <div className='descripcion-categorias'>
                        <p>Descripción de la categoria</p>
                    </div>
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
            <section className='sec-productos-top'>
                <div className='seccion-productos-top'>
                    <h4>Productos TOP de nuestra tienda</h4>
                    <div className="productos-top">
                        <div className="card-productos-top">
                            <div className="card-img-productos-top">
                                <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                            </div>
                            <div className="card-info-productos-top">
                                <h5 className="text-title-productos-top">Product title </h5>
                                <p className="text-body-productos-top">Product description and details</p>
                            </div>
                            <div className="card-footer-productos-top">
                                <span className="text-title-productos-top">$20.000</span>
                                <div className="rating">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label htmlFor="star5" title="text"></label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label htmlFor="star4" title="text"></label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label htmlFor="star3" title="text"></label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label htmlFor="star2" title="text"></label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label htmlFor="star1" title="text"></label>
                                </div>
                                <div className="card-button-productos-top">
                                    <img src="/images/Iconos/carrito-de-compras.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-productos-top">
                            <div className="card-img-productos-top">
                                <img src="/images/Productos/productos-top/02AR20-1.jpg" alt="" />
                            </div>
                            <div className="card-info-productos-top">
                                <h5 className="text-title-productos-top">Product title </h5>
                                <p className="text-body-productos-top">Product description and details</p>
                            </div>
                            <div className="card-footer-productos-top">
                                <span className="text-title-productos-top">$20.000</span>
                                <div className="rating">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label htmlFor="star5" title="text"></label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label htmlFor="star4" title="text"></label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label htmlFor="star3" title="text"></label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label htmlFor="star2" title="text"></label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label htmlFor="star1" title="text"></label>
                                </div>
                                <div className="card-button-productos-top">
                                    <img src="/images/Iconos/carrito-de-compras.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-productos-top">
                            <div className="card-img-productos-top">
                                <img src="/images/Productos/productos-top/03AR20-2.jpg" alt="" />
                            </div>
                            <div className="card-info-productos-top">
                                <h5 className="text-title-productos-top">Product title </h5>
                                <p className="text-body-productos-top">Product description and details</p>
                            </div>
                            <div className="card-footer-productos-top">
                                <span className="text-title-productos-top">$20.000</span>
                                <div className="rating">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label htmlFor="star5" title="text"></label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label htmlFor="star4" title="text"></label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label htmlFor="star3" title="text"></label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label htmlFor="star2" title="text"></label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label htmlFor="star1" title="text"></label>
                                </div>
                                <div className="card-button-productos-top">
                                    <img src="/images/Iconos/carrito-de-compras.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-productos-top">
                            <div className="card-img-productos-top">
                                <img src="/images/Productos/productos-top/04AR20-1.jpg" alt="" />
                            </div>
                            <div className="card-info-productos-top">
                                <h5 className="text-title-productos-top">Product title </h5>
                                <p className="text-body-productos-top">Product description and details</p>
                            </div>
                            <div className="card-footer-productos-top">
                                <span className="text-title-productos-top">$20.000</span>
                                <div className="rating">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label htmlFor="star5" title="text"></label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label htmlFor="star4" title="text"></label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label htmlFor="star3" title="text"></label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label htmlFor="star2" title="text"></label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label htmlFor="star1" title="text"></label>
                                </div>
                                <div className="card-button-productos-top">
                                    <img src="/images/Iconos/carrito-de-compras.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-productos-top">
                            <div className="card-img-productos-top">
                                <img src="/images/Productos/productos-top/07AR20-2.1.jpg" alt="" />
                            </div>
                            <div className="card-info-productos-top">
                                <h5 className="text-title-productos-top">Product title </h5>
                                <p className="text-body-productos-top">Product description and details</p>
                            </div>
                            <div className="card-footer-productos-top">
                                <span className="text-title-productos-top">$20.000</span>
                                <div className="rating">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label htmlFor="star5" title="text"></label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label htmlFor="star4" title="text"></label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label htmlFor="star3" title="text"></label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label htmlFor="star2" title="text"></label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label htmlFor="star1" title="text"></label>
                                </div>
                                <div className="card-button-productos-top">
                                    <img src="/images/Iconos/carrito-de-compras.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-productos-top">
                            <div className="card-img-productos-top">
                                <img src="/images/Productos/productos-top/06AR20-1.jpg" alt="" />
                            </div>
                            <div className="card-info-productos-top">
                                <h5 className="text-title-productos-top">Product title </h5>
                                <p className="text-body-productos-top">Product description and details</p>
                            </div>
                            <div className="card-footer-productos-top">
                                <span className="text-title-productos-top">$20.000</span>
                                <div className="rating">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label htmlFor="star5" title="text"></label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label htmlFor="star4" title="text"></label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label htmlFor="star3" title="text"></label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label htmlFor="star2" title="text"></label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label htmlFor="star1" title="text"></label>
                                </div>
                                <div className="card-button-productos-top">
                                    <img src="/images/Iconos/carrito-de-compras.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='seccion-navegación'>
                <div className="input-navegación">
                    <button className="value-navegación">
                        Hilo
                    </button>
                    <button className="value-navegación">
                        Madera
                    </button>
                    <button className="value-navegación">
                        Metal
                    </button>
                    <button className="value-navegación">
                        Plastico
                    </button>
                    <button className="value-navegación">
                        Porcelana
                    </button>
                </div>
            </section>
            <section className='seccion-productos-categoria'>
                <div className="seccion-titulo-tarjetas">
                    <div>
                        <h3>Productos de la categoria</h3>
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
            <section className='seccion-personalizados-categoria'></section>
            <section className='seccion-promociones-categoria'></section>
            <section className='seccion-cantidades-categoria'></section>
        </section>


    );
};

export default Categorias;