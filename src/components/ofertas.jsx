import React from 'react'
import '../styles/ofertas.css'
import BigCard from './Props/BigCard'
import { Link } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min'


const ofertas = () => {
    return (

        <Fragment>
           <section className="o-header" id="header-ofert">
    <ul className="o-list-header">
      <li ><Link className="o-list-ofertas" to="/#">Ofertas</Link></li>
      <li><Link to="/#">¡Encuentra precios increibles cada dia!</Link></li>
    </ul>
  <div className="o-container-img">
    <img  src="../img/etiqueta.svg" alt="" className="o-img-header"/>
    <Link className="o-a-header" to="/#">Todas las ofertas</Link>
  </div>
  <div className="o-container-img">
    <img src="../img/relampago.svg" alt=""  className="o-img-header"/>
    <Link className="o-a-header" to="/#">Ofertas relampago</Link>
  </div>
  <div className="o-container-img" id="videogame">
    <img src="../img/consola.svg" alt=""  className="o-img-header"/>
    <Link className="o-a-header" to="/#">Videojuegos</Link>
  </div>
  <div className="o-container-img" id="market">
    <img src="../img/comestibles.svg" alt=""  className="o-img-header"/>
    <Link className="o-a-header" to="/#">Supermercado</Link>
  </div>
  <div className="o-container-img" id="headphones">
    <img src="../img/audifonos.svg" alt=""  className="o-img-header"/ >
    <Link className="o-a-header" to="/#">Audifonos</Link>
  </div>
  <div className="o-container-img" id="money">
    <img src="../img/dinero.svg" alt=""  className="o-img-header"/ >
    <Link className="o-a-header" to="/#">Menos de 500$</Link>
  </div> 
</section>

<section className="o-four-section">
  <Link className="o-container-1" to="/#">
    <img  src="../img/chelsea-boots.png" alt="" className="o-second-image"/>
    <strong className="o-offer">OFERTA DEL DIA</strong>
    <h3 className="o-price">$ 600</h3>
    <h5 className="o-promotion">12x $270.00 sin intereses</h5>
    <a className="o-travel"href="/#">Envio gratis</a>
    <img className="o-third-image" src="../img/free.svg" alt=""/>
    <p className="o-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
</Link>
<Link className="o-container-2" to="/#">
  <img   src="../img/audifonos-deportivos.png" alt=""className="o-three-image"/>
  <strong className="o-offer">OFERTA DEL DIA</strong>
  <h3 className="o-price">$ 450</h3>
    <h5 className="o-promotion">12x $270.00 sin intereses</h5>
    <a className="o-travel" href="/#">Envio gratis</a>
    <img className="o-third-image" src="../img/free.svg" alt=""/>
    <p className="o-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
  </Link>

<Link  className="o-container-3" to="/#">
  <img  src="../img/video.png" alt=""className="o-four-image" />
  <strong className="o-offer">OFERTA DEL DIA</strong>
  <h3 className="o-price">$ 1200</h3>
    <h5 className="o-promotion">12x $270.00 sin intereses</h5>
    <a className="o-travel" href="/#">Envio gratis</a>
    <img className="o-third-image" src="../img/free.svg" alt=""/>
    <p className="o-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>   
  </Link>
  <div className="o-ofertas">
    <ul>
      <li className="o-title">Todas</li>
      <li className="o-lista"><Link to="/#">10,000 productos</Link></li>
      <li className="o-title">Tipo de oferta</li>
      <li className="o-lista"><Link to="/#">Oferta del día (138)</Link></li>
      <li className="o-lista"><Link to="/#">Oferta relámpago (173)</Link></li>
      <li className="o-lista"><Link to="/#">Recomendado Mercado Libre (83)</Link></li>
      <li className="o-title">Categorías</li>
      <li className="o-lista"><Link to="/#">Todas las categorías</Link></li>
      <li className="o-lista"><Link to="/#">Accesorios para Vehículos (901)</Link></li>
      <li className="o-lista"><Link to="/#">Agro (1)</Link></li>
      <li className="o-lista"><Link to="/#">Alimentos y Bebidas (238)</Link></li>
      <li className="o-lista"><Link to="/#">Animales y Mascotas (149)</Link></li>
      <li className="o-lista"><Link to="/#">Antigüedades y Colecciones (64)</Link></li>
      <li className="o-lista"><Link to="/#">Arte, Papelería y Mercería (219)</Link></li>
      <li className="o-lista"><Link to="/#">Bebés (270)</Link></li>
      <li className="o-lista"><Link to="/#">Belleza y Cuidado Personal (1255)</Link></li>
      <li className="o-lista"><Link to="/#">Cámaras y Accesorios (65)</Link></li>
      <li className="o-lista"><Link to="/#">Celulares y Telefonía (664)</Link></li>
      <li className="o-lista"><Link to="/#">Computación (590)</Link></li>
      <li className="o-lista"><Link to="/#">Consolas y Videojuegos (142)</Link></li>
      <li className="o-lista"><Link to="/#">Construcción (140)</Link></li>
      <li className="o-lista"><Link to="/#">Deportes y Fitness (1016)</Link></li>
      <li className="o-lista"><Link to="/#">Electrodomésticos (242)</Link></li>
      <li className="o-lista"><Link to="/#">Electrónica, Audio y Video (501)</Link></li>
      <li className="o-lista"><Link to="/#">Herramientas (397)</Link></li>
      <li className="o-lista"><Link to="/#">Hogar, Muebles y Jardín (1933)</Link></li>
      <li className="o-lista"><Link to="/#">Industrias y Oficinas (382)</Link></li>
      <li className="o-lista"><Link to="/#">Instrumentos Musicales (46)</Link></li>
      <li className="o-lista"><Link to="/#">Joyas y Relojes (634)</Link></li>
      <li className="o-lista"><Link to="/#">Juegos y Juguetes (788)</Link></li>
      <li className="o-lista"><Link to="/#">Libros, Revistas y Comics (115)</Link></li>
      <li className="o-lista"><Link to="/#">Música, Películas y Series (163)</Link></li>
      <li className="o-lista"><Link to="/#">Otras Categorías (64)</Link></li>
      <li className="o-lista"><Link to="/#">Recuerdos, Cotillón y Fiestas (134)</Link></li>
      <li className="o-lista"><Link to="/#">Ropa, Bolsas y Calzado (3035)</Link></li>
      <li className="o-lista"><Link to="/#">Salud y Equipamiento Médico (571)</Link></li>
      <li className="o-title">Costo de envío</li>
      <li className="o-lista"><Link to="/#">Gratis (8995)</Link></li>
      <li className="o-title">Pago</li>
      <li className="o-lista"><Link to="/#">Meses sin intereses (8200)</Link></li>
      <li className="o-title">Precio</li>
      <li className="o-lista"><Link to="/#">Hasta $500 (8804)</Link></li>
      <li className="o-lista"><Link to="/#">$500 a $1000 (3007)</Link></li>
      <li className="o-lista"><Link to="/#">Más de $1000 (2908)</Link></li>
      <li className="o-title">Ofertas exclusivas</li>
      <li className="o-lista"><Link to="/#">Por tu nivel de Mercado Puntos (2071)</Link></li>
      <li className="o-lista"><Link to="/#"></Link></li>
      <li className="o-lista"><Link to="/#"></Link></li>
      <li className="o-lista"><Link to="/#"></Link></li>
    </ul>
  </div>
</section>

<BigCard
   price={430}
   img={"../img/plancha.png"}
   description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

   price2={345}
   img2={"../img/herramientas.png"}
   description2='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

   price3={190}
   img3={"../img/mouse.png"}
   description3='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
/>
<BigCard
   price={940}
   img={"../img/audifonos-gamer.png"}
   description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

   price2={375}
   img2={"../img/ventilador.png"}
   description2='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

   price3={12300}
   img3={"../img/xbox.png"}
   description3='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
/>
<BigCard
   price={540}
   img={"../img/mazo.png"}
   description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

   price2={378}
   img2={"../img/arena-gato.png"}
   description2='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

   price3={130}
   img3={"../img/ventilador-pc.png"}
   description3='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
/>
<BigCard
   price={1850}
   img={"../img/guitarra.png"}
   description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

   price2={2200}
   img2={"../img/bocina.png"}
   description2='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

   price3={820}
   img3={"../img/chamarra-cuero.png"}
   description3='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
/>
<BigCard
   price={1900}
   img={"../img/perfume.png"}
   description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

   price2={13599}
   img2={"../img/pc-gamer.png"}
   description2='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

   price3={1400}
   img3={"../img/taladro.png"}
   description3='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
/>

</Fragment>
    )
}

export default ofertas
