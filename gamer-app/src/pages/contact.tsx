import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import imgEnvío from '../public/img/envio.png';
import imgPago from '../public/img/pago.png';
import imgDevoluciones from '../public/img/devoluciones.png';
import imgSoporte from '../public/img/soporte.png';


/**
 * Página de contacto con formulario de contacto simulado.
 */
const Contact: React.FC = () => {
  /**
   * Muestra una alerta cuando se hace clic en enviar.
   */
  const handleContact = () => {
    Swal.fire({
      title: 'Mensaje enviado!',
      text: 'Nos pondremos en contacto contigo pronto.',
      icon: 'info',
      confirmButtonText: 'Aceptar',
    });
  };

  return (
    <div className="container">
      <div className="navbar">
        <Link href="/">Inicio</Link>
        <Link href="/about">Nosotros</Link>
        <Link href="/contact">Contáctanos</Link>
      </div>
      <h1>Contáctanos</h1>
      <form className="form">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" className="input" name="name" required /> 
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" className="input" name="email" required />
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" className="textarea" name="message" required></textarea>
        
        <button onClick={handleContact}>Enviar</button>
      </form>
    </div>

  );
};

export default Contact;
