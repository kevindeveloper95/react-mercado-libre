import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Link } from 'react-router-dom'


const card = (props) => {
    return (
        <Fragment>
          <div className="container" id="container-id3">
            <Link to={props.route}>
                <img loading="lazy" src={props.img} alt="" className="second-image" id="second-img"/>
                <h3 className="price">$ {props.price}</h3>
                <h5 className="promotion">12x $270.00 sin intereses</h5>
                <a className="travel"href="/#">Envio gratis</a>
                <img className="third-image" src="../img/free.svg" alt=""/>
                <p className="description">{props.description}</p>
                </Link>
            </div>
         </Fragment>
    )
}

export default card
