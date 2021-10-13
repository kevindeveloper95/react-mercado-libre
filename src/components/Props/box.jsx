import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'

export const box = (props) => {
    return (
        <Fragment>
            <img className="eight-section-image" src={props.image} alt=""/>
            <h4 className="eight-section-h3">{props.title}</h4>
        </Fragment>
    )
}

export default box;
