import { createSlice } from '@reduxjs/toolkit'

    let autslice = createSlice(
        {
            name: 'auth',
            initialState: 
            {
                isAuth: true,
                name: 'ibrahim',
            },
            reducers: 
            {
                logintoggle(state ,action)
                {
                    state.isAuth = !state.isAuth
                },
                
            }
        })
        

      
        export let {logintoggle} = autslice.actions;
        export default autslice.reducer;
      

