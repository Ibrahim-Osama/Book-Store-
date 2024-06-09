import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const BookInfo = ({selectedinfo}) => 
{



  return (
    <Fragment>
      <h2>Book Details</h2>
      {selectedinfo ? 
        <div>
        <p className='fw-bold'>Title {selectedinfo.title}:</p>
        <p className='fw-light'>Description {selectedinfo.Description}:</p>
        <p className='fst-italic'>price {selectedinfo.price}:</p>
        <p className='fst-italic'>By {selectedinfo.Authername}:</p>
      </div>:   <div className='alert alert-secondary' role='alert'>
        There is no post selected yet. Please select!
      </div>
    }
      
     
    </Fragment>
  );
};

export default BookInfo;
