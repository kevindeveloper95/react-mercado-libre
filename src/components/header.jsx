import React, { Fragment } from 'react'
import "../styles/header.css"
import { Link } from 'react-router-dom'


const header = (props) => {
    return (
        <Fragment>
            <header>
    <nav className="header">
<div className="first-section-header">
    <img loading="lazy" src="../img/mercado-libre.png" alt="" className="mercado-libre" />
</div>
<div className="second-section-header">
    
     <input  className="first-input" type="search" placeholder="Buscar productos marcas y mas..."/>
</div>
<img className="search"src="../img/buscador.svg" alt=""/>
<div className="third-section-header">
    <img loading="lazy" src="../img/flama.png" alt="" className="logo-flame"/>
    <Link className="anounce" to="#">Algo HOT esta llegando ¡Preparate!</Link>
    
</div>
<img loading="lazy" src="../img/marcador.svg" alt="" className="logo-ubication"/>
<div className="four-section-header">
    <Link className="one"to=""> Ingresa tu  <br/> codigo postal</Link>
</div>
<div className="five-section-header">
    <Link className="two" to="">Categorias</Link>
    <Link className="two" to="/ofertas">Ofertas</Link>
    <Link className="two" to="/historial">Historial</Link>
    <Link className="two" to='/supermercado'>Supermercado</Link>
    <Link className="two" to="/moda">Moda</Link>
    <Link className="two" to="/">Vender</Link>
    <Link className="two" to="/">Ayuda</Link>
</div>

<div className="six-section-header">   
    <Link className="three" to="/perfil-usuario">{props.name}</Link> 
    <Link className="three" to="/crear-cuenta">Crear cuenta</Link> 
    <Link className="three" to="/ingresa">Ingresa</Link>
    <Link className="three" to="/ingresa">Mis compras</Link>
    <img loading="lazy" src="../img/carrito.png" alt="" className="logo-car"/>
</div>     
</nav>
</header>
        </Fragment>
    )
}

export default header
