//Importar los módulos
import React from 'react';
import Link from 'next/link'; 
import Swal from 'sweetalert2';
import Footer from '../components/Footer';
import Card from '../components/Card';


const Home: React.FC = () => {
  const showAlert = () => {
    Swal.fire({
      title: 'SPORT LIFE STORE',
      text: 'Pasión por el deporte',
      icon: 'success',
      confirmButtonText: '¡A explorar!',
});
};

const products = [
    {
      id: 1,
      title: 'Camiseta Deportiva Hombre Nike',
      color: ['Azul'],
      size: ['S', 'M', 'L', 'XL'],
      image: 'https://static.dafiti.com.co/p/nike-5255-0784562-1-product.jpg',
      price: 261950,
      description: 'Camiseta Deportiva Hombre Nike Inter De Milán Local 2023/24 Stadium Azul.'
    },
    {
      id: 2,
      title: 'Sudadera Marca Puma Mujer',
      color: ['Blanco'],
      size: ['XS', 'S', 'M', 'L'],
      image: 'https://static.dafiti.com.co/p/puma-8774-4268562-1-product.jpg',
      price: 337040,
      description: 'Sudadera Marca Puma Mujer Original Blanco TR W Deportiva.'
    },
    {
      id: 3,
      title: 'Adidas Performance',
      color: ['Blanco'],
      size: [],
      image: 'https://static.dafiti.com.co/p/adidas-performance-6688-4611462-5-product.jpg',
      price: 169900,
      description: 'Tenis Running Blanco-Amarillo Neón-Gris adidas Performance Response Runner.'
    },
    {
      id: 4,
      title: 'Gorra Verde PUMA',
      color: ['Verde'],
      size: ['Unico'],
      image: 'https://static.dafiti.com.co/p/puma-6307-7176462-1-zoom.jpg',
      price: 71900,
      description: 'Gorra Verde Oliva PUMA Metal Cat.'
    },
    {
      id: 5,
      title: 'Maletín Under Armour',
      color: ['Negro'],
      size: ['Unico'],
      image: 'https://static.dafiti.com.co/p/under-armour-3031-8066832-1-zoom.jpg',
      price: 189990,
      description: 'Under Armour Maletin Under Armour Gametime Duffle S-Negro.'
    },
    {
      id: 6,
      title: 'Balón de Fútbol Adidas Performance',
      color: ['Dorado'],
      size: [],
      image: 'https://static.dafiti.com.co/p/adidas-performance-3527-5069262-1-zoom.jpg',
      price: 88900,
      description: 'Balón de Fútbol Blanco-Negro adidas Performance MESSI CLB ART 1.'
    },
    {
      id: 7,
      title: 'Balón de Baloncesto GOLTY',
      color: ['Naranja'],
      size: ['Unica'],
      image: 'https://static.dafiti.com.co/p/golty-9827-8036562-1-zoom.jpg',
      price: 79990,
      description: 'GOLTY Balón De Baloncesto Competencia Golty Urban #7-Naranja.'
    },
    {
      id: 8,
      title: 'Rodillo Elástico Resistencia UrbenMood',
      color: ['Negro Verde'],
      size: ['Unica'],
      image: 'https://static.dafiti.com.co/p/urbenmood-8947-6013162-1-zoom.jpg',
      price: 89900,
      description: 'UrbenMood Rodillo Elastico Resistencia Desarrollo Abdominal T249.'
    },
    {
      id: 9,
      title: 'Canguro Reebok',
      color: ['Negro'],
      size: ['Unica'],
      image: 'https://static.dafiti.com.co/p/reebok-4360-9943042-1-zoom.jpg',
      price: 62900,
      description: 'Reebok Canguro Negro-Blanco Reebok Classics.'
    },
    {
      id: 10,
      title: 'Raqueta de Padel GOLTY',
      color: ['Negro/Naranja'],
      size: ['Unica'],
      image: 'https://static.dafiti.com.co/p/golty-1823-6438752-1-zoom.jpg',
      price: 339990,
      description: 'GOLTY Raqueta De Padel Golty Pro-Negro/Naranja.'
    },
    {
      id: 11,
      title: 'Audífonos Deportivos',
      color: ['Negro'],
      size: [],
      image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/119399387_01/w=800,h=800,fit=pad',
      price: 84990,
      description: 'Audifonos Deportivos Inalambricos Bluetooth Estuche Recargables.'
    },
    {
      id: 12,
      title: 'Reloj Deportivo',
      color: ['Negro'],
      size: ['Unica'],
      image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/136905625_01/w=800,h=800,fit=pad',
      price: 61000,
      description: 'RELOJ DEPORTIVO Q1 SMART BAND.'
    },
    {
      id: 13,
      title: 'Mat de Yoga',
      color: ['Azul'],
      size: [],
      image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/129434461_01/w=800,h=800,fit=pad',
      price: 79900,
      description: 'Estera Tapete Colchoneta Para Yoga Pilates Ejercicio PVC.'
    },
    {
      id: 14,
      title: 'Crema para el Dolor Múscular',
      color: [],
      size: [],
      image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/126337270_01/w=800,h=800,fit=pad',
      price: 23900,
      description: 'Crema Gel Menticol Cbd X 30G.'
    },
    
  ];

return(
  <div className='container'>
    <div className='navbar'>
      <Link href="/">Inicio</Link>
      <Link href="/about">Nosotros</Link>
      <Link href="/contact">Contáctanos</Link>
      </div>
      <h1>SPORT LIFE STORE</h1>
      <p>¡Movimiento y confort en un sólo lugar!</p>
      <button onClick={showAlert}>¡Haz click aquí!</button>
        <section>
          <h2>Productos</h2>
          <div className='tarjetas_productos'> 
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
          </section> 
      <Footer/>
    </div>

    );
    };

    export default Home;