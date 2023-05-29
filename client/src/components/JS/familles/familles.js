// 

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit' 
import axios from 'axios'

// function add famille
export const addfamillesP = createAsyncThunk("familles/add", async (familles) => {
    try {
        let response = await axios.post(
            "http://localhost:5000/familles/add", familles,{headers: {Authorization: localStorage.getItem("token")}})
        return await response
    } catch (error) {
        console.log(error)
    }
}
)

// evene get
export const getfamillesP=createAsyncThunk("familles/get",async()=>{
    try {
       let result= await axios.get("http://localhost:5000/familles/get")
       return await result;
    } catch (error) {
        console.log(error)
    }
})

// delete evene

// delete evene

export const deletfamillesP = createAsyncThunk("familles/delet", async (id) => {
    try {
        let response = await axios.delete(
            `http://localhost:5000/familles/${id}`)
        return await response
    } catch (error) {
        console.log(error)
    }
}
)
export const updatefamillesP =createAsyncThunk('familles/updt',async (params) => {
    try {
       
      let result= axios.put(`http://localhost:5000/familles/${params.id}`,params.familles);
    
      return result
      
    } catch (error) {
      console.log(error)
    }
    
  })



const initialState = {
    familles:null,
    status:null,
   }


   export const familles = createSlice({
    name: 'familles',
    initialState,
    reducers: {
      
    },
    extraReducers:{
        [addfamillesP.pending]: (state) => {
            state.status = 'loading'
            
        },
    
        [addfamillesP.fulfilled]: (state, action) => {
            state.status = 'Success'
           
            
             
            state.familles = action.payload?.data?.familles;
            
            
    
        },

        [addfamillesP.rejected]: (state) => {
            state.status = 'failed'
    
    
        },
    // delet

    [deletfamillesP.pending]: (state) => {
        state.status = 'loading'
        
    },

    [deletfamillesP.fulfilled]: (state) => {
        state.status = 'Success'
       
        

    },
    [deletfamillesP.rejected]: (state) => {
        state.status = 'failed'


    },
// update
[updatefamillesP.fulfilled]: (state) => {state.status="successe"},
[updatefamillesP.rejected]: (state) => {state.status="failed"},
[updatefamillesP.pending]: (state) => {state.status="pending"},


    [getfamillesP.pending]: (state) => {state.status="pending"},
    [getfamillesP.fulfilled]: (state,action) => {
    state.status="successe" ;
    state.familles = action.payload?.data.familles;},
    [getfamillesP.rejected]: (state,) => {state.status="failed"},
    
    
      },
    })
    
    // Action creators are generated for each case reducer function
    // export const { logout } = eventSlice.actions
    
    export default familles.reducer
