import React, { useState } from 'react';
import "../styles/loginsignup.css"

const Loginsignup = () => {

    const[action,setAction]=useState("Signup");
  return (
    <div className=''page>
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"? <div></div>: <div className='input'>
            <i class="fa fa-user" aria-hidden="true"></i>
                <input type="text" placeholder='Name'/>
            </div>}

            

           
            <div className='input'>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <input type="email"placeholder='Email id'/>
            </div>
            <div className='input'>
                <i class="fa fa-key" aria-hidden="true"></i>    
                <input type="password"placeholder='Password'/>
            </div>
        </div>


        {action==="Signup"? <div> </div> :<div className='forgot-password'> Forgot Password? <span> Click Here</span></div>} 

    
     

        

        <div className='submit-container'>
       
     <div className={action === "Login" ? "submit gray" : "submit"}onClick={() => { setAction("Signup") }}> Sign up </div>
      <div className={action === "Signup" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}> Login </div>
      


        </div>
        
      
    </div>
    </div>
  )
}

export default Loginsignup
