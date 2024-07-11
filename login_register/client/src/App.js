import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {SignUp} from './pages/signup';
import { Login } from './pages/login';
import { Home } from './pages/home';
import {createBrowserRouter,createRoutesFromElements,Route,NavLink,Outlet, RouterProvider} from 'react-router-dom';

function App() {
  
  const rout=createBrowserRouter(
    createRoutesFromElements(
       <Route  element={<Root />}>
          <Route index element={<Home />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} /> 
       </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={rout} />
    </div>
  );
}

export default App;

const Root =()=>{
  return(
    <>
      <div className='nav-container'>
        <NavLink to='/' className='navlink'>Home</NavLink>
        <NavLink to='/login' className='navlink'>Login</NavLink>
        <NavLink to='/signup' className='navlink'>SignUp</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
