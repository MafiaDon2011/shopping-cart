import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

  return (
    <div className='product'>
      <img className='small' src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div><p>{formatter.format(product.price)}</p></div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  )
}