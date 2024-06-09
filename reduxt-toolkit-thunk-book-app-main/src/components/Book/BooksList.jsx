import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletebook } from '../../store/bookslice';

const BooksList = ({loading,book , rowdata}) =>
 {
  
  

  let dispatch = useDispatch()
  let {isAuth} = useSelector((state)=>state.authslice);
  console.log(isAuth);
  return (
   
    <div>
      <h2>Books List</h2>
      {loading ? 'loading...' :
      <ul className='list-group'>
        {book.length >0 ? book?.map((item,index)=>
        {
         return <li key={index} className='list-group-item d-flex  justify-content-between align-items-center'>
          <div>{item.title}</div>
          <div className='btn-group' role='group'>
            <button type='button' onClick={()=>
              {
                rowdata(item)
              }}  className='btn btn-primary'>
              Read
            </button>
            <button type='button' onClick={()=>
              {
                console.log(item.id);
                dispatch(deletebook(item.id))
              }} className='btn btn-danger' disabled={!isAuth}>
              Delete
            </button>
          </div>
        </li>
        }):<>
          <h5>no book ava </h5>
        </>}
      </ul>}
   
    </div>
  );
};

export default BooksList;
