import React from "react";
import "../../../css/style.css";
import "../styles/Footer.css";


const Footer = () => {
  return (
    <footer>
      <section className="seccion1">
        <section className="seccio-info">
          <div className="tienda-virtual">
            <h4>Sobre nosotrxs</h4>
          </div>
          <div>
            <p>Somos una tienda artesanal y autogestionada que celebra la creatividad y la tradición. Cada producto es único, hecho con amor y compromiso con la sostenibilidad y el talento local.</p>
          </div>
          <div className="logos-tienda">
              <div className="logo-ag">
                <img src="/images/Logos/ArteGestion-1.png" alt="logo1" />
              </div>
              <div className="logo-ag">
                <img src="/images/Logos/ArteGestion-1.2.png" alt="facebook" />
              </div>
              <div className="logo-ag">
                <img src="/images/Logos/ArteGestion-1.3.png" alt="facebook" />
              </div>
              <div className="logo-ag">
                <img src="/images/Logos/ArteGestion-1.4.png" alt="facebook" />
              </div>
              <div className="logo-ag">
                <img src="/images/Logos/ArteGestion-1.5.png" alt="facebook" />
              </div>
          </div>
          <div className="Titulo-principal">
            <h1>Arte Gestión</h1>
          </div>
        </section>
        <section className="seccio-atecli">
        <form className="form-footer">
            <div className="tienda-virtual"><h4>Atención al cliente</h4></div>
            <input type="text" placeholder="Tú email"/>
            <textarea placeholder="Tú mensaje"></textarea>
            
            <button>Envíar</button>
            </form>
        </section>
        <section className="seccion-redsoc">
          <div className="tienda-virtual">
            <h4>Contactanos</h4>
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
          <div className="textos-footer">
            <p>Articulos favoritos</p>
            <p>Articulos más pedidos</p>
            <p>Articulos mejor valorados</p>
            <p>Articulos personalizados</p>
            <p>Articulos de pareja</p>
            <p>Articulos digitales</p>
          </div>
        </section>
        <section className="seccion-metpag">
          <div className="tienda-virtual">
            <h4>Metodos de pago</h4>
          </div>
          <div className="logos-pagos">
              <div className="logo-pag">
                <img src="/images/Iconos/american-express.png" alt="facebook" />
              </div>
              <div className="logo-pag">
                <img src="/images/Iconos/mastercard.png" alt="facebook" />
              </div>
              <div className="logo-pag">
                <img src="/images/Iconos/visa.png" alt="facebook" />
              </div>
              <div className="logo-pag">
                <img src="/images/Iconos/paypal.png" alt="facebook" />
              </div>
          </div>
          <div className="textos-footer">
            <p>Compra artesania profesional</p>
            <p>Personaliza tus productos</p>
            <p>Productos del mes</p>
            <p>Descuentos y promociones</p>
            <p>Seguridad de transacción</p>
            <p>Politicas de seguridad</p>
          </div>
        </section>
      </section>
      <section className="seccion2">
        <p>© 2025 Taller Artesanal Arte Gestión. Todos los derechos reservados.</p>
      </section>
    </footer>
  );
};

export default Footer;
