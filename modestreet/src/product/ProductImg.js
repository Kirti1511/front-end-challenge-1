import React from 'react'

/*
* Component displays the product image
*/
var ProductImg = (props) => {
  return (
    <div style={props.style}>
      <img src={props.src} alt="Not Available" style={{'width': '100%'}}/>
    </div> 
  )
}

export default ProductImg;