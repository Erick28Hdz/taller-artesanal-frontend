import React from "react";
import "../../../css/style.css";
import "../styles/Hero.css";
import Carousel from 'react-bootstrap/Carousel'


const Hero = () => {
  return (
    <section className="section-hero">
      <div className="seccion1hero">
        <div className="carrusel " >
          <Carousel>
            <Carousel.Item > 
              <img src="/images/Productos/hero/01B21.jpg" alt="Descripción de la imagen" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/Productos/hero/01P20.jpg" alt="Descripción de la imagen" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/Productos/hero/08P20-1.jpg" alt="Descripción de la imagen" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img src="/images/Productos/hero/10C21-3.jpg" alt="Descripción de la imagen" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img src="/images/Productos/hero/Primer-diseno-2.jpg" alt="Descripción de la imagen" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="vistas">
          <div className="boton-hero">
            <button className="button-hero">
              <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
              Explorar
            </button>
          </div>
          <div className="texto-hero">
            <p>"Contra el capitalismo vacío, levantamos la artesanía como acto de resistencia. Cada pieza hecha a mano es un grito de libertad y rebeldía."</p>
          </div>
        </div>
      </div>
      <div className="seccion2hero tienda-virtual">
        <div className="titulo tienda-virtual">
          <p className="titulo1">
            <span className="arte">ARTE</span> <span className="gestion">GESTIÓN</span>
          </p>
          <p className="titulo2">
            <span className="taller">Taller</span> <span className="artesanal">Artesanal</span>
          </p>
        </div>
        <div>
          <img className="logo" src="/images/Logos/ArteGestion-1.png" alt="Logo0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
