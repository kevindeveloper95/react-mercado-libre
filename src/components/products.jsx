import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Card from './Props/card';
import { Link } from 'react-router-dom';


const products = (props) => {
    return (
        <Fragment>
            <div className="r-first-container-header">
    <p className="r-promotions-header">También puede interesarte:<Link to="/#">xiaomi band 4  -</Link><Link to="/#">smart watch xiaomi -</Link> <Link to="/#"> smartwatch -</Link> <Link to="/#"> galaxy watch active 2 -</Link><Link to="/#"> iwatch apple -</Link> <Link to="/#"> reloj huawei</Link></p>
    <p><Link className="r-list" to="/#">Volver al listado</Link> |<Link className="r-accessories" to="/#">Celulares y Telefonia</Link> - <Link className="r-accessories" to="/#">Smartwatches y Accesorios</Link> - <Link className="r-accessories" to="/#">Smartwatches</Link> - <Link className="r-accessories" to="/#">Xiaomi</Link> - <Link className="r-accessories" to="/#">Mi Smart Band 5</Link></p>
</div>
<p className="r-to-share"><Link to="/#">Compartir</Link><Link to="/#">Vender uno igual</Link></p>
<section className="r-full-section">
<section className="r-first-section-product">
    <div className="r-container-pictures">
      <img className="r-first-image-product"src={props.img1} alt=""/>
      <img className="r-second-image-product"src={props.img2} alt=""/>
      <img className="r-third-image-product"src={props.img3} alt=""/>
      <img className="r-fourth-image-product"src={props.img4} alt=""/>
    </div>
    <div className="r-container-description-product">
       <p className="r-new">Nuevo | 111907 vendidos </p>
       <h3 className="r-title-product">{props.description}</h3>
       <Link to="/#"> <p className="r-p-product" id="p-product-1"> 0 opiniones</p></Link>
       <img className="r-mercado" src="../img/mercado.png" alt=""/>
       <p className="r-smartphone"> <strong  className="r-logo-mercado"> RECOMENDADO</strong> en smartwatches</p>
       <p className="r-price-product">${props.price}</p>  <p className="r-price-promotion"><br/> IVA incluido</p> 
       
        <Link className="r-a-product" id="a-product-1" to="/#">Ver medios de pago</Link>
        <p className="r-you-now">Lo que tienes que saber de este producto</p>
        <div className="r-p2-product">
            <li className="r-list-p">Pantalla táctil AMOLED de 1.1".</li>
            <li className="r-list-p">Recibe notificaciones de WhatsApp.</li>
            <li className="r-list-p">Reproduce audio.</li>
            <li className="r-list-p">Resiste hasta 50m bajo el agua.</li>
            <li className="r-list-p">Batería de 14 días de duración.</li>
            <li className="r-list-p">Conectividad por bluetooth.</li>
            <li className="r-list-p">Capacidad de la memoria interna de 16MB.</li>
            <li className="r-list-p">Sensores incluidos: acelerómetro, giroscopio, sensor óptico de frecuencia cardíaca ppg.</li>
            <li className="r-list-p">Correa intercambiable por otros colores, no incluidos en el producto.</li>
        </div>
        <Link className="r-a2-product" to="/#">ver caracteristicas</Link>
        <p id="p-hide" className="r-p2-product">opciones de compra <br/><Link className="r-a-product" to="/#">53 productos nuevos desde $586.99 </Link></p>

      


        
    </div>
    <div className="r-container-buy-producto">
        <img className="r-mercado-picture" src="../img/camion.svg" alt=""/>
        <Link className="r-shipping-product-1" to="/#">Llega gratis mañana <img className="r-mercado-picture" src="../img/destello.svg" alt=""/>FULL</Link>
        <p className="r-p-product">Comprando dentro de los próximos  19 min</p>
        <Link className="r-a-product" to="/#"> Enviar a Puerto Vallarta 48310</Link>
        <img className="r-mercado-store" src="../img/tienda.svg" alt=""/>
        <p className="r-shipping-product">Retíralo gratis a <strong> partir del jueves</strong> en correos y otros puntos <br/> <Link className="r-a-product" to="/#">Ver en el mapa</Link></p>
       
        <p className="r-p2-product" id="p2-product-1"> Tienda oficial <Link className="r-a-product" id="a-1" to="/#">Xiaomi</Link></p>
        <p className="r-p2-product">109,985 ventas</p>
        <p>Stock disponible</p>
        <Link className="r-a-product" to="">Cantidad:<strong> 1 unidad</strong><Link className="r-p-product">(6111 disponibles)</Link></Link>
        <p className="r-p-product">Puedes comprar hasta 10 unidades</p>
        <button className="r-button-ingresar" ><Link  to="/#">Continuar</Link></button>
        <button className="r-second-button-ingresar"><Link to="/#">Crear cuenta</Link></button>
    <div className="r-container-Shipping-producto">
        
         <p className="r-p-mercado"> <img className="r-mercado-lightning" src="../img/destello.svg" alt=""/><strong>FULL</strong> te da envío gratis Agrega a tu carrito 299 en productos Full y recíbelos <br/> gratis.</p>  
         <img className="r-mercado-truck" src="../img/camion.svg" alt=""/>
    </div>
         <p className="r-p1-product"> <Link className="r-a1-product" to="/#">Devolucion gratis.</Link>Tienes 30 días desde que lo recibes.<img className="r-icons-1"src="../img/flecha-izquierda.svg" alt=""/></p>
         <p className="r-p1-product"> <Link className="r-a1-product" to="/#">Compra Protegida,</Link>recibe el producto que esperabas o te devolvemos tu dinero.<img className="r-icons-2"src="../img/escudo.svg" alt=""/></p>
         <p className="r-p1-product"> <Link className="r-a1-product" to="/#">Devolucion gratis.</Link>Tienes 30 días desde que lo recibes.<img className="r-icons-3"src="../img/trofeo.svg" alt=""/></p>
         <p className="r-p1-product"> <Link className="r-a1-product" to="/#">Mercado Puntos.</Link>Sumas 40 puntos.<img className="r-icons-4"src="../img/liston.svg" alt=""/></p>
    </div>
</section>

{/* <!-- CODIGO RECICLADO DE CONTAINER  -->
 */}


 
<section className="r-four-section">
    <h2 className="r-first-title">Quienes vieron este producto también compraron</h2>
    <div className="r-container">
      <Card img={'../img/reloj-apple.png'}price={3240}description={'reloj inteligente marca apple'}/>
    </div>
    <div className="r-container">
       <Card img={'../img/telefono-pocophone.png'}price={7560}description={'POCOPHONE F1 memoria de 128gb snapdragon 845'}/>
    </div>
    <div className="r-container">
       <Card img={'../img/audifonos-deportivos.png'} price={467} description={'audifonos deportivos resistente al agua '}/>
    </div>
</section>






<section className="r-second-section-product">
<div className="r-first-container-product">
  <h3 className="r-characteristic">Características de Xiaomi Mi Smart Band 5 XMSH10HM 1.1 "</h3>
  <p className="r-description-product"><img className="r-logo-description" src="../img/logo-smartphone.svg" alt=""/>Tipo de pantalla: AMOLED</p>
  <p className="r-description-product"><img className="r-logo-description" src="../img/bateria-llena.svg" alt=""/>Duración de la batería: 14 días</p>
  <p className="r-description-product"><img className="r-logo-description" src="../img/resistente-al-agua.svg" alt=""/>Es resistente al agua: Sí</p>
  <p className="r-description-product-2"><img className="r-logo-description" src="../img/toque.svg" alt=""/>Con pantalla táctil: Sí</p>
  <p className="r-description-product-2"><img className="r-logo-description" src="../img/marcador-de-posicion.svg" alt=""/>Con GPS: No</p>
  <p className="r-description-product-2"><img className="r-logo-description" src="../img/bluetooth.svg" alt=""/>Con Bluetooth: Sí</p>
  <p className="r-a-description" id="see-more"><Link className="r-a-description"to="/#">Ver más características</Link></p>
  


<h3 className="r-product-description-title">Descripción</h3>
<p className="r-description-first">Con 10 años de trayectoria, Xiaomi se posiciona como uno de los líderes indiscutidos en el mercado de los smartwatches. Sus productos se destacan por la calidad, el diseño sencillo y muy buenas prestaciones. La Mi Band tiene todo lo necesario para acompañarte en tu rutina.</p>
<p className="r-description-first">La Mi Band 5 es un salto de evolución respecto a sus predecesoras. Sin perder su versatilidad, la nueva pulsera inteligente de Xiaomi presenta mejoras que la hacen mucho más cómoda y funcional. Una de las principales es el cargador magnético: basta con acercar el extremo de carga al dispositivo y comenzará a llenarse la batería. Por otro lado, su pantalla OLED presenta colores bien definidos y buen contraste, para visualizar con facilidad los datos incluso con luz solar directa. Y si hablamos de funcionalidades deportivas y de salud esta nueva versión se destaca de las demás por su precisión.</p>
</div>

<div className="r-second-container-product">
<h4 className="r-h4-ag-web">Información de la tienda</h4>
<img className="r-ag-web-img" src="../img/ag-web.jpg" alt=""/>
<p className="r-ag-web-p"> <strong className="r-ag">AG-WEB</strong>  <br/> Tienda oficial de Mercado Libre</p>
<img className="r-medalla" src="../img/medalla.svg" alt=""/>
<p className="r-p-mercado-lider"> <strong className="r-strong-mercado-lider"> MercadoLíder Platinum</strong> <br/> ¡Es uno de los mejores del sitio!</p>
<ul>
   <div className="r-color-1"></div> 
   <div className="r-color-2"></div> 
   <div className="r-color-3"></div> 
   <div className="r-color-4"></div> 
   <div className="r-color-5"></div> 
</ul>
    <p className="r-days-buying"><strong className="r-buying">108895</strong> <br/> Ventas en los <br/> últimos 60 días</p>
    <p className="r-attention"><img className="r-image-buy" src="../img/comentario.svg" alt=""/> <br/> Brinda buena atención</p>
    <p className="r-time"><img className="r-image-buy" src="../img/reloj-de-bolsillo.svg" alt=""/> <br/> Entrega sus productos a tiempo  </p>
<Link className="r-ver-mas"to="/#">Ver más datos de AG-WEB</Link>
</div>


<div className="r-third-container-product">
<h3 className="r-h4-ag-web">Otras opciones de compra</h3>
</div>
<div className="r-fourth-container-product">
    <h5 className="r-h5-price">$606  <span className="r-best-price">Meses sin intereses</span></h5>
    <li className="r-list-mercado-1">12 meses de 50 pesos sin intereses</li>
    <li className="r-list-mercado-2">Llega gratis entre el lunes y el jueves 17 de junio</li>
    <li className="r-list-mercado-2">Retíralo gratis en correo y otros puntos entre el viernes y el martes</li>
    <p className="r-information-buy">Vendido por<Link to="/#" className="r-a-information">EN GRUPOCOMERCIAL</Link></p>
    <p className="r-sell">5,908 ventas</p>
    <button className="r-button-comprar" ><Link  to="/#">Comprar ahora</Link></button>
    <button className="r-second-button-comprar"><Link to="/#">Agregar carrito</Link></button> 
</div>

<div className="r-five-container-product">
    <h5 className="r-h5-price">$585<span className="r-best-price" id="the-best-price">Mejor precio</span></h5>
    <li className="r-list-mercado-1">12 meses de 58 pesos sin intereses</li>
    <li className="r-list-mercado-2">Llega gratis el sábado</li>
    <li className="r-list-mercado-2">Retíralo gratis en correo y otros puntos entre el viernes y el miércoles 16 de junio</li>
    <p className="r-information-buy">Vendido por<Link to="/#" className="r-a-information">COMERCIOFIVEBYFIVE</Link></p>
    <p className="r-sell">1,619 ventas</p>
    <button className="r-button-comprar" ><Link  to="/#">Comprar ahora</Link></button>
    <button className="r-second-button-comprar"><Link to="/#">Agregar carrito</Link></button>  
</div>
<div className="r-six-container-product" >
    <Link to="/#" className="r-see-more">Ver más opciones desde $585</Link>
</div>

<div className="r-seven-container-product">
    <p className="r-title-pay">Medios de pago</p>
    <p className="r-credit-card">Tarjetas de crédito</p>
    <p className="r-li-pay">¡Paga en hasta 12 meses!</p>
    <p><img className="r-image-form-first" src="../img/mastercard.png" alt=""/><img className="r-image-form-pay" src="../img/visa.png" alt=""/><img className="r-image-form-pay" src="../img/paypal.png" alt=""/></p>
    <p className="r-p-months">Hasta 12 mensualidades sin tarjeta</p>
    <img className="r-mercado-compra" src="../img/mercado-compra.png" alt=""/>
    <p className="r-debit-card">Tarjetas de débito</p>
    <p><img className="r-image-form-first" src="../img/bancomer.png" alt=""/><img className="r-image-form-pay" src="../img/visa.png" alt=""/><img className="r-image-form-pay" src="../img/paypal.png" alt=""/></p>
    <p><img className="r-image-form-first" src="../img/mastercard.png" alt=""/></p>
    <p className="r-debit-card">Efectivo</p>
    <img className="r-image-form-first" src="../img/oxxo.png" alt=""/>
    <p><Link className="r-a-pay" to="/#">Conoce otros medios de pago</Link></p>
</div>


</section>
</section>      


        </Fragment>
    )
}

export default products
