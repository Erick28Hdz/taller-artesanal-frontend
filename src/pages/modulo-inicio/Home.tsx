import * as React from 'react';
import "../../css/style.css";
import "../../css/modulo-inicio/Home.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className='main-home tienda-virtual'>
      <h2>Bienvenidxs a una nueva forma de comprar.</h2>
      <div className='botones-indice'>
        <div className="dropdown">
          <label className="popup">
            <input type="checkbox" />
            <div className="burger">
              <img src="/images/Iconos/producto.png" alt="" />
            </div>
            <nav className="popup-window">
              <h6>Selección de categorias</h6>
              <ul>
                <li>
                  <button>
                    <span>Categoria 1</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>Categoria 2</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>Categoria 3</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>Categoria 4</span>
                  </button>
                </li>
              </ul>
            </nav>
          </label>
        </div>
        <div>
          <p>Descubre un mundo donde cada pieza cuenta una historia y cada compra genera un impacto.</p>
        </div>
        <div className="container-boton-busqueda">
          <input defaultChecked className="checkbox-boton-busqueda" type="checkbox" />
          <div className="mainbox-boton-busqueda">
            <div className="iconContainer-boton-busqueda">
              <img className="search_icon-boton-busqueda" src="images/Iconos/buscar.png" alt="" />
            </div>
            <input className="search_input-boton-busqueda" placeholder="Buscar" type="text" />
          </div>
        </div>

      </div>
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
      <div className='mensaje-llamativo'>
        <h5><i>"Cada pieza es una historia, cada compra es un impacto."</i></h5>
        <p>
          En nuestra tienda no solo adquieres productos; abrazas historias, apoyas manos creadoras y te conviertes en parte de un movimiento de cambio. Cada pieza es un testimonio de independencia, de lucha y de pasión.
          <br />
          Creemos en el arte como herramienta de revolución social y en la autosuficiencia como un camino hacia la libertad. Cuando compras aquí, no solo obtienes algo hermoso, sino que contribuyes a un modelo de comercio justo y sostenible.
          <br />
          <b>Compra diferente, compra con impacto.</b>
        </p>
      </div>
      <section className='sec-segunda-home'>
        <h3>Nuestros productos artesanales</h3>
        <div className='tarjetas-productos'>
          <div className='sec-productos-pers'>
            <h4>Productos personalizados</h4>
            <div className="productos-personalizados">
              <div className="card-productos-personalizados">
                <div className="card-image-container-productos-personalizados">
                  <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                </div>
                <p className="card-title-productos-personalizados">Card Title</p>
                <p className="card-des-productos-personalizados">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                  natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                  suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                  blanditiis.
                </p>
              </div>
              <div className="card-productos-personalizados">
                <div className="card-image-container-productos-personalizados">
                  <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                </div>
                <p className="card-title-productos-personalizados">Card Title</p>
                <p className="card-des-productos-personalizados">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                  natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                  suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                  blanditiis.
                </p>
              </div>
              <div className="card-productos-personalizados">
                <div className="card-image-container-productos-personalizados">
                  <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                </div>
                <p className="card-title-productos-personalizados">Card Title</p>
                <p className="card-des-productos-personalizados">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                  natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                  suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                  blanditiis.
                </p>
              </div>
              <div className="card-productos-personalizados">
                <div className="card-image-container-productos-personalizados">
                  <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                </div>
                <p className="card-title-productos-personalizados">Card Title</p>
                <p className="card-des-productos-personalizados">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                  natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                  suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                  blanditiis.
                </p>
              </div>
              <div className="card-productos-personalizados">
                <div className="card-image-container-productos-personalizados">
                  <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                </div>
                <p className="card-title-productos-personalizados">Card Title</p>
                <p className="card-des-productos-personalizados">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                  natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                  suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                  blanditiis.
                </p>
              </div>
              <div className="card-productos-personalizados">
                <div className="card-image-container-productos-personalizados">
                  <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                </div>
                <p className="card-title-productos-personalizados">Card Title</p>
                <p className="card-des-productos-personalizados">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                  natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                  suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                  blanditiis.
                </p>
              </div>
            </div>
            <button className='boton-enlaces'>
              <a href=""><i>Ver nuestro catalogo</i></a>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-icon"
                >
                  <path
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className='sec-productos-unico'>
            <h4>Productos únicos</h4>
            <div className="productos-unicos">
              <div className="card-productos-unicos">
                <div className="card-image-container-productos-personalizados">
                  <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                </div>
                <p className="card-title-productos-personalizados">Card Title</p>
                <p className="card-des-productos-personalizados">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                  natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                  suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                  blanditiis.
                </p>
              </div>
              <div className="card-productos-unicos">
                <div className="card-image-container-productos-personalizados">
                  <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                </div>
                <p className="card-title-productos-personalizados">Card Title</p>
                <p className="card-des-productos-personalizados">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                  natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                  suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                  blanditiis.
                </p>
              </div>
              <div className="card-productos-unicos">
                <div className="card-image-container-productos-personalizados">
                  <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                </div>
                <p className="card-title-productos-personalizados">Card Title</p>
                <p className="card-des-productos-personalizados">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                  natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                  suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                  blanditiis.
                </p>
              </div>
              <div className="card-productos-unicos">
                <div className="card-image-container-productos-personalizados">
                  <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                </div>
                <p className="card-title-productos-personalizados">Card Title</p>
                <p className="card-des-productos-personalizados">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                  natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                  suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                  blanditiis.
                </p>
              </div>
              <div className="card-productos-unicos">
                <div className="card-image-container-productos-personalizados">
                  <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                </div>
                <p className="card-title-productos-personalizados">Card Title</p>
                <p className="card-des-productos-personalizados">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                  natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                  suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                  blanditiis.
                </p>
              </div>
              <div className="card-productos-unicos">
                <div className="card-image-container-productos-personalizados">
                  <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
                </div>
                <p className="card-title-productos-personalizados">Card Title</p>
                <p className="card-des-productos-personalizados">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                  natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                  suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                  blanditiis.
                </p>
              </div>
            </div>
            <button className='boton-enlaces'>
              <a href=""><i>Ver nuestro catalogo</i></a>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-icon"
                >
                  <path
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      <div className='mensaje-llamativo2'>
        <p>
          En nuestra tienda, no solo encuentras productos, sino arte con alma, diseño con propósito y creatividad que transforma vidas. Explora nuestras colecciones y lleva contigo algo más que un objeto: <b>una historia, un cambio, una revolución artesanal.</b>
          <br />
          🛍️ Explora ahora y encuentra tu pieza única.
        </p>
        <button className="learn-more-mensaje-llamativo2">
          <span className="circle-mensaje-llamativo2" aria-hidden="true">
            <span className="icon arrow-mensaje-llamativo2"></span>
          </span>
          <span className="button-text-mensaje-llamativo2">ver productos</span>
        </button>
      </div>
      <section className='sec-tercera-home'>
        <div className='lista-category'>
          <h4>Gategorias más buscadas</h4>
          <ul className="ul-category">
            <li className="li-category">
              <button className="button-category"><p className="p-category">Home</p></button>
            </li>
            <li className="li-category">
              <button className="button-category"><p className="p-category">Store</p></button>
            </li>
            <li className="li-category">
              <button className="button-category"><p className="p-category">Settings</p></button>
            </li>
            <li className="li-category">
              <button className="button-category"><p className="p-category">Settings</p></button>
            </li>
            <li className="li-category">
              <button className="button-category"><p className="p-category">Settings</p></button>
            </li>
            <li className="li-category">
              <button className="button-category"><p className="p-category">Settings</p></button>
            </li>
          </ul>

        </div>
        <div className='seccion-productos-otros'>
          <h4>Otros productos</h4>
          <div className="productos-otros">
            <div className="card-productos-personalizados-otros">
              <div className="card-image-container-productos-personalizados">
                <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
              </div>
              <p className="card-title-productos-personalizados">Card Title</p>
              <p className="card-des-productos-personalizados">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                blanditiis.
              </p>
            </div>
            <div className="card-productos-personalizados-otros">
              <div className="card-image-container-productos-personalizados">
                <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
              </div>
              <p className="card-title-productos-personalizados">Card Title</p>
              <p className="card-des-productos-personalizados">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                blanditiis.
              </p>
            </div>
            <div className="card-productos-personalizados-otros">
              <div className="card-image-container-productos-personalizados">
                <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
              </div>
              <p className="card-title-productos-personalizados">Card Title</p>
              <p className="card-des-productos-personalizados">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                blanditiis.
              </p>
            </div>
            <div className="card-productos-personalizados-otros">
              <div className="card-image-container-productos-personalizados">
                <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
              </div>
              <p className="card-title-productos-personalizados">Card Title</p>
              <p className="card-des-productos-personalizados">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                blanditiis.
              </p>
            </div>
            <div className="card-productos-personalizados-otros">
              <div className="card-image-container-productos-personalizados">
                <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
              </div>
              <p className="card-title-productos-personalizados">Card Title</p>
              <p className="card-des-productos-personalizados">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                blanditiis.
              </p>
            </div>
            <div className="card-productos-personalizados-otros">
              <div className="card-image-container-productos-personalizados">
                <img src="/images/Productos/productos-top/01AR20.jpg" alt="" />
              </div>
              <p className="card-title-productos-personalizados">Card Title</p>
              <p className="card-des-productos-personalizados">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
                natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
                suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
                blanditiis.
              </p>
            </div>
          </div>
          <button className='boton-enlaces'>
            <a href=""><i>Ver nuestro catalogo</i></a>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-icon"
              >
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </section>
      <section className='sec-publicidad'>
        <div className='publicidad'>
          <h2>Publicidad</h2>
        </div>
      </section>
      <section className='descuentos-promociones'>
        <div className='tarjetas-descuento-promociones'>
          <div className='descuentos'>
            <div className="sec-productos-des">
              <div className="productos-descuentos">
                <h4>Descuentos</h4>
                <div className="card-descuento-uno">
                  <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                  <div className="card-content">
                    <div className="category">Illustration</div>
                    <div className="heading">
                      A heading that must span over two lines
                      <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                    </div>
                  </div>
                </div>
                <div className="card-descuento-dos">
                  <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                  <div className="card-content">
                    <div className="category">Illustration</div>
                    <div className="heading">
                      A heading that must span over two lines
                      <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                    </div>
                  </div>
                </div>
                <div className="card-descuento-uno">
                  <div className="card-image-descuento"><img src="/images/Productos/productos-top/01AR20.jpg" alt="" /></div>
                  <div className="card-content">
                    <div className="category">Illustration</div>
                    <div className="heading">
                      A heading that must span over two lines
                      <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                    </div>
                  </div>
                </div>
                <div className="card-descuento-dos">
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
        </div>
        <h3>Nuestras mejores promociones y descuentos<br /><br /><button className='boton-enlaces'>
          <a href=""><i>Ver nuestro catalogo</i></a>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-icon"
            >
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              ></path>
            </svg>
          </span>
        </button></h3>
      </section>
      <div className='mensaje-llamativo3'>
        <h5><i>¿Por qué elegirnos?</i></h5>
        <p>
          🔵 <b>Impacto real: </b>Con cada compra, apoyas directamente a artesanos y emprendedores independientes. <br />
          🌿 <b>Sostenibilidad: </b>Materiales ecoamigables, procesos éticos y comercio justo. <br />
          💡 <b>Más que un producto, un propósito: </b>Detrás de cada pieza hay una historia de esfuerzo, talento y superación. <br />
          🔥 <b>Empoderamiento: </b>Promovemos la autonomía económica de comunidades y artistas locales.
        </p>
      </div>
      <section className='seccion-opiniones'>
        <div className='tarjetas-reseñas'>
          <div className="card-opinion">
            <h6>Opiniones sobre la página</h6>
            <div className="messages-opinion">
              <div className="message-opinion">
                <div className="message-icon-opinion"></div>
                <div className="message-info-opinion">
                  <div className="message-header-opinion">
                    <div className="message-title-opinion">Uiverse</div>
                    <div className="message-time-opinion">1m ago</div>
                  </div>
                  <div className="message-content-opinion">Message</div>
                </div>
              </div>
              <div className="message-opinion">
                <div className="message-icon-opinion"></div>
                <div className="message-info-opinion">
                  <div className="message-header-opinion">
                    <div className="message-title-opinion">Uiverse</div>
                    <div className="message-time-opinion">1m ago</div>
                  </div>
                  <div className="message-content-opinion">Message</div>
                </div>
              </div>
              <div className="message-opinion">
                <div className="message-icon-opinion"></div>
                <div className="message-info-opinion">
                  <div className="message-header-opinion">
                    <div className="message-title-opinion">Uiverse</div>
                    <div className="message-time-opinion">1m ago</div>
                  </div>
                  <div className="message-content-opinion">Message</div>
                </div>
              </div>
              <div className="message-opinion">
                <div className="message-icon-opinion"></div>
                <div className="message-info-opinion">
                  <div className="message-header-opinion">
                    <div className="message-title-opinion">Uiverse</div>
                    <div className="message-time-opinion">1m ago</div>
                  </div>
                  <div className="message-content-opinion">Message</div>
                </div>
              </div>
              <div className="message-opinion">
                <div className="message-icon-opinion"></div>
                <div className="message-info-opinion">
                  <div className="message-header-opinion">
                    <div className="message-title-opinion">Uiverse</div>
                    <div className="message-time-opinion">1m ago</div>
                  </div>
                  <div className="message-content-opinion">Message</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-opinion">
            <h6>Reseñas de los productos</h6>
            <div className="messages-opinion">

              <div className="message-opinion">
                <div className="message-icon-opinion"></div>
                <div className="message-info-opinion">
                  <div className="message-header-opinion">
                    <div className="message-title-opinion">Uiverse</div>
                    <div className="message-time-opinion">1m ago</div>
                  </div>
                  <div className="message-content-opinion">Message</div>
                </div>
              </div>
              <div className="message-opinion">
                <div className="message-icon-opinion"></div>
                <div className="message-info-opinion">
                  <div className="message-header-opinion">
                    <div className="message-title-opinion">Uiverse</div>
                    <div className="message-time-opinion">1m ago</div>
                  </div>
                  <div className="message-content-opinion">Message</div>
                </div>
              </div>
              <div className="message-opinion">
                <div className="message-icon-opinion"></div>
                <div className="message-info-opinion">
                  <div className="message-header-opinion">
                    <div className="message-title-opinion">Uiverse</div>
                    <div className="message-time-opinion">1m ago</div>
                  </div>
                  <div className="message-content-opinion">Message</div>
                </div>
              </div>
              <div className="message-opinion">
                <div className="message-icon-opinion"></div>
                <div className="message-info-opinion">
                  <div className="message-header-opinion">
                    <div className="message-title-opinion">Uiverse</div>
                    <div className="message-time-opinion">1m ago</div>
                  </div>
                  <div className="message-content-opinion">Message</div>
                </div>
              </div>
              <div className="message-opinion">
                <div className="message-icon-opinion"></div>
                <div className="message-info-opinion">
                  <div className="message-header-opinion">
                    <div className="message-title-opinion">Uiverse</div>
                    <div className="message-time-opinion">1m ago</div>
                  </div>
                  <div className="message-content-opinion">Message</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3>Reseñas, opiniones sobre nuestros productos y diseño empresarial <br /><br />
          <button className='boton-enlaces'>
            <a href=""><i>Ver todas las reseñas</i></a>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-icon"
              >
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                ></path>
              </svg>
            </span>
          </button></h3>

      </section>
      <h2>Haz la diferencia con cada compra. Únete a nuestra revolución artesanal.</h2>
    </main>
  );
};

export default Home;
