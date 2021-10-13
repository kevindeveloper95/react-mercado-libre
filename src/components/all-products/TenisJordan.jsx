import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import Products from '../products'

const TenisJordan = () => {
    return (
        <Fragment>
            <Products
            img1={'../img/jordan-rojo.png'}
            img2={'../img/jordan-perfil.png'}
            img3={'../img/jordan-lado.png'}
            img4={'../img/jordan-negro.png'}
            description="Tenis_air_jordan_"
            price={1500}
            />   
        </Fragment>
    )
}

export default  TenisJordan