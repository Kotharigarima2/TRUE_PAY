import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Signup from './Signup';

function Login() {
  return (
    <>
  
<Router>
  
  <Routes>
  <Route path='/Signup' element={<Signup/>} />
  </Routes>

  
 

<div className='row  '>
<div className='box '>
<p className='text-center pt-12 text-2xl text-blue-700 font-bold' >TruePay Logo</p>
<form action="" className='frm'>
   <p className='inpo '> <input className='inp1 ' type="text" name="" id="" placeholder='Phone no / E-mail ' autoComplete='off' /> <button className=' btn-a text-[10px]  shadow' >Get OTP</button> </p>
   <p className='text-center gap-4 flex mt-8 pl-2'><span className='bg-zinc-700 w-10 h-10 otph shadow font-bold p-2 m-2'></span> <span  className='bg-zinc-700 w-10 h-10 otph shadow font-bold p-2 m-2'></span> <span className='bg-zinc-700 otph shadow font-bold p-2 m-2 w-10 h-10'></span> <span className='bg-zinc-700 otph w-10 shadow font-bold p-2 m-2 h-10'></span></p>
   <p className='sub mt-9 text-center font-semibold text-[18px] cursor-pointer '>Log in</p>
</form>
<p className='text-center text-[14px] mt-3 cursor-pointer'>Don't have account? <font color='#12B1FB' > <Link to="/Signup">Create One</Link> </font></p>


</div>
   </div>
   
   </Router>
    </>
  )
}

export default Login