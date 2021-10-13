import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import '../styles/ingresa.css';
import { Link } from 'react-router-dom'

const ingresa = () => {
    return (
        <Fragment>
            <section className="i-section-ingresar">
                <div className="i-container-ingresar">
                <p className="i-p1-ingresar">¡Hola! Para seguir, ingresa tu teléfono, e‑mail o usuario</p>
                <p className="i-p2-ingresar">Teléfono, e-mail o usuario</p>
                <input className="i-input-ingresar"type="email"/>
                <button className="i-button-ingresar" ><Link className="a-ingresar" to="/#">Continuar</Link></button>
                <button className="i-second-button-ingresar"><Link className="a-ingresar"to="/#">Crear cuenta</Link></button>
            </div>
            </section>
                <p className="i-privacity">Protegido por reCAPTCHA <Link to="/#">Privacidad-Condiciones</Link></p>
        </Fragment>
    )
}

export default ingresa
