import React, { Fragment, useEffect, useState } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useDispatch, useSelector } from 'react-redux';
import { getbook } from '../../store/bookslice';

import './book.css';

const PostContainer = () => 
{
  
  let [selectedinfo, setinfo] = useState(null)
  const dispatch = useDispatch()
  const {loading,book ,error , bookinfo} = useSelector((state)=> state.bookslice)
   let rowdata = (row)=>
  {

    setinfo(bookinfo.find((e)=> e.id == row.id ))
    console.log( selectedinfo);
    
  }

  
  useEffect(() =>
  {
    dispatch(getbook())
  },[dispatch])

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList book={book} rowdata={rowdata}  loading = {loading}/>
        </div>
        <div className='col side-line'>
          <BookInfo  selectedinfo={selectedinfo}/>
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
