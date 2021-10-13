import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Link } from 'react-router-dom'

const CardButton = (props) => {
    return (
        <Fragment>
            <div className="s-container" id="container-1">
                <img  src={props.img} alt="" className="s-second-image"/>
                <h3 className="s-price">$ {props.price}</h3>
                <h5 className="s-promotion">12x $270.00 sin intereses</h5>
                <Link className="s-travel"to="/#">Envio gratis</Link>
                <img className="s-third-image" src="../img/free.svg" alt=""/>
                <p className="s-description">{props.description} </p>
                <button className="s-button-container"><Link to="/#" className="s-a-container">Agregar carrito</Link></button>
            </div>
        </Fragment>
    )
}

export default CardButton
