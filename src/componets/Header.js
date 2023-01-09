import React from 'react'

export default function Header(props) {
    const {countCartItems} = props
  return (
    <>
    <header className='nav-head'>
        <div>
            <a href='#'>
                <h1>Small Shopping Cart</h1>
            </a>
        </div>
        <div className='nav-head-right'>
            <a className="cart" href='#/cart'>
            
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> { ' ' }
            {countCartItems ? (
                <button className='badge'>{countCartItems}</button>
            ) : (
              ''
            )}

            </a> <a href='#/signin'>SignIn</a>
        </div>
    </header>
    </>
  )
}
