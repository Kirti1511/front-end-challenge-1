import React from 'react'
import jsonData from './product.json';
import ProductImg from './product/ProductImg';
import ProductDetails from './product/ProductDetails';
import styles from './styles.css';

/**
 * Main page with Product Image and Details components.
 */
export default () => {
  const product = jsonData.product;
  return (
    <div style={styles.productDiv}>
      <ProductImg src={product.image} style={styles.inlineBlock}/>
      <ProductDetails details={product} style={styles.inlineBlock} />
    </div>
  )
}
