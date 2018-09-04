import React from 'react';
import Sizes from './Sizes';

/**
 * Product Details Component.
 */
export default (props) => {
  return (
    <div style={props.style}>
      <h3>{props.details.brand}</h3>
      <h4>{props.details.category}</h4>
      <h1>{props.details.title}</h1>
      <p>{props.details.description}</p>
      <Sizes details={props.details} />
    </div>
  )
}