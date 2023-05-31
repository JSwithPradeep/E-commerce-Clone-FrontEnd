import React, { useState } from 'react'
import './sign.css';
import { NavLink } from 'react-router-dom';

const Signin = () => {
    const[logdata,setData]=useState({
        email:"",
        password:""
    });

    console.log(logdata)
    const adddata =(e)=>{
        const {name,value} = e.target;

        setData(()=>{
            return{
                ...logdata,
                [name]:value
            }
        })
    }
  return (
<>
<section>
    <div className='sign_container'>
        <div className='sign_header'>
            <img src='./img/OIP (1).jfif' alt="amzonlogo"/>
            <div className='sign_form'>
                <form>
                    <h1>Sign-IN</h1>
                    <div className='form_data'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' 
                        onChange={adddata} value={logdata.email}
                        name='email' id='email'/>
                    </div>
                   
                    <div className='form_data'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' 
                        onChange={adddata} value={logdata.password}
                        name='password' id='password'/>
                    </div>
                    <button className='signin_btn'>Continue</button>
                </form>
            </div>
            <div className='create_accountinfo'>
                <p>New To Amazon</p>
              <NavLink to="/signup"><button type='submit' className='signin_btn'>Create Your Amazon acount</button></NavLink>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Signin