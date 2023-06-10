import React, {useState} from 'react'
import './Login.css'
import Animage from '../images/p7.jpg'

const Login = () => {
   const [data, setData] = useState({
       username:"",
       email:"",
       password:""

   })
   const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    
    
   }


    const [user, setUser] = useState(false)
    const changeUser = (e) => {
        if(user) setUser(false)
        else setUser(true)
    }

  return (
    <div className='login'>
       <div className="img"> <img className='bgimg' src={Animage}></img></div>

       {
        user ? (
            <div className="box">
            <h2 className='log_head'>Login Here</h2>
            <form className="inputs">
                <input type="text" placeholder='Username' name="username" autoComplete='off' />
                <input type="password" placeholder='Password' name="password" autoComplete='off'/>
    
                <button className='login_btn'>Login</button>
            </form>
    
            <h4>Don't have an account <a onClick={()=>changeUser()}>Sign Up</a></h4>
          </div>
        ) : (
            <div className="box">
            <h2 className='reg_head'>Register</h2>
            <form className="inputs">
                <input type="text" placeholder='Username' name="username" value={data.username} onChange={handleChange} /> 
                <input type="text" placeholder='E-mail' name="email" value={data.email} onChange={handleChange} />
                <input type="text" placeholder='Password' name="password" value={data.password} onChange={handleChange} />
                                                                                          {/* onChange={(e)=>handleChange(e)} */}
                <button className='login_btn' onClick={(e)=>handleSubmit(e)}>Sign Up</button>
            </form>
            <h4>Already have an account <a onClick={()=>changeUser()}>Login</a></h4>
          </div>
        )
       }



  


    </div>
  )
}

export default Login
