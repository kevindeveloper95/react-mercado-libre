import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import Products from '../products'

const PlayeraPolo = () => {
    return (
        <Fragment>
            <Products
            img1={'../img/playera.png'}
            img2={'../img/playera-roja.png'}
            img3={'../img/playera-negra.png'}
            img4={'../img/playera-mixta.png'}
            description="Playera Polo Garanty Hombre Manga Corta varios colores"
            price={230}
            />   
        </Fragment>
    )
}

export default  PlayeraPolo
