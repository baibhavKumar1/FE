import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
    const URL = "http://localhost:8000";

  const [formdata, setFormdata]= useState({
    "email":"",
    "password":""
  });
  const handleSubmit=(e)=>{
     e.preventDefault();
     axios.post(`${URL}/users/login`,formdata)
     .then((res)=>localStorage.setItem("token",res.data.Token))
     .catch((err)=>console.log(err))
     navigate('/posts')
  }
  
  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Email..." onChange={(e)=>{formdata.email= e.target.value}}/>
      <input type="text" placeholder="Password..." onChange={(e)=>{formdata.password= e.target.value}}/>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
