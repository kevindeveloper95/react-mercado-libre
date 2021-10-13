import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import Products from '../products'

const ComputadoraHp = () => {
    return (
        <Fragment>
            <Products
            img1={'../img/laptop.png'}
            img2={'../img/laptop-lado.png'}
            img3={'../img/laptop-enfrente.png'}
            img4={'../img/laptop-volteado.png'}
            description="laptop HP 240 G7 plateado ceniza oscuro 14, Intel Celeron N4020 4GB de RAM 500GB HDD, Intel UHD Graphics 600 1366x768px Windows 10 Home"
            price={12000}
            />   
        </Fragment>
    )
}

export default ComputadoraHp
