// 

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit' 
import axios from 'axios'

// function add event
export const addEvenement = createAsyncThunk("evenement/add", async (evenement) => {
    try {
        let response = await axios.post(
            "http://localhost:5000/evenement/add", evenement,{headers: {Authorization: localStorage.getItem("token")}})
        return await response
    } catch (error) {
        console.log(error)
    }
}
)

// evene get
export const evenementget=createAsyncThunk("evenement/get",async()=>{
    try {
       let result= await axios.get("http://localhost:5000/evenement/get")
       return await result;
    } catch (error) {
        console.log(error)
    }
})

// delete evene

export const evenementdelet = createAsyncThunk("evenement/delet", async (id) => {
    try {
        let response = await axios.delete(
            `http://localhost:5000/evenement/${id}`)
        return await response
    } catch (error) {
        console.log(error)
    }
}
)
// update evenement
export const evenementupdate=createAsyncThunk('evenement/updt', async (params) => {
    try {
      let result= await axios.put(`http://localhost:5000/evenement/${params.id}`,params.evenement);
    
      return await result
      
    } catch (error) {
      console.log(error)
    }
  })



const initialState = {
    evenement:null,
    status:null,
   }


   export const eventSlice = createSlice({
    name: 'evenement',
    initialState,
    reducers: {
      
    },
    extraReducers:{
        [addEvenement.pending]: (state) => {
            state.status = 'loading'
            
        },
    
        [addEvenement.fulfilled]: (state, action) => {
            state.status = 'Success'
           
            
             
            state.evenement = action.payload?.data?.evenement;
            
            
    
        },

        [addEvenement.rejected]: (state) => {
            state.status = 'failed'
    
    
        },
    // delet

    [evenementdelet.pending]: (state) => {
        state.status = 'loading'
        
    },

    [evenementdelet.fulfilled]: (state) => {
        state.status = 'Success'
       
        

    },
    [evenementdelet.rejected]: (state) => {
        state.status = 'failed'


    },
// update
    [evenementupdate.fulfilled]: (state) => {state.status="successe"},
    [evenementupdate.rejected]: (state) => {state.status="failed"},
    [evenementupdate.pending]: (state) => {state.status="pending"},
    // get evenement
    [evenementget.pending]: (state) => {state.status="pending"},
    [evenementget.fulfilled]: (state,action) => {
    state.status="successe" ;
    state.evenement = action.payload?.data.evenement;},
    [evenementget.rejected]: (state,) => {state.status="failed"},
    
    
      },
    })
    
    // Action creators are generated for each case reducer function
    // export const { logout } = eventSlice.actions
    
    export default eventSlice.reducer
