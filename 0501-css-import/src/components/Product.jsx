import React from 'react'
import styles from '../styles/Produto.module.css'

function Product() {
    // console.log(styles)
  return (
    <div>
        <h4 className={styles.titulo}>Name Product</h4>
        <p>Price: $0</p>
        <button className={styles.button}>Buy</button>
    </div>
  )
}

export default Product