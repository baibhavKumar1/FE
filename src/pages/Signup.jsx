import { useState } from "react";
import axios from "axios";
const Signup = () => {
    const URL = 'http://localhost:8000'
    const [formdata, setFormdata]= useState({
        "name":"",
    "gender":"",
        "email":"",
        "password":""
      });
      const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`${URL}/users/register`,formdata).then((res)=>console.log(res))
        .catch((err)=>console.log(err))
     }
      
      return (
        <div>
          Signup
          <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name..." onChange={(e)=>{formdata.name=e.target.value}}/>
      <input type="text" placeholder="Gender..." onChange={(e)=>{formdata.gender=e.target.value}}/>
          <input type="text" placeholder="Email..." onChange={(e)=>{formdata.email= e.target.value}}/>
      <input type="text" placeholder="Password..." onChange={(e)=>{formdata.password= e.target.value}}/>
      <button type="submit">Submit</button>
          </form>
        </div>
      )
}

export default Signup
