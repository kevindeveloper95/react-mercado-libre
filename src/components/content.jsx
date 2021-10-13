import React from 'react'
import '../styles/content.css'
import Card from './Props/card'
import Box from './Props/box'
import BoxContent from './Props/BoxContent'
import { Fragment } from 'react/cjs/react.production.min'
import { Link } from 'react-router-dom'
const content = () => {
    return (
        <Fragment>
    <section className="third-section">
    <h3 className="thirteen">paga comodo y seguro </h3>
    <p  className="fourteen">con Mercado Pago</p>
    <h3 className="fifteen">Hasta 3 meses sin intereses con:</h3>
    <Link className="sixteen" to="#">Ver condiciones</Link>
    <img  src="../img/citibanamex.png" alt="" className="image-citibanamex"/>
    <h3 className="seventeen">Más medios de pago</h3>
    <Link className="eighteen"to="#">Ver todos</Link>
</section>

          {/* PRODUCTOS DISPONIBLES */} 
        <section className="four-section">
              <Card route={'/reloj-xiaomi'}price={1250} description='reloj inteligente marca xiaomi con podometro incluido 'img={'../img/reloj.png'}/>
              <Card route={'/computadora-hp'}price={12200} description='laptop HP 240 G7 plateado ceniza oscuro 14'img={'../img/laptop.png'}/>
              <Card route={'/playera-polo'} price={230} description='Playera Polo Garanty Hombre Manga Corta'img={'../img/playera.png'}/>
              <Card route={'/tenis-jordan'} price={1500}  description='Tenis_air_jordan_1_mid_ triple_color_100%_original' img={'../img/jordan-rojo.png'}/>
              <Card route={'/audifonos-redmi'} price={830}  description='Audífonos inalámbricos Xiaomi Redmi AirDots negro' img={'../img/audifonos.jpg'}/>
        </section>


      {/* TARJETAS DE PUBLICIDAD */}
      
        <section className="five-section">
            <h1 className="title-publicity" id="title-responsive-3">DESCUBRE</h1>
                <div className="container-publicity" >
                <BoxContent h6='SUPERMERCADO' h1='COMPRA MAS ' br='PAGA MENOS' imagenes={'../img/cloro.jpg'}/>
                  </div>
                <div className="container-publicity2" id="container-publicity-1">
                <BoxContent h6='HERRAMIENTAS' h1='TODO PARA' br='CONSTRUIR' imagenes={'../img/herramientas.png'}/>
                  </div>
            </section>
            <section className="seven-section">
              <h1 className="title-publicity" id="title-responsive">TE PUEDE INTERESAR</h1>
                <div className="container-publicity" id="container-responsive">
                <BoxContent h6='PARA TU AUTO' h1='ACCESORIOS' br='PARA VEHICULOS' imagenes={'../img/llanta.png'}/>
                </div>
                <div className="container-publicity2" id="container-responsive-2">
                <BoxContent h6='MERCADOCREDITO' h1='COMPRA AHORA' br='PAGA DESPUES' imagenes={'../img/comprar.png'}/>
              </div>
      </section>

      {/* CAJAS DE SECCIONES  */}
      <section className="eight-section">
         <h1 className="eight-section-title">CATEGORIAS POPULARES</h1>
         <Link to="/#" className="eight-section-container-1"><Box image={'../img/car.svg'}title="Autos Motos y Otros"/></Link>
         <Link to="/#" className="eight-section-container-2"><Box image={'../img/comida.svg'}title="Supermercado"/></Link>
         <Link  to="/#" className="eight-section-container-3"><Box image={'../img/volante.svg'}title="Accesorios para vehiculos"/></Link>
         <Link  to="/#"  className="eight-section-container-4"><Box image={'../img/futbol-socker.svg'}title="Deportes y Fitness"/></Link>
         <Link  to="/#"  className="eight-section-container-5"><Box image={'../img/ordenador.svg'}title="Computacion"/></Link>
         <Link  to="/#"  className="eight-section-container-6"><Box image={'../img/control.svg'}title="Consolas y Videojuegos"/> </Link>
         <Link  to="/#"  className="eight-section-container-7"><Box image={'../img/licuadora.svg'}title="Electrodomesticos"/></Link>
         <Link  to="/#" className="eight-section-container-8"><Box image={'../img/hipoteca.svg'}title="Inmuebles"/></Link>
         <Link  to="/#"  className="eight-section-container-9"><Box image={'../img/camiseta.svg'}title="Ropa Bolsas y Calzado"/></Link>
         <Link  to="/#" className="eight-section-container-10"><Box image={'../img/telefono.svg'}title="Celulares y telefonia"/></Link>
         <Link  to="/#" className="eight-section-container-11"><Box image={'../img/microfono.svg'}title="Electronica, Audio y Video"/></Link>
         <Link  to="/#" className="eight-section-container-12"><Box image={'../img/sillon.svg'}title="Hogar, Muebles y Jardin"/></Link>
         <Link  to="/#" className="eight-section-container-13"><Box image={'../img/lapiz-labial.svg'}title="Belleza y cuidado personal"/></Link>
         <Link  to="/#"  className="eight-section-container-14"><Box image={'../img/juguetes.svg'}title="Juegos y Juguetes"/></Link>
      </section>

      <section className="nine-section">
            <div className="nine-section-container-1">
                <img  src="../img/tarjeta-de-credito.svg" alt="" className="nine-section-img"/>
                <h1 className="nine-section-h1">Paga con tarjeta o efectivo</h1>
                <p className="nine-section-p">Con Mercado Pago, tienes meses sin intereses con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!</p>
                <Link className="container-a" to="#">Cómo pagar con Mercado Pago</Link>
            </div>
            <div className="nine-section-container-2">
               <img  src="../img/paquete.svg" alt="" className="nine-section-img"/>
               <h1 className="nine-section-h1">Envío gratis desde $ 299</h1>
               <p className="nine-section-p">Con solo estar registrado en Mercado Libre, tienes acceso envíos gratis en millones de productos seleccionados.</p>
               <Link className="container-a" to="#">Conoce más sobre este beneficio</Link>
           </div>
           <div className="nine-section-container-3">
               <img  src="../img/escudo-seguro.svg" alt="" className="nine-section-img" id="nine-section-escudo"/>
               <h1 className="nine-section-h1" id="section-h1">Seguridad, de principio a fin</h1>
               <p className="nine-section-p" id="section-p">¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
               <Link className="container-a" id="container-id" to="#">Cómo te protegemos</Link>
           </div>
       </section>
        </Fragment>
    )
}

export default content;

