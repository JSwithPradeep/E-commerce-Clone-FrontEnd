import React from 'react'
import './buynow.css'
import Option from './Option'
import Subtotal from './Subtotal'
import Right from './Right'
import { Divider } from '@mui/material'
function Buynow() {
  return (
    <div className='buynow_section'>
        <div className='buynow_container'>
            <div className='left_buy'>
                <h1>Shoping Cart</h1>
                <p>Select all items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>
                <div className='item_containert'>
                    <img src='https://th.bing.com/th?id=OIP.xqnqn-6PrJmSjrl59qecJAHaM0&w=190&h=328&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' alt=''/>
                <div className='item_details'>
                    <h3>Mobile Sense 500 Smartwatch (Black Strap, Freesize)</h3>
                    <h3>Smart Watches</h3>
                    <h3 className='diiferentprice'>$4049.00</h3>
                    <p className='unusuall'>Usally dispatch in 8 days</p>
                    <p>Eligible for FREE Shipping</p>
                    <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo"/>
                    <Option/>
                </div>
                <h3 className='item_price'>$4049.00</h3>
              </div>
            <Divider/>
            <Subtotal/>
            
            </div>
            <Right/>
           </div>
         </div>
  )
}

export default Buynow