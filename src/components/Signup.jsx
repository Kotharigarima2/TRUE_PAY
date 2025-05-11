import React from 'react'
import { BrowserRouter as Router , Route , Link, Routes } from 'react-router-dom'
import Login from './Login'


function Signup() {
  return (
    <>





 <div className='row  '>
<div className='box '>
<p className='text-center pt-12 text-2xl text-blue-700 font-bold' >TruePay Logo</p>
<p className='text-center text-[14px] pt-3 font-semibold opacity-[.7] '>Sign in as</p>
<form action="" className='frm'>
   <p className='inpo '> <input className='inp1 font-bold' type="text" name="" id="" placeholder='Student' autoComplete='off' /> </p> 

   <p className='inpo '> <input className='inp1 font-bold' type="text" name="" id="" placeholder='Guardian' autoComplete='off' />  </p>
   
   <p className='inpo '> <input className='inp1 font-bold' type="text" name="" id="" placeholder='Vendor' autoComplete='off' />  </p>

   <p className='inpo '> <input className='inp1 font-bold' type="text" name="" id="" placeholder='Institute' autoComplete='off' />  </p>

   <p className='sub mt-9 text-center font-semibold text-[18px] cursor-pointer '>Continue</p>
</form>
<p className='text-center text-[13px] mt-3 cursor-pointer'>Already have account ?  <font color='#12B1FB' ><Link to='/'>Log in</Link> </font></p>

</div>
   </div>
    
 
    </>
  )
}

export default Signup