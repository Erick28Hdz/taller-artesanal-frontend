import React from "react";
import "../../css/style.css";
import "../../css/modulo-inicio/Sobre-nosotros.css"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="sobre-nosotros tienda-virtual">
      <h2>Información sobre nosotrxs</h2>
      <section className="seccion-mision-vision">
        <div className="mision">
          <div className="card-sec-mi-vi" id="card">
            <div className="content-sec-mi-vi">
              <h5>MISIÓN</h5>
              <p>En Arte Gestión, nos especializamos en ofrecer productos artesanales únicos y de alta calidad, conectando a los clientes con el talento y la creatividad de artesanos independientes. A través de una experiencia de compra intuitiva y accesible en nuestra tienda en línea, promovemos el valor del arte hecho a mano, brindando piezas auténticas que cuentan historias y transmiten identidad cultural.</p>
            </div>
          </div>
        </div>
        <div className="vision">
          <div className="card-sec-mi-vi" id="card">
            <div className="content-sec-mi-vi">
              <h5>VISIÓN</h5>
              <p>Ser la tienda artesanal en línea de referencia, reconocida por su calidad, autenticidad e innovación. Buscamos expandir nuestra comunidad de creadores y clientes a nivel global, impulsando la artesanía mediante estrategias digitales efectivas y un compromiso con la sostenibilidad y el comercio justo.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="seccion-quejas-redes tienda-virtual">
        
        <div className="redes-sociales">
          <div className="">
            <h5>Contactanos</h5>
            <p>✨ Descubre el arte hecho a mano que cuenta historias únicas 🎨🖌️<br />

              Explora nuestra colección de productos artesanales exclusivos y apoya el talento de creadores independientes. 🎭💫<br />

              ¡Síguenos en nuestras redes y encuentra piezas auténticas que te encantarán! ❤️👇</p>
          </div>
          <div className="logos-redsoc">
            <a href="https://www.facebook.com/share/1AQmKKWybD/" target="_blank" rel="noopener noreferrer">
              <button className="button facebook">
                <img src="/images/Iconos/facebook.png" alt="facebook" />
              </button>
            </a>
            <a href="https://www.instagram.com/4rte.gestion?igsh=M3pzemEyb3MyNGZk">
              <button className="button instagram">
                <img src="/images/Iconos/instagram.png" alt="instagram" />
              </button>
            </a>
            <a href="https://wa.me/message/EYJGBDZ4BRPYN1">
              <button className="button whatsapp">
                <img src="/images/Iconos/whatsapp.png" alt="whatsapp" />
              </button>
            </a>
            <a href="https://youtube.com/@artegestion9043?si=1MQppdtmGk7FGnZB">
              <button className="button youtube">
                <img src="/images/Iconos/youtube.png" alt="youtube" />
              </button>
            </a>
            <a href="https://www.tiktok.com/@4rtegestion?_t=ZS-8t9fliVTpMW&_r=1">
              <button className="button tiktok">
                <img src="/images/Iconos/tik-tok.png" alt="tiktok" />
              </button>
            </a>
          </div>
        </div>
        <div className="quejas-peticiones">
        <h3>Más información</h3>
          <form className="colorful-form-peticiones">
            <div className="form-group-peticiones">
              <label className="form-label-peticiones" htmlFor="name">Nombre:</label>
              <input required placeholder="Ingrese su nombre" className="form-input-peticiones" type="text" />
            </div>
            <div className="form-group-peticiones">
              <label className="form-label-peticiones" htmlFor="email">Email:</label>
              <input required placeholder="Ingrese su email" className="form-input-peticiones" name="email" id="email" type="email" />
            </div>
            <div className="form-group-peticiones">
              <label className="form-label-peticiones" htmlFor="message">Mensaje:</label>
              <textarea required placeholder="Redacte su mensaje" className="form-input-peticiones" name="message" id="message"></textarea>
            </div>
            <button className="form-button-peticiones" type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
