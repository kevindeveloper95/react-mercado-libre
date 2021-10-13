import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Link } from 'react-router-dom'

const BigCard = (props) => {
    return (
    <Fragment>
<section className="o-four-section">
  <Link className="o-container-1" to="#">
    <img  src={props.img} alt="" className="o-second-image"/>
    <strong className="o-offer">OFERTA DEL DIA</strong>
    <h3 className="o-price">$ {props.price}</h3>
    <h5 className="o-promotion">12x $270.00 sin intereses</h5>
    <a className="o-travel"href="/#">Envio gratis</a>
    <img className="o-third-image" src="../img/free.svg" alt=""/>
    <p className="o-description">{props.description}</p>
</Link>
<Link className="o-container-2" to="#">
  <img   src={props.img2} alt=""className="o-three-image"/>
  <strong className="o-offer">OFERTA DEL DIA</strong>
  <h3 className="o-price">$ {props.price2}</h3>
    <h5 className="o-promotion">12x $270.00 sin intereses</h5>
    <a className="o-travel" href="/#">Envio gratis</a>
    <img className="o-third-image" src="../img/free.svg" alt=""/>
    <p className="o-description">{props.description2} </p>
  </Link>

<Link  className="o-container-3" to="#">
  <img  src={props.img3} alt=""className="o-four-image" />
  <strong className="o-offer">OFERTA DEL DIA</strong>
  <h3 className="o-price">$ {props.price3}</h3>
    <h5 className="o-promotion">12x $270.00 sin intereses</h5>
    <a className="o-travel" href="/#">Envio gratis</a>
    <img className="o-third-image" src="../img/free.svg" alt=""/>
    <p className="o-description">{props.description3} </p>   
  </Link>
</section>
            </Fragment>
           
    )
}

export default BigCard
