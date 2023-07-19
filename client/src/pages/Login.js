import React, {useState} from 'react'
import './Login.css'
import Animage from '../images/p7.jpg'
import { loginFailure, loginStart, loginSuccess, signupFailure, signupStart, signupSuccess } from '../redux/userSlice';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import {auth, provider} from '../firebase.js'
import { signInWithPopup } from 'firebase/auth'





const Login = () => {
  const dispatch = useDispatch();

   const [data, setData] = useState({
       name:"",
       email:"",
       password:""

   })
   const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
   }

   const handleLogin = async(e) => {
    e.preventDefault();
    dispatch(loginStart())
    try {
      const {email, password} = data;
      const res = await axios.post("/auth/login", { email, password })
      dispatch(loginSuccess(res.data))

    } catch (error) {
      dispatch(loginFailure());
    }
    setData({
      name:"",
       email:"",
       password:""
    })
   }

   const handleSignup = async(e) => {
    e.preventDefault();
    dispatch(signupStart())
    try {
      const res = await axios.post("/auth/signup", data)
      console.log(res);
      dispatch(signupSuccess(res.data))
    } catch (error) {
      console.log(error);
      dispatch(signupFailure())
    }
    setData({
      name:"",
       email:"",
       password:""
    })
   }


    const [user, setUser] = useState(true)
    const changeUser = (e) => {
        if(user) setUser(false)
        else setUser(true)
    }


  const signInwithgoogle = async(e) => {
  //   dispatch(loginStart())
  //   await signInWithPopup(auth, provider)
  //   .then((result) => {
  //     axios.post("/auth/google", {
  //       name:result.user.displayName,
  //       email:result.user.email,
  //       img:result.user.photoURL,
  //     }).then((res)=> {
  //       dispatch(loginSuccess(res.data))
  //     })
  //     console.log(result);
  //   }).catch((error=>{
  //     dispatch(loginFailure());
  //   }))
  }  


  return (
    <div className='login'>

       {
        user ? (<>
       <div className="img"> <img className='bgimg' src={Animage}></img></div>

            <div className="box">
            <h2 className='log_head'>Login Here</h2>
            <form className="inputs">
                <input type="text" placeholder='emaill' name="email" autoComplete='off' value={data.email} onChange={handleChange} />
                <input type="password" placeholder='Password' name="password" autoComplete='off' value={data.password} onChange={handleChange} />
    
                <button className='login_btn'onClick={handleLogin} >Login</button>
            </form>
    
            <h4>Don't have an account <a onClick={()=>changeUser()}>Sign Up</a></h4>
            <button onClick={signInwithgoogle}>Sign In with GOOGLE</button>
          </div>
          </>
        ) : (
          <>
       <div className="img"> <img className='bgimg' src={Animage}></img></div>
          
            <div className="box">
            <h2 className='reg_head'>Register</h2>
            <form className="inputs">
                <input type="text" placeholder='Username' name="name" value={data.name} onChange={handleChange} /> 
                <input type="text" placeholder='E-mail' name="email" value={data.email} onChange={handleChange} />
                <input type="text" placeholder='Password' name="password" value={data.password} onChange={handleChange} />
                                                                                          {/* onChange={(e)=>handleChange(e)} */}
                <button className='login_btn' onClick={handleSignup}>Sign Up</button>
            </form>
            <h4>Already have an account <a onClick={()=>changeUser()}>Login</a></h4>
          </div>
          </>
        )
       }



  


    </div>
  )
}

export default Login
