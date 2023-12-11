import { useEffect, useState } from "react"
import axios from "axios";
const Post = () => {
    const [post,setPost] = useState([]);
  const URL= 'http://localhost:8000/posts/';
  const token = localStorage.getItem("token")

  const handleUpdate=()=>{

  }
  const handleDelete=({id})=>{
     axios.delete(`${URL}/delete/${id}`)
     .then((res)=> console.log(res))
     .catch((err)=>console.log(err))
  }
  useEffect(()=>{
     axios.get(URL,{
        headers:{
            authorization: `Bearer ${token}`
        }
     })
     .then((res)=>{
        
     setPost(res.data);
     console.log(post)
      })
  },[token])
  return (
    <div>
      {post.length>0 && 
      post.map((item)=>{
        <>
        <p key={item.id}>{item.title}</p>
        <p>{item.body}</p>
        <p>{item.device}</p>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={(item)=>handleDelete(item)}>Delete</button>
        </>
      })}
    </div>
  )
}

export default Post
