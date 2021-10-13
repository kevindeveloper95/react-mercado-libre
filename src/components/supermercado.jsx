import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import '../styles/supermercado.css';
import CardButton from './Props/CardButton';
import { Link } from 'react-router-dom'

const supermercado = () => {
    return (
        <Fragment>
         <section className="s-third-section">
    <h3 className="s-thirteen">Compra mas y paga menos</h3>
    <h3 className="s-fifteen">15% menos en tu carrito <br/>
        10% menos en tu carrito</h3>
    <p className="s-sixteen">"El descuento se acomula con otras promociones. Agrega productos con la leyenda "Hasta 15% OFF comprando mas</p>
    <button className="s-more-information">Mas informacion</button>
</section>


<section className="s-four-section">
   <h2 className="s-first-title">¡15% EXTRA COMPRANDO 15 O MAS PRODUCTOS!</h2>
    <Link className="s-sub-title" to="/#">Ver todas</Link>
    <CardButton
     price={48}
     img={"../img/cloro.jpg"}
     description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
    />
     <CardButton
     price={18}
     img={"../img/gel.png"}
     description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
    />
    <CardButton
     price={34}
     img={"../img/shampoo.png"}
     description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
    />
    <CardButton
     price={12}
     img={"../img/jabon.png"}
     description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
    />
    <CardButton
     price={43}
     img={"../img/desodorante.png"}
     description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
    />
</section>


<section className="s-five-section">
  <div className="s-container-publicity" id="container-publicity">
      <img src="../img/pasta.jpg" alt="" className="s-img-publicity2"/>
      <h2 className="s-h2-container">CUIDADO PERSONAL</h2>
  </div>
   <div className="s-container-publicity2" id="container-publicity2">
     <img  src="../img/cosas-del-hogar.jpg" alt="" className="s-img-publicity2"/>
     <h2 className="s-h2-container">CUIDADO DEL HOGAR</h2>
  </div>

  <div className="s-container-publicity3" id="container-publicity3"> 
     <img  src="../img/cosas-bebes.jpg" alt="" className="s-img-publicity2"/>
     <h2  className="s-h2-container">BEBES</h2>
  </div>
  <div className="s-container-publicity">
      <img src="../img/despensa.jpg" alt="" className="s-img-publicity2"/>
      <h2 className="s-h2-container">DESPENSA</h2>
  </div>
   <div className="s-container-publicity2">
     <img  src="../img/drink.jpg" alt="" className="s-img-publicity2"/>
     <h2  className="s-h2-container">BEBIDAS</h2>
  </div>

  <div className="s-container-publicity3"> 
     <img  src="../img/comida-perro.jpg" alt="" className="s-img-publicity2"/>
     <h2  className="s-h2-container">MASCOTAS</h2>
  </div>
</section>



<section className="s-four-section">
  <h2 className="s-first-title">SUPER DESCUENTOS</h2>
   <Link className="s-sub-title-1" to="/#">Ver todas</Link>
   <CardButton
     price={15}
     img={"../img/jal.jpg"}
     description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
    />
    <CardButton
     price={23}
     img={"../img/mayonesa.png"}
     description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
    />
     <CardButton
     price={28}
     img={"../img/clamato.png"}
     description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
    />
    <CardButton
     price={34}
     img={"../img/bimbo.png"}
     description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
    />
    <CardButton
     price={43}
     img={"../img/jamon.png"}
     description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
    />
</section>


        </Fragment>
    )
}

export default supermercado
