import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
      <Link to='/posts'>Post</Link>
    </div>
  )
}

export default Navbar
