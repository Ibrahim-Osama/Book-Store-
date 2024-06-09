import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logintoggle } from '../store/authslice';

const Header = () => 
{
  let dispatch = useDispatch();
  let {error} = useSelector((store)=>store.bookslice)
  let {isAuth} = useSelector((state)=>state.authslice);

  

  return <>
 {error?<div className='alert alert-danger m-0' role='alert'>
    {error}
  </div>:   <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>

      <button className='btn btn-outline-primary' onClick={()=>
        {
         
          dispatch(logintoggle())
        }} type='submit'>
       {isAuth  ? 'log out': 'log in'}
      </button>
    </nav>} 
  
  </>
  
}

export default Header;
