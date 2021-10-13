import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Link } from 'react-router-dom'

const BoxContent = (props) => {
    return (
        <Fragment>
        <h6 className="h6-publicity" >{props.h6}</h6>
        <h1 className="h1-publicity">{props.h1} <br/>{props.br}</h1>
            <button className="button-publicity"><Link to="#">Ver mas</Link></button>
            <img  src={props.imagenes} alt="" className="img-publicity2"/>
        </Fragment>
    )
}

export default BoxContent
