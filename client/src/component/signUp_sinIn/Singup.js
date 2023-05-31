import React, { useState } from 'react'
import './sign.css'
import { NavLink } from 'react-router-dom'

const Singup = () => {
  const [udata,setUdata] = useState({
    fname:"",
    email:"",
    mobile:"",
    password:"",
    apassword:""
  });
console.log(udata)


  return (
    <div className='sign_container'>
      <div className='sign_header'>
        <img src='./img/OIP (1).jfif' alt="amzonlogo" />
        <div className='sign_form'>
          <form>
            <h3>Sign-Up</h3>
            <div className='form_data'>
              <label html for="name">Your Name</label>
              <input type='text'
              onChange={(e)=>setUdata({...udata,fname:e.target.value})} value={udata.fname}
              name='fname' id='fname' />
            </div>
            <div className='form_data'>
              <label html for="email">Email</label>
              <input type='text'
              onChange={(e)=>setUdata({...udata,email:e.target.value})} value={udata.email}
              name='email' id='email' />
            </div>
            <div className='form_data'>
              <label htmlFor='mobile'>Mobile</label>
              <input type='text'
              onChange={(e)=>setUdata({...udata,mobile:e.target.value})} value={udata.mobile}
              name='mobile' id='' />
            </div>
            <div className='form_data'>
              <label html for="password">Password</label>
              <input type='password'
              onChange={(e)=>setUdata({...udata,password:e.target.value})} value={udata.password}
              name='password' id='password' placeholder='At least 6 Char' />
            </div>
            <div className='form_data'>
              <label html for="password">Password Again</label>
              <input type='password'
              onChange={(e)=>setUdata({...udata,apassword:e.target.value})} value={udata.apassword}
              name='apassword' id='apassword' />
            </div>
            <button className='signin_btn'>Continue</button>
            <div className='signin_info'>
              <p>Allready have a account</p>
              <NavLink to ="/login">Signin</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Singup