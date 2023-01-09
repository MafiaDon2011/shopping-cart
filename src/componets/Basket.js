import React from 'react'

export default function Basket(props) {
  const {cartItems, onAdd, onRemove} = props
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const taxPrice = itemPrice * 0.14;
  const ShippingPrice = itemPrice > 2000 ? 0 : 50
  var totalPrice = itemPrice + taxPrice + ShippingPrice

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <aside className='block col-1'>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty, add something to cart!</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className='col-2'>{item.name}</div>
          <div className='col-2'>
            <button onClick={() => onAdd(item)} className="add">+</button>
            <button onClick={() => onRemove(item)} className="remove">-</button>
          </div>
          <div className='col-2 text-right'>
            {item.qty} x {formatter.format(item.price)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className='row'>
            <div className='col-2'>Items Price</div>
            <div className='col-1 text-right'>{formatter.format(itemPrice)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>Tax Price</div>
            <div className='col-1 text-right'>{formatter.format(taxPrice)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>Shipping Price</div>
            <div className='col-1 text-right'>{formatter.format(ShippingPrice)}</div>
          </div>
          <div className='row'>
            <div className='col-2'><strong>Total Price</strong></div>
            <div className='col-1 text-right'><strong>{formatter.format(totalPrice)}</strong></div>
          </div>
          <hr />
          <div className='row'>
            <button onClick={() => alert('Implement Checkout')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  )
}
