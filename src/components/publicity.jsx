import React from 'react'
import "../styles/publicity.css"
import { Fragment } from 'react/cjs/react.production.min'

const publicity = () => {
    return (
 <Fragment>
    <section className="second-section">
        <div className="slider">
            <ul> 
                <li><img className="publicity" src="../img/publicidad-cabecera.jpg" alt=""/></li>
                <li><img className="publicity" src="../img/liverpool.jpg" alt=""/></li>
                <li><img className="publicity" src="../img/publicidad.jpg" alt=""/></li>
                <li><img  className="publicity" src="../img/precio.jpg" alt=""/></li>
            </ul>
        </div>
    </section>
</Fragment>
    )
}

export default publicity
