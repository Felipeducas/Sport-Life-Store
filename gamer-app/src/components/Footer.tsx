import React from "react";

function Footer() {
    return (

<footer className="footer">
        <div className="container">
          
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="logo">
                <h3>SPORT LIFE STORE</h3>
              </a>
              <p className="footer-text">
                Creemos en el deporte para mejorar la salud física y mental de nuestros usuarios. Somos una tienda especializada en la venta de productos deportivos de alta calidad para incentivar al movimiento y la diversión. Buscamos tu bienestar y satisfacción, por eso te acompañamos en cada paso de tu aventura deportiva.
              </p>
            </div>
  
          
  
            <ul className="footer-list">
              <li>
                <h3 className="footer-list-title">Contacto</h3>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="#" className="footer-link">
                  <i className="bx bxs-map-alt"></i> Avenida 3A # 89-00, Cali, Colombia
                </a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="#" className="footer-link">
                  <i className="bx bxs-contact"></i> +57 300-333 33 33
                </a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="#" className="footer-link">
                  <i className="bx bxs-envelope"></i> SportLS@gmail.com
                </a>
              </li>
            </ul>
  
            <ul className="footer-list">
              <li>
                <h3 className="footer-list-title">Horario de atención</h3>
              </li>
              <li>
                <p className="footer-link" style={{ marginBottom: '20px' }}>
                  Lunes - Sábado:
                </p>
              </li>
              <li>
                <p className="footer-link" style={{ marginBottom: '20px' }}>
                  8:00Am - 6:00Pm
                </p>
              </li>
            </ul>
          </div>
  
          <div className="footer-bottom">
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <i className="ri-facebook-box-line"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <i className="ri-twitter-x-line"></i>
                </a>
              </li>
            </ul>
  
            <p className="copyright">
              Todos los derechos reservados &copy; 2024 Sport Life Store | sitio web creado por <a href="#"> Felipe Duarte</a>.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;