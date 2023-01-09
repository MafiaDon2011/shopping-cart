import React from 'react'

export default function Header(props) {
    const {countCartItems} = props
  return (
    <header className='nav-head'>
        <div>
            <a href='#'>
                <h1>Small Shopping Cart</h1>
            </a>
        </div>
        <div className='nav-head-right'>
            <a href='#/cart'>
            
            Cart { ' ' }
            {countCartItems ? (
                <button className='badge'>{countCartItems}</button>
            ) : (
              ''
            )}

            </a> <a href='#/signin'>SignIn</a>
        </div>
    </header>
  )
}
