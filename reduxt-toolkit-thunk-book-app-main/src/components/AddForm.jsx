import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertbook } from '../store/bookslice';

 

const Addform = () =>
{ 

  let {isAuth} = useSelector((state)=>state.authslice);

 let dispatch = useDispatch()

  let title = useRef(null)
  let price = useRef(null)
  let Description = useRef(null)

 let handleform=((e) =>
  {
     e.preventDefault();
    let data = 
    {
      id: Date.now().toString(),
      title:title.current.value,
      Description:Description.current.value,
      price:price.current.value
     
    }
    console.log(data);
    dispatch(insertbook(data))
     e.target.title.value = null
    e.target.price.value = null
     e.target.Description.value = null
  })

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleform}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input ref={title} type='text' className='form-control' id='title' required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input ref={price}  type='number' className='form-control' id='price' required />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
            ref={Description} 
              className='form-control'
              id='Description'
              rows='3'
              required
            ></textarea>
          </div>
          <button disabled={!isAuth} type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
