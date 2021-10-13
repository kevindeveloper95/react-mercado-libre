import React from 'react'
import "../styles/footer.css"
import { Link } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min'

const footer = () => {
    return (
        <Fragment>
            
            <footer className="footer">
              
              <div className="footer-content">
                
                <Link className="footer-a" to="/#">Trabaja con nosotros</Link>
                <Link className="footer-a"to="/#">Terminos y condiciones</Link>
                <Link className="footer-a"to="/#">Como cuidamos tu privacidad</Link>
                <Link className="footer-a"to="/#">Ayuda</Link>
                <p className="footer-text-1">Copyright © 1999-2021 DeRemate.com de México S. de R.L. de C.V</p>
                <p className="footer-text-2">Insurgentes Sur 1602 Piso 9 Suite 900, Crédito Constructor Benito Juarez, 03940 Ciudad de México, CDMX, Mexico</p>  
              </div>          
            </footer>
        </Fragment>
    )
}

export default footer
