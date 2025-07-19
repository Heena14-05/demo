import './App.css';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {useAuth} from './components/AuthContext';

function App() {
  const{isAuthenticated} = useAuth()
  return (
  <BrowserRouter>
  <div className='App'>
      
      <div className='navbar'>
        {isAuthenticated ? <>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link> </>: <>
        <Link to='/login'>Login</Link></>}
      </div>
     <Routes>  
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/users' element={<Users/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
     </Routes> 
  
  
  
  </div>
  </BrowserRouter>
  );
}

export default App;
