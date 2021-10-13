import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import '../styles/moda.css';
import CardButton from './Props/CardButton';
import { Link } from 'react-router-dom'

const moda = () => {
    return (
<Fragment>
            {/* <!-- PRIMERA SECCION --> */}
    <section className="m-five-section">
        <div className="m-container-publicity">
            <img src="../img/men.jpg" alt="" className="m-img-publicity2"/>
            <h2 className="m-h2-container">HOMBRES</h2>
        </div>
         <div className="m-container-publicity2">
           <img loading="lazy" src="../img/woman.jpg" alt="" className="m-img-publicity2"/>
           <h2 className="m-h2-container">MUJERES</h2>
        </div>

        <div className="m-container-publicity3" > 
           <img loading="lazy" src="../img/transgenero.jpg" alt="" className="m-img-publicity2"/>
           <h2  className="m-h2-container">SIN GENERO</h2>
        </div>
        <div className="m-container-publicity" id="container-publicity-1">
            <img src="../img/child.jpg" alt="" className="m-img-publicity2"/>
            <h2 className="m-h2-container">NIÑAS</h2>
        </div>
         <div className="m-container-publicity2" id="container-publicity-2">
           <img loading="lazy" src="../img/kid.jpg" alt="" className="m-img-publicity2"/>
           <h2  className="m-h2-container">NIÑOS</h2>
        </div>

        <div className="m-container-publicity3" id="container-publicity-3"> 
           <img loading="lazy" src="../img/baby.jpg" alt="" className="m-img-publicity2"/>
           <h2  className="m-h2-container">BEBES</h2>
        </div>
    </section>


{/* <!-- TERCER SECCION --> */}

    <section className="m-six-section">   
        <div className="m-container-publicity4" id="container-publicity-watch">
            <img src="../img/reloj.jpg" alt="" className="m-img-publicity3"/>
            <h2 className="m-h2-container">JOYAS Y RELOJES</h2>
        </div>
         <div className="m-container-publicity5" id="container-publicity-bags">
           <img loading="lazy" src="../img/equipaje.jpg" alt="" className="m-img-publicity3"/>
           <h2 className="m-h2-container">EQUIPAJE Y BOLSAS</h2>
        </div>

        <div className="m-container-publicity6" id="container-publicity-6"> 
           <img loading="lazy" src="../img/zapatos.jpg" alt="" className="m-img-publicity3"/>
           <h2  className="m-h2-container">ZAPATOS Y ZAPATILLAS</h2>
        </div>
        <div className="m-container-publicity7" id="glases">
            <img src="../img/lentes.jpg" alt="" className="m-img-publicity3"/>
            <h2 className="m-h2-container">LENTES</h2>
        </div>
        <div className="m-container-publicity4" id="container-publicity-underwear">
            <img src="../img/underwear.jpg" alt="" className="m-img-publicity3"/>
            <h2 className="m-h2-container">UNDERWEAR</h2>
        </div>
         <div className="m-container-publicity5" id="container-publicity-pants">
           <img loading="lazy" src="../img/jeans.jpg" alt="" className="m-img-publicity3"/>
           <h2 className="m-h2-container">PANTALONES Y JEANS</h2>
        </div>

        <div className="m-container-publicity6" id="container-publicity-baby"> 
           <img loading="lazy" src="../img/ropa-bebe.jpg" alt="" className="m-img-publicity3"/>
           <h2  className="m-h2-container">BEBES</h2>
        </div>
        <div className="m-container-publicity7" id="t-shirt">
            <img src="../img/camisa.jpg" alt="" className="m-img-publicity3"/>
            <h2 className="m-h2-container">PLAYERAS</h2>
        </div>
    </section>


   {/*  <!-- COMPRAS PARA AGREGAR A CARRITO --> */}
 
    <section className="m-four-section">
        <h2 className="m-first-title">ENCUENTRA TUS FAVORITOS</h2>
        <CardButton price={425} img={"../img/camisa.png"} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'} />
        <CardButton price={378} img={"../img/pantalon-caqui.png"} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'} />
        <CardButton price={378}img={"../img/chelsea-boots-cafe.png"}description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
        <CardButton price={632}img={"../img/blazer.png"}description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'} />
        <CardButton price={255} img={"../img/corbata.png"} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
    </section>



     <section className="m-five-section-moda">
        <div className="m-container-promotion-1" id="sport">
            <img src="../img/pesas.jpg" alt="" className="m-img-promotion"/>
            <h2 className="m-h2-container-1">DEPORTES</h2>
        </div>
         <div className="m-container-promotion-2" id="beautiful">
           <img loading="lazy" src="../img/belleza.jpg" alt="" className="m-img-promotion"/>
           <h2 className="m-h2-container-1">BELLEZA</h2>
        </div>
        <div className="m-container-promotion-1" id="ofert">
            <img src="../img/ofertas.jpg" alt="" className="m-img-promotion"/>
            <h2 className="m-h2-container-1">OFERTAS DE LA SEMANA</h2>
        </div>
         <div className="m-container-promotion-2" id="fashion">
           <img loading="lazy" src="../img/ropa.jpg" alt="" className="m-img-promotion"/>
           <h2 className="m-h2-container-1">MODA IMPORTADA</h2>
        </div>
    </section>


    <section className="m-last-section">
        <div className="m-container-first-option">
            <ul className="m-ul-last-1">
           <li className="m-title-list"><Link to="/#">Abrigos</Link></li>
           <li><Link to="/#">Saquitos, Sweaters y Chalecos</Link></li> 
           <li><Link to="/#">Sudaderas y Hoodies</Link></li> 
           <li><Link to="/#"> Otros</Link></li> 
           <li className="m-title-list"><Link to="/#">Accesorios de Moda</Link></li>
           <li><Link to="/#">Abanicos</Link></li>
           <li><Link to="/#">Antifaces para Dormir</Link></li>
           <li><Link to="/#">Bufandas y Pañuelos</Link></li>
           <li><Link to="/#">Calentadores</Link></li>
           <li><Link to="/#">Cinturones</Link></li>
           <li><Link to="/#">Corbatas</Link></li>
           <li><Link to="/#">Cubrebocas Reutilizables</Link></li>
           <li><Link to="/#">Espejitos</Link></li>
           <li><Link to="/#"> Fajas</Link></li>
           <li><Link to="/#">Filtros para Cubrebocas</Link></li>
           <li><Link to="/#">Gorros y Sombreros</Link></li>
           <li><Link to="/#">Guantes</Link></li>
           <li><Link to="/#">Lentes</Link></li>
           <li><Link to="/#"> Llaveros</Link></li>
           <li><Link to="/#">Orejeras</Link></li>
           <li><Link to="/#">Paraguas</Link></li>
           <li><Link to="/#">Pareos</Link></li>
           <li><Link to="/#">Pisacorbatas</Link></li>
           <li><Link to="/#">Prendedores y Broches</Link></li>
           <li><Link to="/#">Tirantes</Link></li>
           <li><Link to="/#">Toallas de Playa</Link></li>
           <li><Link to="/#">Otros Accesorios</Link></li>
        </ul>
     </div>
        <div className="m-container-second-option">
            <ul className="m-ul-last-1">
            <li className="m-title-list"><Link to="/#">Bermudas y Shorts</Link></li>  
            <li className="m-title-list"><Link to="/#">Blusas</Link></li>
            <li className="m-title-list"><Link to="/#">Calzado</Link></li>
            <li><Link to="/#">Alpargatas</Link></li>
            <li><Link to="/#">Botas y Botinetas</Link></li>
            <li><Link to="/#">Flats</Link></li>
            <li><Link to="/#">Mocasines y Náuticos</Link></li>
            <li><Link to="/#">Pantuflas</Link></li>
            <li><Link to="/#">Sandalias y Ojotas</Link></li>
            <li><Link to="/#">Tenis</Link></li>
            <li><Link to="/#">Zapatillas y Tacones</Link></li>
            <li><Link to="/#">Zuecos y Mules</Link></li>
            <li><Link to="/#">Otros</Link></li>
            <li className="m-title-list"><Link to="/#">Camisas</Link></li>
            <li className="m-title-list"><Link to="/#">Equipaje y Bolsas</Link></li>
            <li><Link to="/#">Accesorios</Link></li>
            <li><Link to="/#">Bandoleras y Portafolios</Link></li>
            <li><Link to="/#">Bolsas</Link></li>
            <li><Link to="/#">Cangureras</Link></li>
            <li><Link to="/#">Equipaje y Accesorios de Viaje</Link></li>
            <li><Link to="/#">Kits de Mochilas Escolares</Link></li>
            <li><Link to="/#">Luncheras Escolares</Link></li>
            <li><Link to="/#">Mochilas</Link></li>
            <li><Link to="/#">Monederos y Carteras</Link></li>
            <li><Link to="/#">Neceseres</Link></li>
            <li><Link to="/#">Otros</Link></li>
        </ul>
    </div>
        <div className="m-container-third-option">
          <ul>
            <li className="m-title-list"><Link to="/#">Faldas</Link></li>
            <li className="m-title-list"><Link to="/#">Indumentaria Laboral </Link></li>
            <li><Link to="/#">Accesorios Tácticos</Link></li>
            <li><Link to="/#">Batas Escolares</Link></li>
            <li><Link to="/#">Ropa Militar y Policial</Link></li>
            <li><Link to="/#">Uniformes Escolares</Link></li>
            <li><Link to="/#">Uniformes y Ropa de Trabajo</Link></li>
            <li><Link to="/#">Otros</Link></li>
            <li className="m-title-list"><Link to="/#">Jumpsuite y Overoles</Link></li>
            <li className="m-title-list"><Link to="/#">Kimonos</Link></li>
            <li className="m-title-list"><Link to="/#">Leggings</Link></li>
            <li className="m-title-list"><Link to="/#">Lotes de Ropa</Link></li>
            <li className="m-title-list"><Link to="/#">Pantalones y Jeans</Link></li>
            <li className="m-title-list"><Link to="/#">Playeras</Link></li>
        </ul>
        </div>
        <div className="m-container-quarter-option">
          <ul>
             <li className="m-title-list"><Link to="/#">Ropa Deportiva</Link></li>
             <li><Link to="/#"> Bolsas Deportivas</Link></li>
             <li><Link to="/#">Calcetas y Calcetines</Link></li>
             <li><Link to="/#">Chamarras</Link></li>
             <li><Link to="/#">Conjuntos</Link></li>
             <li><Link to="/#">Gorras</Link></li>
             <li><Link to="/#">Guantes</Link></li>
             <li><Link to="/#">Leggings y Lycras</Link></li>
             <li><Link to="/#">Mangas de Compresión</Link></li>
             <li><Link to="/#">Pants</Link></li>
             <li><Link to="/#">Playeras</Link></li>
             <li><Link to="/#">Ropa de Danza y Patín</Link></li>
             <li><Link to="/#">Shorts</Link></li>
             <li><Link to="/#">Sudaderas</Link></li>
             <li><Link to="/#">Tobilleras</Link></li>
             <li><Link to="/#">Tops Deportivos</Link></li>
             <li><Link to="/#">Vestidos</Link></li>
             <li><Link to="/#">Otros</Link></li>
             <li className="m-title-list"><Link to="/#">Ropa Interior y de Dormir</Link></li>
             <li><Link to="/#">Ropa Interior</Link></li>
             <li><Link to="/#">Ropa para Dormir</Link></li>
         </ul>
        </div>
        <div className="m-container-fifth-option">
          <ul>
             <li className="m-title-list"><Link to="/#">Ropa para Bebés</Link></li>             
             <li><Link to="/#">Accesorios</Link></li>
             <li><Link to="/#">Batas</Link></li>
             <li><Link to="/#">Blusas</Link></li>
             <li><Link to="/#">Calcetas</Link></li>
             <li><Link to="/#">Calzado</Link></li>
             <li><Link to="/#">Camisas</Link></li>
             <li><Link to="/#">Chamarras</Link></li>
             <li><Link to="/#">Conjuntos</Link></li>
             <li><Link to="/#">Faldas</Link></li>
             <li><Link to="/#">Kits para Salida del Hospital</Link></li>
             <li><Link to="/#">Mamelucos y Pañaleros</Link></li>
             <li><Link to="/#">Overoles</Link></li>
             <li><Link to="/#">Pantalones</Link></li>
             <li><Link to="/#">Pijamas</Link></li>
             <li><Link to="/#">Playeras</Link></li>
             <li><Link to="/#">Shorts</Link></li>
             <li><Link to="/#">Sudaderas</Link></li>
             <li><Link to="/#">Sweaters</Link></li>
             <li><Link to="/#">Trajes de baño</Link></li>
             <li><Link to="/#">Vestidos</Link></li>
             <li><Link to="/#">Otros</Link></li>
             <li className="m-title-list"><Link to="/#">Trajes</Link></li>
             <li className="m-title-list"><Link to="/#">Trajes de Baño</Link></li>
             <li className="m-title-list"><Link to="/#">Vestidos</Link></li>
             <li className="m-title-list"><Link to="/#">Otros</Link></li>
            </ul>
        </div>
    </section>
</Fragment>
    )
}

export default moda
