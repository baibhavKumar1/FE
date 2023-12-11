import { Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Post from '../pages/Post';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/signup' element= {<Signup/>}/>
        <Route path='/posts' element= {<Post/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
