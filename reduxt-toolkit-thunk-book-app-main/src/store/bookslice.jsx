import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getbook = createAsyncThunk('book/getbook', async(_,thunkapi)=>
{
    let{rejectWithValue} = thunkapi 
  try
  {
    
    let data = await axios.get('http://localhost:3001/books')
    
    return data.data
  }
  catch (error)
  {
    
    
        console.log(error);
        return rejectWithValue(error.message)
    
  }

    
})
export let insertbook = createAsyncThunk('book/insertbook', async(bookdata,thunkapi)=>
{
    let{rejectWithValue ,getState} = thunkapi 
  try
  {
    bookdata.Authername= getState().authslice.name
    let data = await axios.post('http://localhost:3001/books',bookdata,
    {
      headers: {
        'Content-Type': 'application/json'
      }

    })
    
    return data.data
  }
  catch (error)
  {
    
    
        console.log(error);
        return rejectWithValue(error.message)
    
  }

    
})
export let deletebook = createAsyncThunk('book/deletebook', async(bookid,thunkapi)=>
{
    let{rejectWithValue } = thunkapi 
  try
  {
   
    let data = await axios.delete(`http://localhost:3001/books/${bookid}`,
    {
      headers: {
        'Content-Type': 'application/json'
      }

    })
    
    return data.data
  }
  catch (error)
  {
    
    
        console.log(error);
        return rejectWithValue(error.message)
    
  }

    
})

 let bookslice = createSlice(
    {
        name: 'book',
        initialState:{book:[],loading:false , error:null , bookinfo:[]},
        reducers:{},
        extraReducers:{
            [getbook.pending]:(state, action)=>
            {
             
              state.loading = true;
              console.log(action);
            },
            [getbook.fulfilled]:(state, action)=>{
              state.loading = false;
              state.book = action.payload;
              state.bookinfo = action.payload
              console.log(action.payload)
            },
            [getbook.rejected]:(state, action)=>
            {
              state.error = action.payload;
              state.loading = false;
              console.log(action)
            },
            [insertbook.pending]:(state, action)=>
            {
             
              state.loading = true;
              console.log(action);
            },
            [insertbook.fulfilled]:(state, action)=>{
              state.loading = false;
              state.book.push(action.payload)
              console.log(action)
            },
            [insertbook.rejected]:(state, action)=>
            {
              state.error = action.payload;
              state.loading = false;
              console.log(action)
            },
            [deletebook.pending]:(state, action)=>
            {
             
              state.loading = true;
              console.log(action);
            },
            [deletebook.fulfilled]:(state, action)=>{
              state.loading = false;
              console.log(action.payload,66666666666666666);
              state.book = state.book.filter(book=>book.id!==action.payload.id)
              console.log(action)
            },
            [deletebook.rejected]:(state, action)=>
            {
              state.error = action.payload;
              state.loading = false;
              console.log(action)
            }
        }

    })
    export default bookslice.reducer;
    // let bookaction = bookslice.actions 


    