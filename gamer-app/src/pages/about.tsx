import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import Logo from '/public/images/logo.jpg';  


/**
 * Página About que muestra información de la aplicación.
 */
const Nosotros: React.FC = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Link href="/">Inicio</Link>
        <Link href="/about">Nosotros</Link>
        <Link href="/contact">Contáctanos</Link>
      </div>
      <Image src={Logo} alt="Logo de la aplicación" />
      <h1>El deporte como estilo de vida y la pasión por la actividad física nos llevó a crear un espacio
              confortable para el movimiento y la diversión. Creemos en el poder
              del deporte para mejorar tu calidad de vida y ofrecemos una experiencia
              de compra excepcional, comprometidos con tu bienestar y satisfacción.
              ¡Actívate con Sport Life Store!</h1>
      <p>Esta página está dedicada a apasionados por el movimiento y la actividad física.</p>
    </div>
  );
};

export default Nosotros;
