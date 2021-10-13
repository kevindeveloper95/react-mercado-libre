import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import '../styles/historial.css';

const historial = () => {
    return (
        <Fragment>
            <section className="history-content">
                <h2 className="record">Tu historial</h2>
                <h3 className="manage">Administrar</h3>
            </section>
                <div><p className="discovery"> Aún no viste publicaciones. <br/> ¡Empieza a descubrir todo lo que tenemos para ti!</p></div>
        </Fragment>
    )
}

export default historial
