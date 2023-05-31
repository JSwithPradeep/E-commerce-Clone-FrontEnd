import React from 'react'
import './cart.css';
import { Divider } from '@mui/material';
const Cart = () => {
  return (
    <div className='cart_section'>
      <div className='cart_container'>
        <div className='left_cart'>
          <img src='https://th.bing.com/th/id/OIP.3c6AQJ1njX-n51prbcFtNwHaFj?w=185&h=139&c=7&r=0&o=5&pid=1.7' alt='' />
          <div className='cart_btn'>
            <button className='cart_btn1'>Add To Cart</button>
            <button className='cart_btn2'>By Now</button>
          </div>
        </div>
        <div className='right_cart'>
          <h3>Fitness Gear</h3>
          <h4>Pigeon FAVOURITE Electric Kettle(1.5 L, Sliver, Black) </h4>
          <Divider />
          <p className='mrp'>M.R.P : $195</p>
          <p>Deal of the Day : <span style={{ color: "#b12704" }}>$625</span></p>
          <p>You save : <span style={{ color: "#b12704" }}>$450(50%)</span></p>
          <div className='discount_box'></div>
          <h5>Discount: <span style={{color:"#111"}}>Extra 10% Off</span></h5>
          <h4>Free Delivery :<span style={{color:"#111",fontWeight:600}}>OCT 10 - 23</span>Details</h4>
          <p>Free Delivery :<span style={{color:"#111",fontWeight:600}}>Tomorrow 11am</span></p>
      
        <p className='description'>About The Iteam :<span style={{color:"#565959",fontSize:14,fontWeight:500,letterSpacingSpacing:"0"}}>A product description is the marketing copy that explains what a product is and why it’s worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they’re compelled to buy.
        </span></p> 
       </div>
      </div>
    </div>
  )
}

export default Cart;